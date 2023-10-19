import React from 'react';
import * as S from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import {formatNumberToCurrency} from '../../utils/formatNumberToCurrency';
import {IProduct} from '../../interfaces/IProduct';
import {useFavorites} from '../../contexts/FavoritesProvider';

interface ProductCardProps {
  product?: IProduct;
}

const defaultProduct = {
  id: 2,
  title: 'Mens Casual Premium Slim Fit T-Shirts ',
  price: 22.3,
  description:
    'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
  category: "men's clothing",
  image:
    'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
  rating: {
    rate: 4.1,
    count: 259,
  },
};

export const ProductCard = ({product = defaultProduct}: ProductCardProps) => {
  const {ids, favoriteProduct, unFavoriteProduct} = useFavorites();

  const isFavorite = ids.includes(product.id);
  const favoriteIconName = isFavorite ? 'heart' : 'hearto';
  const iconColor = isFavorite ? '#8838E1' : '#CCCCCC';

  const onClickFavorite = isFavorite
    ? () => unFavoriteProduct(product.id)
    : () => favoriteProduct(product.id);

  return (
    <S.ProductCardContainer>
      <S.FavoriteButton onPress={onClickFavorite}>
        <Icon name={favoriteIconName} size={24} color={iconColor} />
      </S.FavoriteButton>
      <S.Image
        source={{
          uri: product.image,
        }}
      />
      <S.InfoContainer>
        <S.RateContainer>
          <S.RateValue>{product.rating.rate}</S.RateValue>
          <Icon name="star" size={14} color="#FFB627" />
          <S.RateQuantity>({product.rating.count})</S.RateQuantity>
        </S.RateContainer>
        <S.Title numberOfLines={2} ellipsizeMode="tail">
          {product.title}
        </S.Title>
        <S.BottomContainer>
          <S.Price>{formatNumberToCurrency(product.price)}</S.Price>
          <S.AddButton>
            <Icon name="plus" size={16} color="#FFFFFF" />
          </S.AddButton>
        </S.BottomContainer>
      </S.InfoContainer>
    </S.ProductCardContainer>
  );
};
