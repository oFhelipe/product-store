import 'react-native';
import React from 'react';
import {App} from './App';

import {screen, render, fireEvent} from '@testing-library/react-native';
import {api} from './src/services/api';
import {serviceGetMock} from './tests/mock/services';
import {act} from 'react-test-renderer';
import {formatNumberToCurrency} from './src/utils/formatNumberToCurrency';
import {productInfoList} from './tests/mock/product';

beforeAll(() => {
  jest.spyOn(api, 'get').mockImplementation(serviceGetMock);
});

afterAll(() => {
  jest.clearAllMocks();
});

describe('Component <App />', () => {
  it('should render', () => {
    render(<App />);
    const title = screen.getByText('Encontre o que você precisa');
    expect(title).toBeOnTheScreen();
  });

  it('should add an item in cart', async () => {
    render(<App />);
    const products = await screen.findAllByTestId('product-card');
    act(() => {
      fireEvent.press(products[0]);
    });
    const buyButton = await screen.findByTestId('buy-button');
    act(() => {
      fireEvent.press(buyButton);
    });

    const total = screen.getByText(
      formatNumberToCurrency(productInfoList[0].price),
    );
    expect(total).toBeOnTheScreen();
  });
});
