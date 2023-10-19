import React, {useEffect, useState} from 'react';
import * as S from './styles';
import {ProductCard} from '../../components/ProductCard';
import {IProduct} from '../../interfaces/IProduct';
import {FlatList} from 'react-native';
import ProductService from '../../services/ProductService';

export const Products = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const init = async () => {
      const response = await ProductService.findAll();
      setProducts(response);
    };
    init();
  }, []);

  return (
    <S.ProductsContainer>
      <FlatList
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-around'}}
        data={products}
        keyExtractor={({id}) => id.toString()}
        renderItem={({item: product}) => {
          return <ProductCard product={product} />;
        }}
      />
    </S.ProductsContainer>
  );
};
