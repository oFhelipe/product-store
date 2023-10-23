import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import * as S from './styles';

interface SelectionProps extends TouchableOpacityProps {
  label: string;
  isSelected: boolean;
}

export function Selection({label, isSelected, ...props}: SelectionProps) {
  return (
    <S.SelectionContainer
      testID={`selection_${label}`}
      {...props}
      isSelected={isSelected}>
      <S.Label isSelected={isSelected}>{label}</S.Label>
    </S.SelectionContainer>
  );
}
