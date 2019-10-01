/* eslint-disable */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Label from '../Label';

test('Render Label component with correct style when invalid', () => {
    const { container } = render(<Label isValid={false}>test</Label>);

    const labelElem = container.querySelector('label');
    let elemStyle = window.getComputedStyle(labelElem);

    expect(elemStyle.color).toEqual('red');
});

test('Render Label component with correct style when valid', () => {
    const { container } = render(<Label isValid={true}>test</Label>);

    const labelElem = container.querySelector('label');
    let elemStyle = window.getComputedStyle(labelElem);

    expect(elemStyle.color).toEqual('rgb(51, 51, 51)');
});
