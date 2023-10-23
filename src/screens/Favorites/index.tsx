import React, {useCallback, useEffect, useState} from 'react';
import * as S from './styles';
import {ProductCard} from '../../components/ProductCard';
import {IProduct} from '../../interfaces/IProduct';
import {FlatList, RefreshControl, ScrollView} from 'react-native';
import ProductService from '../../services/ProductService';
import {useFavorites} from '../../contexts/FavoritesProvider';
import {Loading} from './Loading';

export const Favorites = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);

  const {ids} = useFavorites();

  const getProducts = useCallback(async () => {
    try {
      setLoading(true);
      const response = await ProductService.index();
      const favorites = response.filter(product => ids.includes(product.id));
      setProducts(favorites);
    } finally {
      setLoading(false);
    }
  }, [ids]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={false} onRefresh={getProducts} />
      }>
      <S.ProductsContainer>
        <S.Title>Os que você mais amou!</S.Title>
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
