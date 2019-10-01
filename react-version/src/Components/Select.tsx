import React from "react";
import styled from "styled-components";

const SelectElement = styled.select`
    font-size: 1em;
    border-radius: .25em;
    width: 17em;
    -webkit-appearance: none;
`;

interface Option {
    value: string;
    content: string;
}

interface Props {
    selectId: string;
    selectName: string;
    isRequired?: boolean;
    options: Option[];
}

const Select = (props: Props) => {
    const options = props.options.map((item, idx) => {
        return <option key={idx} value={item.value}>{item.content}</option>
    });
    return (
        <SelectElement
            id={props.selectId}
            name={props.selectName}
            required={props.isRequired}
        >
            {options}
        </SelectElement>
    );
};
    
export default Select;