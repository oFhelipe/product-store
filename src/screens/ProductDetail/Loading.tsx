import React from 'react';
import * as S from './styles';

import LinearGradient from 'react-native-linear-gradient';

export const Loading = () => {
  return (
    <S.LoadingContainer>
      <S.CategoryRateContainer>
        <S.LoadingCategory LinearGradient={LinearGradient} />
        <S.LoadingRating LinearGradient={LinearGradient} />
      </S.CategoryRateContainer>
      <S.LoadingTitle LinearGradient={LinearGradient} />
      <S.LoadingImage LinearGradient={LinearGradient} />
      <S.LoadingPrice LinearGradient={LinearGradient} />
      <S.LoadingDescription LinearGradient={LinearGradient} />
    </S.LoadingContainer>
  );
};
