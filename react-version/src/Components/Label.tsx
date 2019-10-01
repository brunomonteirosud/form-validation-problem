import React from "react";
import styled from "styled-components";

const LabelElement = styled.label`
    vertical-align: middle;
    width: 10em;
    display: inline-block;
`;

const LabelElementForCheckbox = styled.label`
    margin-right: 1em;
`;

interface Props {
    for?: string;
    children: string;
    forCheckbox?: boolean;
}

const Label = (props: Props) => {
    return props.forCheckbox ?
    <LabelElementForCheckbox htmlFor={props.for}>{props.children}</LabelElementForCheckbox>
    :
    <LabelElement htmlFor={props.for}>{props.children}</LabelElement>;
};
    
export default Label;