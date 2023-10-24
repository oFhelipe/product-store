import React from 'react';
import * as S from './styled';
import {Button} from '../../components/Button';
import deliveryIllustration from '../../assets/images/delivery-illustration.png';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ProductsStackParamList} from '../../routes/ProductsRoutes';

const Thanks = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ProductsStackParamList>>();

  const handlePressBackToStart = () => {
    navigation.popToTop();
    navigation.navigate('Products');
  };

  return (
    <S.ThanksContainer>
      <S.Title>Compra realizada com sucesso</S.Title>
      <S.Subtitle>Só pra te contar, seu pedido já tá saindo!</S.Subtitle>
      <S.DeliveryIllustration source={deliveryIllustration} />
      <Button
        label="Voltar ao inicio"
        size="large"
        onPress={handlePressBackToStart}
      />
    </S.ThanksContainer>
  );
};

export default Thanks;
