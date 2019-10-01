import React from "react";
import styled from "styled-components";

const InputField = styled.input`
    font-size: 1em;
    border-radius: .25em;
    border: solid 1px #ddd;
    padding: .5em .5em;
    color: #555;
    width: 16em;
    &:focus {
        outline: none;
        border-color: #0B77DB;
        box-shadow: 0 0 6px rgba(48, 140, 255, 0.25);
    }
    &:disabled {
        color: #999;
        background-color: #eee;
    }
`;

interface Props {
    inputType: string;
    inputId: string;
    inputName: string;
    isRequired?: boolean;
    isDisabled?: boolean;
}

const Input = (props: Props) => {
    return (
        <InputField
            type={props.inputType}
            id={props.inputId}
            name={props.inputName}
            required={props.isRequired}
            disabled={props.isDisabled}
        />
    );
};
    
export default Input;