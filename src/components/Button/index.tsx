import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import * as S from './styles';

interface ButtonProps extends TouchableOpacityProps {
  label: string;
  variant?: 'primary' | 'secondary';
}

export function Button({
  variant = 'primary',
  label,
  ...buttonProps
}: ButtonProps) {
  return (
    <S.ButtonContainer {...buttonProps} variant={variant}>
      <S.Label variant={variant}>{label}</S.Label>
    </S.ButtonContainer>
  );
}
