/* eslint-disable */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from '../Input';

test('Render Input component without errors', () => {
    const mockFunc = jest.fn(() => {
        return;
    });
    const { getByTestId } = render(
        <Input
            inputType="email"
            inputId="email"
            inputName="email"
            isRequired
            setValue={mockFunc}
        />
    );

    expect(getByTestId('testId_email')).not.toBeNull();
});

test('Render Input component with correct style when valid/invalid', () => {
    const mockFunc = jest.fn(() => {
        return;
    });
    const { container } = render(
        <Input
            inputType="email"
            inputId="email"
            inputName="email"
            isRequired
            setValue={mockFunc}
        />
    );

    const elem = container.querySelector('#email');
    let elemStyle = window.getComputedStyle(elem);

    expect(elemStyle.borderColor).toEqual('red');

    fireEvent.change(elem, { target: { value: 'name@domain.com' } });
    elemStyle = window.getComputedStyle(elem);

    expect(elemStyle.borderColor).toEqual('#ddd');
});

test('Render Input component with correct style when disabled', () => {
    const mockFunc = jest.fn(() => {
        return;
    });
    const { container } = render(
        <Input
            inputType="email"
            inputId="email"
            inputName="email"
            isDisabled
            setValue={mockFunc}
        />
    );

    const elem = container.querySelector('#email');
    const elemStyle = window.getComputedStyle(elem);

    expect(elemStyle.backgroundColor).toEqual('rgb(238, 238, 238)');
});
