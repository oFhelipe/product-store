import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ProductsRoutes} from './ProductsRoutes';
import {FavoritesRoutes} from './FavoritesRoutes';

export type BottomTabParamList = {
  ProductsTab: undefined;
  FavoritesTab: undefined;
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
          title: 'Favorites',
        }}
        name="FavoritesTab"
        component={FavoritesRoutes}
      />
    </Tab.Navigator>
  );
}
