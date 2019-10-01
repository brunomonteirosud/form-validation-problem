import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

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
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' name='email' required />
                </p>
                <p>
                    <label htmlFor='password'>
                    Password
                    </label>
                    <input type='password' id='password' name='password' required />
                </p>
            </Fieldset>
            
            <Fieldset>
            <SubTitle>Your animal</SubTitle>
                <p>
                    <label htmlFor='colour'>
                    Colour
                    </label>
                    <select name='colour' id='colour' required>
                        <option value=''>Choose colour</option>
                        <option value='blue'>Blue</option>
                        <option value='green'>Green</option>
                        <option value='red'>Red</option>
                        <option value='black'>Black</option>
                        <option value='brown'>Brown</option>
                    </select>
                </p>
                <p>
                    <span>
                    Animal
                    </span>
                    
                    <input type='checkbox' name='animal' value='bear' id='bear' />
                    <label htmlFor='bear'>
                    Bear
                    </label>
                    
                    <input type='checkbox' name='animal' value='tiger' id='tiger' />
                    <label htmlFor='tiger'>
                    Tiger
                    </label>
                    
                    <input type='checkbox' name='animal' value='snake' id='snake' />
                    <label htmlFor='snake'>
                    Snake
                    </label>
                    
                    <input type='checkbox' name='animal' value='donkey' id='donkey' />
                    <label htmlFor='donkey'>
                    Donkey
                    </label>
                </p>
                <p>
                    <label htmlFor='tiger_type'>
                    Type of tiger
                    </label>
                    <input type='text' name='tiger_type' id='tiger_type' disabled />
                </p>
            </Fieldset>
            <Fieldset>
                <p>
                    <input type='submit' value='Create account' />
                </p>
                <div id='notification_box'></div>
            </Fieldset>
        </Form>
        );
    };
    
    ReactDOM.render(<AppForm />, document.getElementById("root"));