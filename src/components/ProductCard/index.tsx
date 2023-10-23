import React from 'react';
import * as S from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import {formatNumberToCurrency} from '../../utils/formatNumberToCurrency';
import {IProduct} from '../../interfaces/IProduct';
import {useFavorites} from '../../contexts/FavoritesProvider';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ProductsStackParamList} from '../../routes/ProductsRoutes';
import {Rating} from '../Rating';
import {useTheme} from 'styled-components/native';
interface ProductCardProps {
  product: IProduct;
}

export const ProductCard = ({product}: ProductCardProps) => {
  const theme = useTheme();
  const navigation =
    useNavigation<NativeStackNavigationProp<ProductsStackParamList>>();
  const {ids, favoriteProduct, unFavoriteProduct} = useFavorites();

  const isFavorite = ids.includes(product.id);
  const favoriteIconName = isFavorite ? 'heart' : 'hearto';
  const iconColor = isFavorite ? theme.primary : theme.border;

  const handleOnPressFavorite = isFavorite
    ? () => unFavoriteProduct(product.id)
    : () => favoriteProduct(product.id);

  const handleOnPressCard = () => {
    navigation.navigate('ProductDetail', {id: product.id});
  };

  return (
    <S.ProductCardContainer testID="product-card" onPress={handleOnPressCard}>
      <S.FavoriteButton
        testID="favorite-button"
        onPress={handleOnPressFavorite}>
        <Icon
          testID="favorite-icon"
          name={favoriteIconName}
          size={24}
          color={iconColor}
        />
      </S.FavoriteButton>
      <S.Image
        testID="product-image"
        source={{
          uri: product.image,
        }}
      />
      <S.InfoContainer>
        <Rating count={product.rating.count} rate={product.rating.rate} />
        <S.Title numberOfLines={2} ellipsizeMode="tail">
          {product.title}
        </S.Title>
        <S.Price>{formatNumberToCurrency(product.price)}</S.Price>
      </S.InfoContainer>
    </S.ProductCardContainer>
  );
};
