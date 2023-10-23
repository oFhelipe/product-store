import React, {useCallback, useEffect, useState} from 'react';
import * as S from './styles';
import {ProductCard} from '../../components/ProductCard';
import {IProduct} from '../../interfaces/IProduct';
import {FlatList, RefreshControl, ScrollView} from 'react-native';
import ProductService from '../../services/ProductService';
import {Loading} from './Loading';

export const Products = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);

  const getProducts = useCallback(async () => {
    try {
      setLoading(true);
      const response = await ProductService.index();
      setProducts(response);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={false} onRefresh={getProducts} />
      }>
      <S.ProductsContainer>
        <S.Title>Encontre o que você precisa</S.Title>
        {loading ? (
          <Loading />
        ) : (
          <FlatList
            scrollEnabled={false}
            numColumns={2}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            data={products}
            keyExtractor={({id}) => id.toString()}
            renderItem={({item: product}) => {
              return <ProductCard product={product} />;
            }}
          />
        )}
      </S.ProductsContainer>
    </ScrollView>
  );
};
