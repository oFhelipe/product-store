import React from 'react';
import * as S from './styles';
import Icon from 'react-native-vector-icons/AntDesign';

interface RatingProps {
  rate: number;
  count: number;
}

export function Rating({count, rate}: RatingProps) {
  return (
    <S.RatingContainer>
      <S.Value>{rate}</S.Value>
      <Icon name="star" size={14} color="#FFB627" />
      <S.Quantity>({count})</S.Quantity>
    </S.RatingContainer>
  );
}
