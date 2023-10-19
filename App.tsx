import React from 'react';
import {Routes} from './src/routes';
import {SafeAreaView} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {defaultTheme} from './src/styles/themes/default';
import {FavoritesProvider} from './src/contexts/FavoritesProvider';
import {CartProvider} from './src/contexts/CartProvider';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <FavoritesProvider>
        <CartProvider>
          <SafeAreaView
            style={{
              flex: 1,
            }}>
            <Routes />
          </SafeAreaView>
        </CartProvider>
      </FavoritesProvider>
    </ThemeProvider>
  );
}
