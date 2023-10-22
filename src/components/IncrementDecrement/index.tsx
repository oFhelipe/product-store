import React from 'react';
import {useTheme} from 'styled-components/native';
import {Button} from '../Button';
import * as S from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export type IncrementDecrementSize = 'large' | 'small';

interface IncrementDecrementProps {
  onPressIncrement: () => void;
  onPressDecrement: () => void;
  quantity: number;
  size?: IncrementDecrementSize;
}

export function IncrementDecrement({
  onPressDecrement,
  onPressIncrement,
  quantity,
  size = 'large',
}: IncrementDecrementProps) {
  const theme = useTheme();
  const cartIconSize = size === 'large' ? 28 : 20;
  const incrementDecrementIconSize = size === 'large' ? 24 : 16;

  return (
    <S.IncrementDecrementContainer>
      <Button
        testID="decrement-button"
        onPress={onPressDecrement}
        icon={
          quantity === 1 ? (
            <FontAwesome
              name="trash"
              color={theme['primary-dark']}
              size={incrementDecrementIconSize}
            />
          ) : (
            <AntDesign
              name="minus"
              color={theme['primary-dark']}
              size={incrementDecrementIconSize}
            />
          )
        }
        variant="secondary"
        size={size}
      />
      <S.CountContainer>
        <Ionicons
          name="cart"
          color={theme['primary-dark']}
          size={cartIconSize}
        />
        <S.CountLabel size={size}>{quantity}</S.CountLabel>
      </S.CountContainer>
      <Button
        testID="increment-button"
        onPress={onPressIncrement}
        icon={
          <AntDesign
            name="plus"
            color={theme['primary-dark']}
            size={incrementDecrementIconSize}
          />
        }
        variant="secondary"
        size={size}
      />
    </S.IncrementDecrementContainer>
  );
}
