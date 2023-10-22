import 'react-native';
import React from 'react';

import {fireEvent, screen} from '@testing-library/react-native';

import {renderWithProviders} from '../../../tests/utils/renderWithProviders';
import {IncrementDecrement} from '.';
import {act} from 'react-test-renderer';

describe('Component <IncrementDecrement />', () => {
  it('should render with current number', () => {
    const onPressDecrement = jest.fn();
    const onPressIncrement = jest.fn();
    renderWithProviders(
      <IncrementDecrement
        onPressDecrement={onPressDecrement}
        onPressIncrement={onPressIncrement}
        quantity={1}
      />,
    );

    const quantity = screen.getByText('1');
    expect(quantity).toBeOnTheScreen();
  });

  it('should call decrement function', () => {
    let quantity = 1;
    const onPressDecrement = jest.fn(() => quantity--);
    const onPressIncrement = jest.fn(() => quantity++);
    renderWithProviders(
      <IncrementDecrement
        onPressDecrement={onPressDecrement}
        onPressIncrement={onPressIncrement}
        quantity={quantity}
      />,
    );

    const button = screen.getByTestId('decrement-button');

    act(() => {
      fireEvent.press(button);
    });

    expect(quantity).toBe(0);
    expect(onPressDecrement).toBeCalledTimes(1);
  });

  it('should call increment function', () => {
    let quantity = 1;
    const onPressDecrement = jest.fn(() => quantity--);
    const onPressIncrement = jest.fn(() => quantity++);
    renderWithProviders(
      <IncrementDecrement
        onPressDecrement={onPressDecrement}
        onPressIncrement={onPressIncrement}
        quantity={quantity}
      />,
    );

    const button = screen.getByTestId('increment-button');

    act(() => {
      fireEvent.press(button);
    });

    expect(quantity).toBe(2);
    expect(onPressIncrement).toBeCalledTimes(1);
  });
});
