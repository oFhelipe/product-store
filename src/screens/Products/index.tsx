import React from 'react';
import * as S from './styles';
import {ProductCard} from '../../components/ProductCard';

export const Products = () => {
  return (
    <S.ProductsContainer>
      <ProductCard />
    </S.ProductsContainer>
  );
};
