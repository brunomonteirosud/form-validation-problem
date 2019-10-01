import React from "react";
import styled from "styled-components";

const CheckboxField = styled.input`
    font-size: 1em;
    border-radius: .25em;
    border: solid 1px #ddd;
    padding: .5em .5em;
    color: #555;
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

interface IProps {
    inputType: string;
    inputId: string;
    inputName: string;
    inputValue?: string;
    isRequired?: boolean;
    isDisabled?: boolean;
    setValue: (key: string, value: boolean) => void;
}

const Checkbox = (props: IProps) => {
    const handleClick = (event: React.SyntheticEvent<HTMLInputElement>) => {
        props.setValue(props.inputId, event.currentTarget.checked)
    }

    return (
        <CheckboxField
            type={props.inputType}
            id={props.inputId}
            name={props.inputName}
            value={props.inputValue}
            required={props.isRequired}
            disabled={props.isDisabled}
            onClick={handleClick}
        />
    );
};
    
export default Checkbox;