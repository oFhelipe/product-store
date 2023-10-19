import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {BottomTabRoutes} from './BottomTabRoutes';

export function Routes() {
  return (
    <NavigationContainer>
      <BottomTabRoutes />
    </NavigationContainer>
  );
}
