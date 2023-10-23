import 'react-native';
import React from 'react';

import {screen} from '@testing-library/react-native';

import {renderWithProviders} from '../../../tests/utils/renderWithProviders';
import {CartProductCard} from '.';
import {IProductInCart} from '../../interfaces/IProductInCart';
import {formatNumberToCurrency} from '../../utils/formatNumberToCurrency';
import {cartProductInfo} from '../../../tests/mock/product';

describe('Component <CartProductCard />', () => {
  it('should render with info', () => {
    renderWithProviders(<CartProductCard product={cartProductInfo} />);

    const title = screen.getByText(cartProductInfo.title);
    expect(title).toBeOnTheScreen();

    const quantity = screen.getByText(cartProductInfo.quantity.toString());
    expect(quantity).toBeOnTheScreen();

    const price = screen.getByText(
      formatNumberToCurrency(cartProductInfo.price),
    );
    expect(price).toBeOnTheScreen();
  });

  it('should render image with correct uri', () => {
    renderWithProviders(<CartProductCard product={cartProductInfo} />);

    const image = screen.getByTestId('product-image');

    expect(image.props.source.uri).toBe(cartProductInfo.image);
  });

  it('should render calculated total value', () => {
    const productCurrentTestInfo: IProductInCart = {
      ...cartProductInfo,
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
