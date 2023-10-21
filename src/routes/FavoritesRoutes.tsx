import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Favorites} from '../screens/Favorites';
import {useTheme} from 'styled-components/native';

export type FavoritesStackParamList = {
  Favorites: undefined;
};

const Stack = createNativeStackNavigator<FavoritesStackParamList>();

export function FavoritesRoutes() {
  const theme = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: theme.background,
        },
      }}>
      <Stack.Screen name="Favorites" component={Favorites} />
    </Stack.Navigator>
  );
}
