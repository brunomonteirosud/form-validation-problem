import React from 'react';
import styled from 'styled-components';
import { validateEmail, validatePassword } from '../Helper/validation';

interface IInput {
    error: boolean;
}

const InputField = styled.input<IInput>`
    font-size: 1em;
    border-radius: 0.25em;
    border: solid 1px #ddd;
    border-color: ${props => (props.error ? 'red' : '#ddd')};
    padding: 0.5em 0.5em;
    color: #555;
    width: 16em;
    &:focus {
        outline: none;
        border-color: ${props => (props.error ? 'red' : '#0B77DB')};
        box-shadow: 0 0 6px rgba(48, 140, 255, 0.25);
    }
    &:disabled {
        color: #999;
        background-color: #eee;
    }
`;

interface IProps {
    inputType: string;
    inputId: string;
    inputName: string;
    isRequired?: boolean;
    isDisabled?: boolean;
    setValue: (key: string, value: boolean) => void;
}

const Input = ({
    isRequired,
    inputType,
    inputId,
    inputName,
    isDisabled,
    setValue
}: IProps) => {
    const [isValid, setIsValid] = React.useState(false);
    const [currentValue, setCurrentValue] = React.useState('');

    React.useEffect(() => {
        if (!isRequired) {
            setIsValid(true);
        } else if (currentValue === '') {
            setIsValid(false);
        }
    }, [isRequired]);

    const handleChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
        const elementValue = event.currentTarget.value;
        if (inputType === 'email') {
            setIsValid(validateEmail(elementValue));
            setValue(inputId, validateEmail(elementValue));
        } else if (inputType === 'password') {
            setIsValid(validatePassword(elementValue));
            setValue(inputId, validatePassword(elementValue));
        } else if (event.currentTarget.value === '') {
            setIsValid(false);
            setValue(inputId, false);
        } else {
            setIsValid(true);
            setValue(inputId, true);
        }

        setCurrentValue(elementValue);
    };

    return (
        <InputField
            type={inputType}
            id={inputId}
            data-testid={`testId_${inputId}`}
            name={inputName}
            disabled={isDisabled}
            onChange={handleChange}
            error={!isValid}
        />
    );
};

export default Input;
