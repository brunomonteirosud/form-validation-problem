import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Input from "./Components/Input";
import Checkbox from "./Components/Checkbox";
import Label from "./Components/Label";
import Select from "./Components/Select";
import Button from "./Components/Button";

const Form = styled.form`
    background: #fff;
    padding: 1em 1.25em;
    border: solid 1px #ccc;
    border-radius: .25em;
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

const AppForm = () => {
    return (
        <Form method='post' action=''>
            <Title>Fill out this awesome form</Title>
            <Fieldset>
                <SubTitle>Your details</SubTitle>
                <p>
                    <Label for='email'>Email</Label>
                    <Input inputType='email' inputId='email' inputName='email' isRequired={true} />
                </p>
                <p>
                    <Label for='password'>
                    Password
                    </Label>
                    <Input inputType='password' inputId='password' inputName='password' isRequired={true} />
                </p>
            </Fieldset>
            
            <Fieldset>
            <SubTitle>Your animal</SubTitle>
                <p>
                    <Label for='colour'>
                    Colour
                    </Label>
                    <Select selectName='colour' selectId='colour' isRequired={true} options={
                        [
                            {value: '', content: 'Choose colour'},
                            {value: 'blue', content: 'Blue'},
                            {value: 'green', content: 'Green'},
                            {value: 'red', content: 'Red'},
                            {value: 'black', content: 'Black'},
                            {value: 'brown', content: 'Brown'},
                        ]
                    } />
                </p>
                <p>
                    <span>
                    Animal
                    </span>
                    
                    <Checkbox inputType='checkbox' inputName='animal' inputValue='bear' inputId='bear' />
                    <Label for='bear' forCheckbox={true}>
                    Bear
                    </Label>
                    
                    <Checkbox inputType='checkbox' inputName='animal' inputValue='tiger' inputId='tiger' />
                    <Label for='tiger' forCheckbox={true}>
                    Tiger
                    </Label>
                    
                    <Checkbox inputType='checkbox' inputName='animal' inputValue='snake' inputId='snake' />
                    <Label for='snake' forCheckbox={true}>
                    Snake
                    </Label>
                    
                    <Checkbox inputType='checkbox' inputName='animal' inputValue='donkey' inputId='donkey' />
                    <Label for='donkey' forCheckbox={true}>
                    Donkey
                    </Label>
                </p>
                <p>
                    <Label for='tiger_type'>
                    Type of tiger
                    </Label>
                    <Input inputType='text' inputName='tiger_type' inputId='tiger_type' isDisabled={true} />
                </p>
            </Fieldset>
            <Fieldset>
                <p>
                    <Button inputType='submit' inputValue='Create account' />
                </p>
                <div id='notification_box'></div>
            </Fieldset>
        </Form>
    );
};

ReactDOM.render(<AppForm />, document.getElementById("root"));