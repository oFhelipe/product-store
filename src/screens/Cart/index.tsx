import React from 'react';
import * as S from './styles';
import {useCart} from '../../contexts/CartProvider';
import {CartProductCard} from '../../components/CartProductCard';
import {Button} from '../../components/Button';
import {formatNumberToCurrency} from '../../utils/formatNumberToCurrency';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {CartStackParamList} from '../../routes/CartRoutes';

export function Cart() {
  const {cartProducts, clear} = useCart();
  const navigation =
    useNavigation<NativeStackNavigationProp<CartStackParamList>>();
  const total = cartProducts.reduce(
    (totalAtual, produto) => totalAtual + produto.price * produto.quantity,
    0,
  );
  const isCartEmpty = cartProducts.length === 0;

  const handlePressFinish = async () => {
    await clear();
    navigation.navigate('Thanks');
  };
  return (
    <S.CartContainer>
      <S.Title testID="title">Carrinho</S.Title>

      <S.ProductsList
        data={cartProducts}
        renderItem={({item: cartProduct}) => (
          <CartProductCard product={cartProduct} />
        )}
        keyExtractor={({id}) => id.toString()}
      />

      <S.Separator />
      <S.Total>Total: {formatNumberToCurrency(total)}</S.Total>
      <Button
        label="Finalizar compra"
        size="large"
        onPress={handlePressFinish}
        disabled={isCartEmpty}
      />
    </S.CartContainer>
  );
}
