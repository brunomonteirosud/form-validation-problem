import React from 'react';
import styled from 'styled-components';

const CheckboxField = styled.input`
    font-size: 1em;
    border-radius: 0.25em;
    border: solid 1px #ddd;
    padding: 0.5em 0.5em;
    color: #555;
    &:focus {
        outline: none;
        border-color: #0b77db;
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

const Checkbox = ({
    inputType,
    inputId,
    inputName,
    inputValue,
    isRequired,
    isDisabled,
    setValue
}: IProps) => {
    const handleClick = (event: React.SyntheticEvent<HTMLInputElement>) => {
        setValue(inputId, event.currentTarget.checked);
    };

    return (
        <CheckboxField
            type={inputType}
            id={inputId}
            name={inputName}
            value={inputValue}
            required={isRequired}
            disabled={isDisabled}
            onClick={handleClick}
        />
    );
};

export default Checkbox;
