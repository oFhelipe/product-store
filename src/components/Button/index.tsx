import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import * as S from './styles';

export type ButtonVariants = 'primary' | 'secondary' | 'tertiary';
export type ButtonSizes = 'small' | 'medium' | 'large';

interface ButtonProps extends TouchableOpacityProps {
  label?: string;
  icon?: JSX.Element;
  variant?: ButtonVariants;
  size?: ButtonSizes;
}

export function Button({
  variant = 'primary',
  icon: Icon,
  label,
  size = 'medium',
  ...buttonProps
}: ButtonProps) {
  return (
    <S.ButtonContainer
      testID="button"
      {...buttonProps}
      variant={variant}
      size={size}>
      {Icon}
      {label && (
        <S.Label variant={variant} size={size}>
          {label}
        </S.Label>
      )}
    </S.ButtonContainer>
  );
}
