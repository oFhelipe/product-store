import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ProductsRoutes} from './ProductsRoutes';
import {FavoritesRoutes} from './FavoritesRoutes';
import {CartRoutes} from './CartRoutes';

export type BottomTabParamList = {
  ProductsTab: undefined;
  FavoritesTab: undefined;
  CartTab: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

export function BottomTabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        options={{
          title: 'Produtos',
        }}
        name="ProductsTab"
        component={ProductsRoutes}
      />
      <Tab.Screen
        options={{
          title: 'Favoritos',
        }}
        name="FavoritesTab"
        component={FavoritesRoutes}
      />
      <Tab.Screen
        options={{
          title: 'Carrinho',
        }}
        name="CartTab"
        component={CartRoutes}
      />
    </Tab.Navigator>
  );
}
