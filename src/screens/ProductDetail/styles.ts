import styled from 'styled-components/native';

import {Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');

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
  align-self: center;
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

export const ProductInfoScroll = styled.ScrollView`
  flex: 1;
`;

export const ActionsContainer = styled.View`
  gap: 8px;
  padding-top: 8px;
`;

export const AddSubtractContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const CountContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 8px;
`;

export const CountLabel = styled.Text`
  color: ${props => props.theme.text};
  font-size: 32px;
  font-weight: bold;
`;
