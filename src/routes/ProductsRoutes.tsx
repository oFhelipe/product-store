import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Products} from '../screens/ProductsList';
import {ProductDetail} from '../screens/ProductDetail';

export type ProductsStackParamList = {
  Products: undefined;
  ProductDetail: {
    id: number;
  };
};

const Stack = createNativeStackNavigator<ProductsStackParamList>();

export function ProductsRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
}
