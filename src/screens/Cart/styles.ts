import styled from 'styled-components/native';
import {IProductInCart} from '../../interfaces/IProductInCart';
import {Dimensions, FlatList, FlatListProps} from 'react-native';

const {width} = Dimensions.get('screen');

export const CartContainer = styled.View`
  flex: 1;
  padding: 16px;
  background-color: ${props => props.theme.background};
`;

export const ProductsList = styled(
  FlatList as new (
    props: FlatListProps<IProductInCart>,
  ) => FlatList<IProductInCart>,
)`
  flex: 1;
  margin-bottom: 16px;
`;

export const Separator = styled.View`
  width: ${width - 32}px;
  height: 1px;
  background-color: ${props => props.theme.border};
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  font-weight: 700;
  font-size: 40px;
  color: ${props => props.theme.text};
  margin-bottom: 24px;
`;

export const Total = styled.Text`
  font-weight: 700;
  font-size: 32px;
  color: ${props => props.theme.text};
  margin-bottom: 16px;
`;
