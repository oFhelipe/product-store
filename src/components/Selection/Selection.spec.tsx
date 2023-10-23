import 'react-native';
import React from 'react';

import {screen} from '@testing-library/react-native';
import {Selection} from '.';
import {renderWithProviders} from '../../../tests/utils/renderWithProviders';

describe('Component <Selection />', () => {
  it('should render with info', () => {
    renderWithProviders(<Selection isSelected={true} label="label" />);

    const label = screen.getByText('label');
    expect(label).toBeOnTheScreen();
  });
});
