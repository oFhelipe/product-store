import 'react-native';
import React from 'react';
import {App} from './App';

import {screen, render} from '@testing-library/react-native';
import {api} from './src/services/api';
import {productInfoList} from './tests/mock/product';

afterEach(() => {
  jest.spyOn(api, 'get').mockResolvedValue({data: productInfoList});
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('Component <App />', () => {
  it('should render', () => {
    render(<App />);
    const title = screen.getByText('Encontre o que você precisa');
    expect(title).toBeOnTheScreen();
  });
});
