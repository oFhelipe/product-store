import 'react-native';
import React from 'react';
import {screen} from '@testing-library/react-native';
import {Cart} from '.';
import {renderWithProviders} from '../../../tests/utils/renderWithProviders';
import {serviceGetMock} from '../../../tests/mock/services';
import {api} from '../../services/api';
beforeAll(() => {
  jest.spyOn(api, 'get').mockImplementation(serviceGetMock);
});

afterAll(() => {
  jest.clearAllMocks();
});
describe('Component <Cart />', () => {
  it('should render', () => {
    renderWithProviders(<Cart />);

    const title = screen.getByText('Carrinho');
    expect(title).toBeOnTheScreen();
  });
});
