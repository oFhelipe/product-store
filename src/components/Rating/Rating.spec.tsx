import 'react-native';
import React from 'react';

import {screen} from '@testing-library/react-native';
import {Rating} from '.';
import {renderWithProviders} from '../../../tests/utils/renderWithProviders';

describe('Component <Rating />', () => {
  it('should render with info', () => {
    renderWithProviders(<Rating count={10} rate={4.5} />);

    const count = screen.getByText('(10)');
    expect(count).toBeOnTheScreen();

    const rate = screen.getByText('4.5');
    expect(rate).toBeOnTheScreen();
  });
});
