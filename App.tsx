import React from 'react';
import {Routes} from './src/routes';
import {SafeAreaView} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {defaultTheme} from './src/styles/themes/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <SafeAreaView
        style={{
          flex: 1,
        }}>
        <Routes />
      </SafeAreaView>
    </ThemeProvider>
  );
}
