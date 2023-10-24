import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Cart} from '../screens/Cart';
import Thanks from '../screens/Thanks';

export type CartStackParamList = {
  Cart: undefined;
  Thanks: undefined;
};

const Stack = createNativeStackNavigator<CartStackParamList>();

export function CartRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Thanks" component={Thanks} />
    </Stack.Navigator>
  );
}
