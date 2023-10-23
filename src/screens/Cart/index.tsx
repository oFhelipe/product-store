import React from 'react';
import * as S from './styles';
import {useCart} from '../../contexts/CartProvider';
import {CartProductCard} from '../../components/CartProductCard';
import {Button} from '../../components/Button';
import {formatNumberToCurrency} from '../../utils/formatNumberToCurrency';

export function Cart() {
  const {cartProducts} = useCart();
  const total = cartProducts.reduce(
    (totalAtual, produto) => totalAtual + produto.price * produto.quantity,
    0,
  );
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
      <Button label="Finalizar compra" size="large" />
    </S.CartContainer>
  );
}
