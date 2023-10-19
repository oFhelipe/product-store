import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Products} from '../screens/ProductsList';

export type FavoritesStackParamList = {
  Favorites: undefined;
};

const Stack = createNativeStackNavigator<FavoritesStackParamList>();

export function FavoritesRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Favorites" component={Products} />
    </Stack.Navigator>
  );
}
