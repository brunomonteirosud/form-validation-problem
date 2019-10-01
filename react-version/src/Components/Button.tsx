import React from "react";
import styled from "styled-components";

const ButtonElement = styled.input`
    background: #333;
    border-color: #333;
    border: solid 1px transparent;
    background: #0B77DB;
    color: #fff;
    font-size: .875em;
    padding: .75em 1em;
    cursor: pointer;

    &:focus {
        background: #3D6EAC;
        outline: none;
        border-color: #0B77DB;
        box-shadow: 0 0 6px rgba(48, 140, 255, 0.25);
    }
    &:hover {
        background: #3C9AA7;
    }
`;

interface IProps {
    inputType: string;
    inputValue: string;
    handleClick: () => void;
}

const Button = (props: IProps) => {
    return (
        <ButtonElement
            type={props.inputType}
            value={props.inputValue}
            onClick={props.handleClick}
        />
    );
};
    
export default Button;