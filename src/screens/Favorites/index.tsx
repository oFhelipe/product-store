import React, {useEffect, useState} from 'react';
import * as S from './styles';
import {ProductCard} from '../../components/ProductCard';
import {IProduct} from '../../interfaces/IProduct';
import {FlatList, ScrollView} from 'react-native';
import ProductService from '../../services/ProductService';
import {useFavorites} from '../../contexts/FavoritesProvider';

export const Favorites = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const {ids} = useFavorites();

  useEffect(() => {
    const init = async () => {
      const response = await ProductService.index();
      const favorites = response.filter(product => ids.includes(product.id));
      setProducts(favorites);
    };
    init();
  }, [ids]);

  return (
    <ScrollView>
      <S.ProductsContainer>
        <S.Title>Descubra o seu produto favorito</S.Title>
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
      </S.ProductsContainer>
    </ScrollView>
  );
};
