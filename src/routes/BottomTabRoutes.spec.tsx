import React from 'react';
import {act, fireEvent, screen} from '@testing-library/react-native';
import {renderWithProviders} from '../../tests/utils/renderWithProviders';
import {BottomTabRoutes} from './BottomTabRoutes';
import {serviceGetMock} from '../../tests/mock/services';
import {api} from '../services/api';

beforeEach(() => {
  jest.spyOn(api, 'get').mockImplementation(serviceGetMock);
});

afterEach(() => {
  jest.clearAllMocks();
});
describe(`Route: BottomTabRoutes`, () => {
  it('should render bottom bar', () => {
    renderWithProviders(<BottomTabRoutes />);
    const produtosTab = screen.getByTestId('produtos-tab');
    expect(produtosTab).toBeOnTheScreen();

    const favoritosTab = screen.getByTestId('favoritos-tab');
    expect(favoritosTab).toBeOnTheScreen();

    const carrinhoTab = screen.getByTestId('carrinho-tab');
    expect(carrinhoTab).toBeOnTheScreen();
  });

  it('should start on the products screen', async () => {
    renderWithProviders(<BottomTabRoutes />);
    const productsScreenTitle = await screen.findByText(
      /Encontre o que você precisa/i,
    );
    await act(async () => expect(productsScreenTitle).toBeOnTheScreen());
  });

  it('should navigate to favorite screen', async () => {
    renderWithProviders(<BottomTabRoutes />);

    const favoritosTab = screen.getByTestId('favoritos-tab');

    act(() => {
      fireEvent.press(favoritosTab);
    });

    const favoritesScreenTitle = await screen.findByText(
      /Os que você mais amou!/i,
    );
    await act(async () => expect(favoritesScreenTitle).toBeOnTheScreen());

    const productsScreenTitle = screen.queryByText(
      /Encontre o que você precisa/i,
    );
    await act(async () => expect(productsScreenTitle).not.toBeOnTheScreen());
  });
});
