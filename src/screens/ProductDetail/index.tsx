import React, {useCallback, useEffect, useState} from 'react';
import * as S from './styles';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {ProductsStackParamList} from '../../routes/ProductsRoutes';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ProductService from '../../services/ProductService';
import {IProduct} from '../../interfaces/IProduct';
import {Rating} from '../../components/Rating';
import {formatNumberToCurrency} from '../../utils/formatNumberToCurrency';
import {Button} from '../../components/Button';
import {useCart} from '../../contexts/CartProvider';
import {useTheme} from 'styled-components/native';

export function ProductDetail() {
  const navigation = useNavigation();

  const route = useRoute<RouteProp<ProductsStackParamList, 'ProductDetail'>>();
  const {id} = route.params;

  const {cartProducts, incrementProductInCart, decrementProductInCart} =
    useCart();
  const theme = useTheme();

  const [product, setProduct] = useState<IProduct | null>(null);

  const productCartQuantity =
    cartProducts.find(cartProduct => cartProduct.id === product?.id)
      ?.quantity ?? 0;

  const goBack = () => {
    navigation.goBack();
  };

  const addToCart = useCallback(() => {
    incrementProductInCart(product!);
  }, [product, incrementProductInCart]);

  const removeFromCart = useCallback(() => {
    decrementProductInCart(product!.id);
  }, [product, decrementProductInCart]);

  const onFinish = useCallback(() => {
    if (productCartQuantity > 0) {
      addToCart();
    }
  }, [addToCart, productCartQuantity]);

  useEffect(() => {
    if (id) {
      const init = async () => {
        const response = await ProductService.show(id);
        setProduct(response);
      };
      init();
    }
  }, [id]);

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
      {product && (
        <>
          <S.ProductInfoScroll>
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
            {productCartQuantity > 0 ? (
              <S.AddSubtractContainer>
                <Button
                  onPress={removeFromCart}
                  icon={
                    productCartQuantity === 1 ? (
                      <FontAwesome
                        name="trash"
                        color={theme['primary-dark']}
                        size={24}
                      />
                    ) : (
                      <AntDesign
                        name="minus"
                        color={theme['primary-dark']}
                        size={24}
                      />
                    )
                  }
                  variant="secondary"
                  size="large"
                />
                <S.CountContainer>
                  <Ionicons
                    name="cart"
                    color={theme['primary-dark']}
                    size={28}
                  />
                  <S.CountLabel>{productCartQuantity}</S.CountLabel>
                </S.CountContainer>
                <Button
                  onPress={addToCart}
                  icon={
                    <AntDesign
                      name="plus"
                      color={theme['primary-dark']}
                      size={24}
                    />
                  }
                  variant="secondary"
                  size="large"
                />
              </S.AddSubtractContainer>
            ) : (
              <Button
                onPress={addToCart}
                label="Adicionar no carrinho"
                variant="secondary"
              />
            )}
            <Button
              onPress={onFinish}
              label={productCartQuantity > 0 ? 'Finalizar compra' : 'Comprar'}
              size="large"
            />
          </S.ActionsContainer>
        </>
      )}
    </S.ProductDetailContainer>
  );
}
