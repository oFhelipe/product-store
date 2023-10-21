import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ProductsRoutes} from './ProductsRoutes';
import {FavoritesRoutes} from './FavoritesRoutes';
import {CartRoutes} from './CartRoutes';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useTheme} from 'styled-components/native';

export type BottomTabParamList = {
  ProductsTab: undefined;
  FavoritesTab: undefined;
  CartTab: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

export function BottomTabRoutes() {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.primary,
      }}>
      <Tab.Screen
        options={{
          title: 'Produtos',
          tabBarIcon: ({color, size}) => (
            <AntDesign name="CodeSandbox" color={color} size={size} />
          ),
        }}
        name="ProductsTab"
        component={ProductsRoutes}
      />
      <Tab.Screen
        options={{
          title: 'Favoritos',
          tabBarIcon: ({color, size}) => (
            <AntDesign name="heart" color={color} size={size} />
          ),
        }}
        name="FavoritesTab"
        component={FavoritesRoutes}
      />
      <Tab.Screen
        options={{
          title: 'Carrinho',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="cart" color={color} size={size} />
          ),
        }}
        name="CartTab"
        component={CartRoutes}
      />
    </Tab.Navigator>
  );
}
