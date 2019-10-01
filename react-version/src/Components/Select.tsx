import React from 'react';
import styled from 'styled-components';

interface ISelect {
    error: boolean;
}

const SelectElement = styled.select<ISelect>`
    font-size: 1em;
    border-radius: 0.25em;
    width: 17em;
    -webkit-appearance: none;
    border-color: ${props => (props.error ? 'red' : '#ddd')};
    &:focus {
        border-color: ${props => (props.error ? 'red' : '#ddd')};
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

const Select = ({
    selectId,
    selectName,
    isRequired,
    options,
    setValue
}: IProps) => {
    const [isValid, setIsValid] = React.useState(false);
    const [currentValue, setCurrentValue] = React.useState('');

    React.useEffect(() => {
        if (!isRequired) {
            setIsValid(true);
        } else if (currentValue === '') {
            setIsValid(false);
        }
    }, [isRequired]);

    const handleChange = (event: React.SyntheticEvent<HTMLSelectElement>) => {
        if (event.currentTarget.value === '') {
            setIsValid(false);
            setValue(selectId, false);
        } else {
            setIsValid(true);
            setValue(selectId, true);
        }

        setCurrentValue(event.currentTarget.value);
    };

    const formattedOptions = options.map((item, idx) => {
        return (
            <option key={idx} value={item.value}>
                {item.content}
            </option>
        );
    });
    return (
        <SelectElement
            id={selectId}
            name={selectName}
            required={isRequired}
            onChange={handleChange}
            error={!isValid}
        >
            {formattedOptions}
        </SelectElement>
    );
};

export default Select;
