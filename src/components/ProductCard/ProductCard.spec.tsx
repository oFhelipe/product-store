import 'react-native';
import React from 'react';

import {screen, act, fireEvent} from '@testing-library/react-native';

import {renderWithProviders} from '../../../tests/utils/renderWithProviders';
import {ProductCard} from '.';
import {formatNumberToCurrency} from '../../utils/formatNumberToCurrency';
import {defaultTheme} from '../../styles/themes/default';
import {productInfo} from '../../../tests/mock/product';

describe('Component <ProductCard />', () => {
  it('should render with info', () => {
    renderWithProviders(<ProductCard product={productInfo} />);

    const title = screen.getByText(productInfo.title);
    expect(title).toBeOnTheScreen();

    const price = screen.getByText(formatNumberToCurrency(productInfo.price));
    expect(price).toBeOnTheScreen();

    const rate = screen.getByText(productInfo.rating.rate.toString());
    expect(rate).toBeOnTheScreen();

    const count = screen.getByText(`(${productInfo.rating.count})`);
    expect(count).toBeOnTheScreen();
  });

  it('should render image with correct uri', () => {
    renderWithProviders(<ProductCard product={productInfo} />);

    const image = screen.getByTestId('product-image');

    expect(image.props.source.uri).toBe(productInfo.image);
  });

  it('should render with not liked icon', () => {
    renderWithProviders(<ProductCard product={productInfo} />);

    const icon = screen.getByTestId('favorite-icon');

    expect(icon).toBeOnTheScreen();
    expect(icon.props.style[0].color).toBe(defaultTheme.border);
  });

  it('should like product when click on favorite button', async () => {
    renderWithProviders(<ProductCard product={productInfo} />);

    const button = screen.getByTestId('favorite-button');
    expect(button).toBeOnTheScreen();

    act(() => {
      fireEvent.press(button);
    });

    const icon = screen.getByTestId('favorite-icon');
    expect(icon).toBeOnTheScreen();
    expect(icon.props.style[0].color).toBe(defaultTheme.primary);
  });

  it('should unlike product when click on favorite button twice', async () => {
    renderWithProviders(<ProductCard product={productInfo} />);

    const button = screen.getByTestId('favorite-button');
    expect(button).toBeOnTheScreen();

    act(() => {
      fireEvent.press(button);
    });

    act(() => {
      fireEvent.press(button);
    });

    const icon = screen.getByTestId('favorite-icon');
    expect(icon).toBeOnTheScreen();
    expect(icon.props.style[0].color).toBe(defaultTheme.border);
  });
});
