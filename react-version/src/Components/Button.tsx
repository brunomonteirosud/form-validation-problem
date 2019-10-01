import React from 'react';
import styled from 'styled-components';

const ButtonElement = styled.input`
    background: #333;
    border-color: #333;
    border: solid 1px transparent;
    background: #0b77db;
    color: #fff;
    font-size: 0.875em;
    padding: 0.75em 1em;
    cursor: pointer;

    &:focus {
        background: #3d6eac;
        outline: none;
        border-color: #0b77db;
        box-shadow: 0 0 6px rgba(48, 140, 255, 0.25);
    }
    &:hover {
        background: #3c9aa7;
    }
`;

interface IProps {
    inputType: string;
    inputValue: string;
    handleClick: () => void;
}

const Button = ({ inputType, inputValue, handleClick }: IProps) => {
    return (
        <ButtonElement
            type={inputType}
            value={inputValue}
            onClick={handleClick}
        />
    );
};

export default Button;
