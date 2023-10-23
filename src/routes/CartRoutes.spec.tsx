import React from 'react';
import {screen} from '@testing-library/react-native';
import {renderWithProviders} from '../../tests/utils/renderWithProviders';
import {CartRoutes} from './CartRoutes';

describe(`Route: CartRoutes`, () => {
  it('should star render on cart screen', () => {
    renderWithProviders(<CartRoutes />);
    const cartScreenTitle = screen.getByTestId('title');
    expect(cartScreenTitle).toBeOnTheScreen();
    expect(cartScreenTitle.children[0]).toBe('Carrinho');
  });
});
