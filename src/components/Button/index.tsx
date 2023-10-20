import React, {ReactNode} from 'react';
import {TouchableOpacityProps} from 'react-native';
import * as S from './styles';

export type ButtonVariants = 'primary' | 'secondary' | 'tertiary';
export type ButtonSizes = 'small' | 'medium' | 'large';

interface ButtonProps extends TouchableOpacityProps {
  label?: string;
  icon?: ReactNode;
  variant?: ButtonVariants;
  size?: ButtonSizes;
}

export function Button({
  variant = 'primary',
  icon,
  label,
  size = 'medium',
  ...buttonProps
}: ButtonProps) {
  return (
    <S.ButtonContainer {...buttonProps} variant={variant} size={size}>
      {icon}
      {label && (
        <S.Label variant={variant} size={size}>
          {label}
        </S.Label>
      )}
    </S.ButtonContainer>
  );
}
