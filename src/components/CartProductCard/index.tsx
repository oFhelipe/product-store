import React, {useCallback} from 'react';
import * as S from './styles';
import {IProductInCart} from '../../interfaces/IProductInCart';
import {formatNumberToCurrency} from '../../utils/formatNumberToCurrency';
import {IncrementDecrement} from '../IncrementDecrement';
import {useCart} from '../../contexts/CartProvider';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ProductsStackParamList} from '../../routes/ProductsRoutes';

interface CartProductCardProps {
  product: IProductInCart;
}

export function CartProductCard({product}: CartProductCardProps) {
  const navigation =
    useNavigation<NativeStackNavigationProp<ProductsStackParamList>>();
  const {decrementProduct, incrementProduct} = useCart();

  const handleOnPressCard = useCallback(() => {
    navigation.navigate('ProductDetail', {id: product.id});
  }, [navigation, product]);

  const handleIncrement = useCallback(() => {
    incrementProduct(product.id);
  }, [product, incrementProduct]);

  const handleDecrementProduct = useCallback(() => {
    decrementProduct(product.id);
  }, [product, decrementProduct]);

  return (
    <S.CartProductCardContainer
      testID="product-card"
      onPress={handleOnPressCard}>
      <S.Image
        testID="product-image"
        source={{
          uri: product.image,
        }}
      />
      <S.InfoContainer>
        <S.Title numberOfLines={2}>{product.title}</S.Title>
        <S.BottomContainer>
          <S.Price>
            {formatNumberToCurrency(product.price * product.quantity)}
          </S.Price>
          <IncrementDecrement
            onPressDecrement={handleDecrementProduct}
            onPressIncrement={handleIncrement}
            quantity={product.quantity}
            size="small"
          />
        </S.BottomContainer>
      </S.InfoContainer>
    </S.CartProductCardContainer>
  );
}
