import {ReactNode} from 'react';
import {ThemeProvider} from 'styled-components/native';
import {FavoritesProvider} from '../../src/contexts/FavoritesProvider';
import {CartProvider} from '../../src/contexts/CartProvider';
import {defaultTheme} from '../../src/styles/themes/default';
import {RenderOptions, render} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';

export function renderWithProviders(
  component: ReactNode,
  renderOptions?: RenderOptions,
) {
  return render(
    <ThemeProvider theme={defaultTheme}>
      <FavoritesProvider>
        <CartProvider>
          <NavigationContainer>{component}</NavigationContainer>
        </CartProvider>
      </FavoritesProvider>
    </ThemeProvider>,
    renderOptions,
  );
}
