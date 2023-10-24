import React, {useCallback, useEffect, useState} from 'react';
import * as S from './styles';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {ProductsStackParamList} from '../../routes/ProductsRoutes';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ProductService from '../../services/ProductService';
import {IProduct} from '../../interfaces/IProduct';
import {Rating} from '../../components/Rating';
import {formatNumberToCurrency} from '../../utils/formatNumberToCurrency';
import {Button} from '../../components/Button';
import {useCart} from '../../contexts/CartProvider';
import {useTheme} from 'styled-components/native';
import {IncrementDecrement} from '../../components/IncrementDecrement';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RefreshControl} from 'react-native';
import {Loading} from './Loading';
import {BottomTabParamList} from '../../routes/BottomTabRoutes';

type ScreenProps = {
  route: RouteProp<ProductsStackParamList, 'ProductDetail'>;
};

export function ProductDetail({route}: ScreenProps) {
  const navigation =
    useNavigation<NativeStackNavigationProp<BottomTabParamList>>();

  const {id} = route.params;

  const {cartProducts, incrementProduct, decrementProduct, addProduct} =
    useCart();
  const theme = useTheme();

  const [product, setProduct] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState(true);

  const cartProductQuantity =
    cartProducts.find(cartProduct => cartProduct.id === product?.id)
      ?.quantity ?? 0;

  const goBack = () => {
    navigation.goBack();
  };

  const handleAddToCart = useCallback(() => {
    addProduct(product!);
  }, [product, addProduct]);

  const handleIncrement = useCallback(() => {
    incrementProduct(product!.id);
  }, [product, incrementProduct]);

  const handleDecrement = useCallback(() => {
    decrementProduct(product!.id);
  }, [product, decrementProduct]);

  const onFinish = useCallback(() => {
    if (cartProductQuantity === 0) {
      handleAddToCart();
    }
    navigation.navigate('CartTab');
  }, [handleAddToCart, cartProductQuantity, navigation]);

  const getProduct = useCallback(async () => {
    try {
      setLoading(true);
      const response = await ProductService.show(id);
      setProduct(response);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      getProduct();
    }
  }, [id, getProduct]);

  return (
    <S.ProductDetailContainer>
      <S.Header>
        <Button
          onPress={goBack}
          variant="tertiary"
          icon={
            <AntDesign name="arrowleft" size={24} color={theme['text-light']} />
          }
        />
      </S.Header>
      {product && !loading ? (
        <>
          <S.ProductInfoScroll
            refreshControl={
              <RefreshControl refreshing={false} onRefresh={getProduct} />
            }>
            <S.ProductInfoContainer>
              <S.CategoryRateContainer>
                <S.Category>{product.category}</S.Category>
                <Rating
                  count={product.rating.count}
                  rate={product.rating.rate}
                />
              </S.CategoryRateContainer>
              <S.Title>{product.title}</S.Title>
              <S.Image
                testID="product-image"
                source={{
                  uri: product.image,
                }}
              />
              <S.Value>{formatNumberToCurrency(product.price)}</S.Value>
              <S.Separator />
              <S.Description>{product.description}</S.Description>
            </S.ProductInfoContainer>
          </S.ProductInfoScroll>
          <S.ActionsContainer>
            {cartProductQuantity > 0 ? (
              <IncrementDecrement
                onPressDecrement={handleDecrement}
                onPressIncrement={handleIncrement}
                quantity={cartProductQuantity}
              />
            ) : (
              <Button
                onPress={handleAddToCart}
                label="Adicionar no carrinho"
                variant="secondary"
              />
            )}
            <Button
              testID="buy-button"
              onPress={onFinish}
              label={cartProductQuantity > 0 ? 'Finalizar compra' : 'Comprar'}
              size="large"
            />
          </S.ActionsContainer>
        </>
      ) : (
        <Loading />
      )}
    </S.ProductDetailContainer>
  );
}
