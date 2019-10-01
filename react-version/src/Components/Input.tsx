import React from "react";
import styled from "styled-components";
import { validateEmail, validatePassword } from "../Helper/validation";

interface IInput {
    error: boolean;
}

const InputField = styled.input<IInput>`
    font-size: 1em;
    border-radius: .25em;
    border: solid 1px #ddd;
    border-color: ${(props) => (props.error ? "red" : "#ddd")};
    padding: .5em .5em;
    color: #555;
    width: 16em;
    &:focus {
        outline: none;
        border-color: ${(props) => (props.error ? "red" : "#0B77DB")};
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

const Input = (props: IProps) => {
    const [isValid, setIsValid] = React.useState(false);
    const [currentValue, setCurrentValue] = React.useState("");

    React.useEffect(() => {
        if (!props.isRequired) {
            setIsValid(true);
        } else if (currentValue === "") {
            setIsValid(false);
        }
    }, [props.isRequired]);

    const handleChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
        const currentValue = event.currentTarget.value;
        if (props.inputType === "email") {
            setIsValid(validateEmail(currentValue))
            props.setValue(props.inputId, validateEmail(currentValue));
        } else if (props.inputType === "password") {
            setIsValid(validatePassword(currentValue));
            props.setValue(props.inputId, validatePassword(currentValue));
        } else  if (event.currentTarget.value === "") {
            setIsValid(false);
            props.setValue(props.inputId, false);
        } else {
            setIsValid(true);
            props.setValue(props.inputId, true);
        }
        
        setCurrentValue(currentValue);
    }

    return (
        <InputField
            type={props.inputType}
            id={props.inputId}
            name={props.inputName}
            disabled={props.isDisabled}
            onChange={handleChange}
            error={!isValid}
        />
    );
};
    
export default Input;