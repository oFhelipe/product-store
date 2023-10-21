import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Products} from '../screens/ProductsList';
import {ProductDetail} from '../screens/ProductDetail';
import {useTheme} from 'styled-components/native';

export type ProductsStackParamList = {
  Products: undefined;
  ProductDetail: {
    id: number;
  };
};

const Stack = createNativeStackNavigator<ProductsStackParamList>();

export function ProductsRoutes() {
  const theme = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: theme.background,
        },
      }}>
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
}
