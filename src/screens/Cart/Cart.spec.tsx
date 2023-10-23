import 'react-native';
import React from 'react';

import {screen} from '@testing-library/react-native';
import {Cart} from '.';
import {api} from '../../services/api';
import {productInfoList} from '../../../tests/mock/product';
import {renderWithProviders} from '../../../tests/utils/renderWithProviders';

beforeEach(() => {
  jest.spyOn(api, 'get').mockResolvedValue({data: productInfoList});
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('Component <Cart />', () => {
  it('should render', () => {
    renderWithProviders(<Cart />);

    const title = screen.getByText('Carrinho');
    expect(title).toBeOnTheScreen();
  });
});
