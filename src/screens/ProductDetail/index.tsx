import React, {useEffect, useState} from 'react';
import * as S from './styles';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {ProductsStackParamList} from '../../routes/ProductsRoutes';
import Icon from 'react-native-vector-icons/AntDesign';
import ProductService from '../../services/ProductService';
import {IProduct} from '../../interfaces/IProduct';
import {Rating} from '../../components/Rating';

export function ProductDetail() {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<ProductsStackParamList, 'ProductDetail'>>();
  const {id} = route.params;

  const [product, setProduct] = useState<IProduct | null>(null);

  const goBack = () => {
    navigation.goBack();
  };

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
      <S.BackButton onPress={goBack}>
        <Icon name="arrowleft" size={24} color="#313131" />
      </S.BackButton>
      {product && (
        <>
          <S.CategoryRateContainer>
            <S.Category>{product.category}</S.Category>
            <Rating count={product.rating.count} rate={product.rating.rate} />
          </S.CategoryRateContainer>
        </>
      )}
    </S.ProductDetailContainer>
  );
}
