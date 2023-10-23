import React, {useCallback, useEffect, useState} from 'react';
import * as S from './styles';
import {ProductCard} from '../../components/ProductCard';
import {IProduct} from '../../interfaces/IProduct';
import {FlatList, RefreshControl, ScrollView} from 'react-native';
import ProductService from '../../services/ProductService';
import {Loading} from './Loading';
import {Selection} from '../../components/Selection';

export const Products = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [loadingProducts, setLoadingProducts] = useState(true);

  const getProducts = useCallback(async () => {
    try {
      setLoadingProducts(true);
      const response = await ProductService.index(selectedCategory);
      setProducts(response);
    } finally {
      setLoadingProducts(false);
    }
  }, [selectedCategory]);

  const getCategories = useCallback(async () => {
    const response = await ProductService.indexCategories();
    setCategories(response);
  }, []);

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(currentCategory => {
      return currentCategory === category ? '' : category;
    });
  };

  useEffect(() => {
    getCategories();
  }, [getCategories]);

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
        {categories.length > 0 && (
          <FlatList
            horizontal
            data={categories}
            keyExtractor={item => item}
            contentContainerStyle={{
              marginBottom: 8,
            }}
            renderItem={({item: category}) => {
              return (
                <Selection
                  isSelected={selectedCategory === category}
                  label={category}
                  onPress={() => handleSelectCategory(category)}
                />
              );
            }}
          />
        )}
        {loadingProducts ? (
          <Loading />
        ) : (
          <>
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
          </>
        )}
      </S.ProductsContainer>
    </ScrollView>
  );
};
