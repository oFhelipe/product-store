import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ProductsRoutes} from './ProductsRoutes';

const Tab = createBottomTabNavigator();

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
    </Tab.Navigator>
  );
}
