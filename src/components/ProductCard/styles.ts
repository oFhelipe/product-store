import styled from 'styled-components/native';

import {Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');

export const ProductCardContainer = styled.TouchableOpacity`
  width: ${width / 2 - 20}px;
  height: 300px;
  border: solid 1px ${props => props.theme.border};
  border-radius: 10px;
  padding: 24px 16px 16px 16px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const Image = styled.Image`
  width: 80%;
  height: 150px;
  object-fit: contain;
`;

export const FavoriteButton = styled.TouchableOpacity`
  position: absolute;
  right: 8px;
  top: 4px;
  height: 32px;
  width: 32px;
  z-index: 2;
  align-items: center;
  justify-content: center;
`;

export const InfoContainer = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  font-weight: 700;
  color: ${props => props.theme.text};
  font-size: 14px;
  margin-bottom: 2px;
`;

export const Price = styled.Text`
  font-weight: 700;
  color: ${props => props.theme.text};
  font-size: 20px;
`;
