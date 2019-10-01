import React from "react";
import styled from "styled-components";

interface ISelect {
    error: boolean;
}

const SelectElement = styled.select<ISelect>`
    font-size: 1em;
    border-radius: .25em;
    width: 17em;
    -webkit-appearance: none;
    border-color: ${(props) => (props.error ? "red" : "#ddd")};
    &:focus {
        border-color: ${(props) => (props.error ? "red" : "#ddd")};
    }
`;

interface IOption {
    value: string;
    content: string;
}

interface IProps {
    selectId: string;
    selectName: string;
    isRequired?: boolean;
    options: IOption[];
    setValue: (key: string, value: boolean) => void;
}

const Select = (props: IProps) => {
    const [isValid, setIsValid] = React.useState(false);
    const [currentValue, setCurrentValue] = React.useState("");

    React.useEffect(() => {
        if (!props.isRequired) {
            setIsValid(true);
        } else if (currentValue === "") {
            setIsValid(false);
        }
    }, [props.isRequired]);

    const handleChange = (event: React.SyntheticEvent<HTMLSelectElement>) => {
        if (event.currentTarget.value === "") {
            setIsValid(false);
            props.setValue(props.selectId, false);
        } else {
            setIsValid(true);
            props.setValue(props.selectId, true);
        }

        setCurrentValue(event.currentTarget.value);
    }

    const options = props.options.map((item, idx) => {
        return <option key={idx} value={item.value}>{item.content}</option>
    });
    return (
        <SelectElement
            id={props.selectId}
            name={props.selectName}
            required={props.isRequired}
            onChange={handleChange}
            error={!isValid}
        >
            {options}
        </SelectElement>
    );
};
    
export default Select;