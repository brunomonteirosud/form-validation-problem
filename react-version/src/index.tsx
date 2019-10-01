import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Input from './Components/Input';
import Checkbox from './Components/Checkbox';
import Label from './Components/Label';
import Select from './Components/Select';
import Button from './Components/Button';
import TIGER from './Helper/constants';
import { validateAnimals, validateTigerType } from './Helper/validation';
import getErrorMessage from './Helper/messages';

const Form = styled.div`
    background: #fff;
    padding: 1em 1.25em;
    border: solid 1px #ccc;
    border-radius: 0.25em;
`;

const Fieldset = styled.fieldset`
    border: none;
    padding: 0;
    & + fieldset {
        border-top: solid 1px #eee;
    }
`;

const Title = styled.h1`
    color: #576774;
    &:first-child {
        margin-top: 0;
    }
`;

const SubTitle = styled.h3`
    color: #576774;
`;

interface INotificationBox {
    show: boolean;
}

const NotificationBox = styled.div<INotificationBox>`
    padding: 1em;
    background-color: #ffefef;
    color: #a50707;
    border-radius: 0.25em;
    display: ${props => (props.show ? 'block' : 'none')};
`;

const NotificationBoxMessage = styled.p`
    margin: 0.25em 0;
`;

const initialFormState = {
    email: false,
    password: false,
    colour: false,
    animals: false,
    tiger_type: false
};

const initialSelectedAnimals = {
    bear: false,
    tiger: false,
    snake: false,
    donkey: false
};

const AppForm = () => {
    const [formState, setFormState] = React.useState(initialFormState);
    const [selectedAnimals, setSelectedAnimals] = React.useState(
        initialSelectedAnimals
    );
    const [tigerSelected, setTigerSelected] = React.useState(false);
    const [errorMessages, setErrorMessages] = React.useState([]);

    const checkFormErrors = currentState => {
        const errors = Object.entries(currentState).filter(item => {
            return item[1] === false;
        });
        const formatedErrorMessages = errors
            .filter(item => {
                const message = getErrorMessage(item[0], tigerSelected);
                return message !== '';
            })
            .map((item, idx) => {
                const message = getErrorMessage(item[0], tigerSelected);
                return (
                    <NotificationBoxMessage key={idx}>
                        {message}
                    </NotificationBoxMessage>
                );
            });

        setErrorMessages(formatedErrorMessages);

        if (formatedErrorMessages.length > 0) {
            return true;
        }
        return false;
    };

    React.useEffect(() => {
        checkFormErrors(formState);
    }, [tigerSelected]);

    const handleChangeValue = (field: string, value: boolean) => {
        const newFormState = { ...formState, [field]: value };
        setFormState(newFormState);

        checkFormErrors(newFormState);
    };

    const handleSelectAnimal = (animal: string, value: boolean) => {
        if (animal === TIGER) {
            setTigerSelected(value);
        }

        const newSelectedAnimals = { ...selectedAnimals, [animal]: value };
        setSelectedAnimals(newSelectedAnimals);

        const newFormState = {
            ...formState,
            animals: validateAnimals(newSelectedAnimals)
        };
        setFormState(newFormState);

        checkFormErrors(newFormState);
    };

    const submitForm = () => {
        if (!checkFormErrors(formState)) {
            // Call backend to submit form
            console.log('Success!');
        }
    };
    return (
        <Form>
            <Title>Fill out this awesome form</Title>
            <Fieldset>
                <SubTitle>Your details</SubTitle>
                <p>
                    <Label forReference="email" isValid={formState.email}>
                        Email
                    </Label>
                    <Input
                        inputType="email"
                        inputId="email"
                        inputName="email"
                        isRequired
                        setValue={handleChangeValue}
                    />
                </p>
                <p>
                    <Label forReference="password" isValid={formState.password}>
                        Password
                    </Label>
                    <Input
                        inputType="password"
                        inputId="password"
                        inputName="password"
                        isRequired
                        setValue={handleChangeValue}
                    />
                </p>
            </Fieldset>

            <Fieldset>
                <SubTitle>Your animal</SubTitle>
                <p>
                    <Label forReference="colour" isValid={formState.colour}>
                        Colour
                    </Label>
                    <Select
                        selectName="colour"
                        selectId="colour"
                        isRequired
                        setValue={handleChangeValue}
                        options={[
                            { value: '', content: 'Choose colour' },
                            { value: 'blue', content: 'Blue' },
                            { value: 'green', content: 'Green' },
                            { value: 'red', content: 'Red' },
                            { value: 'black', content: 'Black' },
                            { value: 'brown', content: 'Brown' }
                        ]}
                    />
                </p>
                <p>
                    <Label isValid={formState.animals}>Animal</Label>

                    <Checkbox
                        inputType="checkbox"
                        inputName="animal"
                        inputValue="bear"
                        inputId="bear"
                        setValue={handleSelectAnimal}
                    />
                    <Label forReference="bear" forCheckbox isValid>
                        Bear
                    </Label>

                    <Checkbox
                        inputType="checkbox"
                        inputName="animal"
                        inputValue="tiger"
                        inputId="tiger"
                        setValue={handleSelectAnimal}
                    />
                    <Label forReference="tiger" forCheckbox isValid>
                        Tiger
                    </Label>

                    <Checkbox
                        inputType="checkbox"
                        inputName="animal"
                        inputValue="snake"
                        inputId="snake"
                        setValue={handleSelectAnimal}
                    />
                    <Label forReference="snake" forCheckbox isValid>
                        Snake
                    </Label>

                    <Checkbox
                        inputType="checkbox"
                        inputName="animal"
                        inputValue="donkey"
                        inputId="donkey"
                        setValue={handleSelectAnimal}
                    />
                    <Label forReference="donkey" forCheckbox isValid>
                        Donkey
                    </Label>
                </p>
                <p>
                    <Label
                        forReference="tiger_type"
                        isValid={validateTigerType(
                            tigerSelected,
                            formState.tiger_type
                        )}
                    >
                        Type of tiger
                    </Label>
                    <Input
                        inputType="text"
                        inputName="tiger_type"
                        inputId="tiger_type"
                        isDisabled={!tigerSelected}
                        isRequired={tigerSelected}
                        setValue={handleChangeValue}
                    />
                </p>
            </Fieldset>
            <Fieldset>
                <p>
                    <Button
                        inputType="submit"
                        inputValue="Create account"
                        handleClick={submitForm}
                    />
                </p>
                <NotificationBox show={errorMessages.length > 0}>
                    {errorMessages}
                </NotificationBox>
            </Fieldset>
        </Form>
    );
};

ReactDOM.render(<AppForm />, document.getElementById('root'));
