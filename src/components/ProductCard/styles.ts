import styled from 'styled-components/native';

import {Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');

export const ProductCardContainer = styled.TouchableOpacity`
  width: ${width / 2 - 32}px;
  height: 300px;
  border: solid 1px ${props => props.theme.border};
  border-radius: 10px;
  padding: 24px 8px 16px 8px;
  align-items: center;
  justify-content: space-between;
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

export const InfoContainer = styled.View``;

export const Title = styled.Text`
  font-weight: 700;
  color: ${props => props.theme.text};
  font-size: 14px;
  margin-bottom: 2px;
`;

export const BottomContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Price = styled.Text`
  font-weight: 700;
  color: ${props => props.theme.text};
  font-size: 20px;
`;

export const AddButton = styled.TouchableOpacity`
  height: 32px;
  width: 32px;
  border-radius: 10px;
  background-color: ${props => props.theme.primary};
  align-items: center;
  justify-content: center;
`;

export const RateContainer = styled.View`
  align-self: flex-end;
  flex-direction: row;
  align-items: center;
`;

export const RateValue = styled.Text`
  color: ${props => props.theme.text};
  font-size: 14px;
`;

export const RateQuantity = styled.Text`
  color: ${props => props.theme.text};
  font-size: 11px;
  font-weight: 300;
`;
