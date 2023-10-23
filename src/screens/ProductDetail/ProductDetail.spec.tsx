import React from 'react';

import {screen} from '@testing-library/react-native';

import {api} from '../../services/api';
import {productInfo} from '../../../tests/mock/product';
import {renderWithProviders} from '../../../tests/utils/renderWithProviders';
import {formatNumberToCurrency} from '../../utils/formatNumberToCurrency';
import {ProductDetail} from '.';

const route = {params: {id: 1}, key: '', name: 'ProductDetail'} as const;

beforeEach(() => {
  jest.spyOn(api, 'get').mockResolvedValue({data: productInfo});
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('Component <ProductDetail />', () => {
  it('should render with info', async () => {
    renderWithProviders(<ProductDetail route={route} />);

    const title = await screen.findByText(productInfo.title);
    expect(title).toBeOnTheScreen();

    const category = await screen.findByText(productInfo.category);
    expect(category).toBeOnTheScreen();

    const description = await screen.findByText(productInfo.description);
    expect(description).toBeOnTheScreen();

    const rating = await screen.findByText(productInfo.rating.rate.toString());
    expect(rating).toBeOnTheScreen();

    const count = await screen.findByText(`(${productInfo.rating.count})`);
    expect(count).toBeOnTheScreen();

    const price = await screen.findByText(
      formatNumberToCurrency(productInfo.price),
    );
    expect(price).toBeOnTheScreen();
  });

  it('should render image with correct uri', async () => {
    renderWithProviders(<ProductDetail route={route} />);

    const image = await screen.findByTestId('product-image');

    expect(image.props.source.uri).toBe(productInfo.image);
  });
});
