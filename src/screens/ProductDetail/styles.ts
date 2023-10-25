import styled from 'styled-components/native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');

export const LoadingContainer = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  align-items: flex-start;
`;

export const ProductDetailContainer = styled.View`
  flex: 1;
  padding: 16px;
  background-color: ${props => props.theme.background};
`;

export const CategoryRateContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Category = styled.Text`
  color: ${props => props.theme['text-light']};
  font-size: 14px;
`;

export const Title = styled.Text`
  color: ${props => props.theme.text};
  font-size: 25px;
  font-weight: bold;
`;

export const Image = styled.Image`
  width: ${width * 0.8}px;
  height: ${width * 0.8}px;
  object-fit: contain;
`;

export const Value = styled.Text`
  color: ${props => props.theme.text};
  font-size: 40px;
  font-weight: bold;
`;

export const Separator = styled.View`
  width: ${width - 32}px;
  height: 1px;
  background-color: ${props => props.theme.border};
`;

export const Description = styled.Text`
  color: ${props => props.theme.text};
  font-size: 14px;
`;

export const ProductInfoContainer = styled.View`
  flex: 1;
`;

export const ImageFavoriteContainer = styled.View`
  width: 100%;
  position: relative;
  align-self: center;
  align-items: center;
  justify-content: center;
`;

export const FavoriteButton = styled.TouchableOpacity`
  position: absolute;
  right: 16px;
  top: 16px;
  height: 32px;
  width: 32px;
  z-index: 2;
  align-items: center;
  justify-content: center;
`;

export const ProductInfoScroll = styled.ScrollView`
  flex: 1;
`;

export const ActionsContainer = styled.View`
  gap: 8px;
  padding-top: 8px;
`;

export const LoadingCategory = styled(ShimmerPlaceHolder)`
  width: 110px;
  margin-bottom: 8px;
`;

export const LoadingRating = styled(ShimmerPlaceHolder)`
  width: 80px;
  margin-bottom: 8px;
`;

export const LoadingTitle = styled(ShimmerPlaceHolder)`
  width: 100%;
  height: 80px;
  margin-bottom: 8px;
`;

export const LoadingImage = styled(ShimmerPlaceHolder)`
  width: ${width * 0.8}px;
  height: ${width * 0.8}px;
  margin-bottom: 8px;
  align-self: center;
`;

export const LoadingPrice = styled(ShimmerPlaceHolder)`
  width: 150px;
  height: 45px;
  margin-bottom: 8px;
`;

export const LoadingDescription = styled(ShimmerPlaceHolder)`
  width: ${width * 0.9}px;
  height: 500px;
  margin-bottom: 8px;
  align-self: center;
`;
