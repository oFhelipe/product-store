import 'react-native';
import React from 'react';

import {screen} from '@testing-library/react-native';

import {renderWithProviders} from '../../../tests/utils/renderWithProviders';
import {CartProductCard} from '.';
import {IProductInCart} from '../../interfaces/IProductInCart';
import {formatNumberToCurrency} from '../../utils/formatNumberToCurrency';

const productInfo: IProductInCart = {
  id: 1,
  title: 'title',
  price: 10.5,
  image: 'image_url',
  quantity: 1,
};

describe('Component <CartProductCard />', () => {
  it('should render with info', () => {
    renderWithProviders(<CartProductCard product={productInfo} />);

    const title = screen.getByText(productInfo.title);
    expect(title).toBeOnTheScreen();

    const quantity = screen.getByText(productInfo.quantity.toString());
    expect(quantity).toBeOnTheScreen();

    const price = screen.getByText(formatNumberToCurrency(productInfo.price));
    expect(price).toBeOnTheScreen();
  });

  it('should render image with correct uri', () => {
    renderWithProviders(<CartProductCard product={productInfo} />);

    const image = screen.getByTestId('product-image');

    expect(image.props.source.uri).toBe(productInfo.image);
  });

  it('should render calculated total value', () => {
    const productCurrentTestInfo: IProductInCart = {
      ...productInfo,
      quantity: 2,
    };
    renderWithProviders(<CartProductCard product={productCurrentTestInfo} />);

    const title = screen.getByText(productCurrentTestInfo.title);
    expect(title).toBeOnTheScreen();

    const quantity = screen.getByText(
      productCurrentTestInfo.quantity.toString(),
    );
    expect(quantity).toBeOnTheScreen();

    const price = screen.getByText(
      formatNumberToCurrency(
        productCurrentTestInfo.price * productCurrentTestInfo.quantity,
      ),
    );
    expect(price).toBeOnTheScreen();
  });
});
