import 'react-native';
import React from 'react';
import {App} from './App';

import {screen, render} from '@testing-library/react-native';

describe('Component <App />', () => {
  it('should render', () => {
    render(<App />);
    const title = screen.getByText('Descubra o seu produto favorito');
    expect(title).toBeTruthy();
  });
});
