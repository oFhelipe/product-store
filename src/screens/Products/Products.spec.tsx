import 'react-native';
import React from 'react';

import {screen} from '@testing-library/react-native';
import {Products} from '.';
import {api} from '../../services/api';
import {productInfoList} from '../../../tests/mock/product';
import {renderWithProviders} from '../../../tests/utils/renderWithProviders';

beforeEach(() => {
  jest.spyOn(api, 'get').mockResolvedValue({data: productInfoList});
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('Component <Products />', () => {
  it('should render', () => {
    renderWithProviders(<Products />);

    const title = screen.getByText('Encontre o que você precisa');
    expect(title).toBeOnTheScreen();
  });

  it('should render two product card', async () => {
    renderWithProviders(<Products />);

    const cards = await screen.findAllByTestId('product-card');
    expect(cards.length).toBe(2);
  });
});
