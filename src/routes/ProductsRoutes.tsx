import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Products} from '../screens/Products';

const Stack = createNativeStackNavigator();

export function ProductsRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Products" component={Products} />
    </Stack.Navigator>
  );
}
