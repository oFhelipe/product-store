import styled from 'styled-components/native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');

export const ProductsContainer = styled.View`
  flex: 1;
  background-color: ${props => props.theme.background};
  padding: 16px;
`;

export const Title = styled.Text`
  font-weight: 700;
  font-size: 40px;
  color: ${props => props.theme.text};
  margin-bottom: 24px;
`;

export const LoadingContainer = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const LoadingCard = styled(ShimmerPlaceHolder)`
  width: ${width / 2 - 20}px;
  height: 300px;
  border-radius: 10px;
  margin-bottom: 16px;
`;
