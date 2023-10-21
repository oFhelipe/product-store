import React from 'react';
import {Routes} from './src/routes';
import styled, {ThemeProvider} from 'styled-components/native';
import {defaultTheme} from './src/styles/themes/default';
import {FavoritesProvider} from './src/contexts/FavoritesProvider';
import {CartProvider} from './src/contexts/CartProvider';

const SafeAreaViewContainer = styled.SafeAreaView`
  flex: 1;
`;

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <FavoritesProvider>
        <CartProvider>
          <SafeAreaViewContainer>
            <Routes />
          </SafeAreaViewContainer>
        </CartProvider>
      </FavoritesProvider>
    </ThemeProvider>
  );
}
