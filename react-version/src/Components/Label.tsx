import React from 'react';
import styled from 'styled-components';

interface ILabel {
    valid: boolean;
}

const LabelElement = styled.label<ILabel>`
    vertical-align: middle;
    width: 10em;
    display: inline-block;
    color: ${props => (props.valid ? '#333' : 'red')};
`;

const LabelElementForCheckbox = styled.label<ILabel>`
    margin-right: 1em;
    color: ${props => (props.valid ? '#333' : 'red')};
`;

interface IProps {
    forReference?: string;
    children: string;
    forCheckbox?: boolean;
    isValid?: boolean;
}

const Label = ({ forReference, children, forCheckbox, isValid }: IProps) => {
    const [isValidLocal, setIsValidLocal] = React.useState(false);

    React.useEffect(() => {
        if (isValid) {
            setIsValidLocal(true);
        } else {
            setIsValidLocal(false);
        }
    }, [isValid]);

    return forCheckbox ? (
        <LabelElementForCheckbox htmlFor={forReference} valid={isValidLocal}>
            {children}
        </LabelElementForCheckbox>
    ) : (
        <LabelElement htmlFor={forReference} valid={isValidLocal}>
            {children}
        </LabelElement>
    );
};

export default Label;
