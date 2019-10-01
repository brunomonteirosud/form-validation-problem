/* eslint-disable */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../Button';

test('Render Button component and triggers onClick', () => {
    const mockFunc = jest.fn(() => {
        return;
    });
    const { container } = render(
        <Button inputType="submit" inputValue="Submit" handleClick={mockFunc} />
    );

    const buttonElem = container.querySelector('input');
    fireEvent.click(buttonElem);

    expect(mockFunc).toBeCalled();
});
