import React from "react";
import styled from "styled-components";

interface ILabel {
    valid: boolean;
}

const LabelElement = styled.label<ILabel>`
    vertical-align: middle;
    width: 10em;
    display: inline-block;
    color: ${(props) => (props.valid ? "#333" : "red")};
`;

const LabelElementForCheckbox = styled.label<ILabel>`
    margin-right: 1em;
    color: ${(props) => (props.valid ? "#333" : "red")};
`;

interface IProps {
    for?: string;
    children: string;
    forCheckbox?: boolean;
    isValid?: boolean;
}

const Label = (props: IProps) => {
    const [isValid, setIsValid] = React.useState(false);

    React.useEffect(() => {
        if (props.isValid) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }, [props.isValid]);

    return props.forCheckbox ?
    <LabelElementForCheckbox htmlFor={props.for} valid={isValid}>{props.children}</LabelElementForCheckbox>
    :
    <LabelElement htmlFor={props.for} valid={isValid}>{props.children}</LabelElement>;
};
    
export default Label;