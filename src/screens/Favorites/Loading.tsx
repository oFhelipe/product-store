import React from 'react';
import * as S from './styles';

import LinearGradient from 'react-native-linear-gradient';

export const Loading = () => {
  return (
    <S.LoadingContainer>
      <S.LoadingCard LinearGradient={LinearGradient} />
      <S.LoadingCard LinearGradient={LinearGradient} />
      <S.LoadingCard LinearGradient={LinearGradient} />
      <S.LoadingCard LinearGradient={LinearGradient} />
      <S.LoadingCard LinearGradient={LinearGradient} />
      <S.LoadingCard LinearGradient={LinearGradient} />
    </S.LoadingContainer>
  );
};
