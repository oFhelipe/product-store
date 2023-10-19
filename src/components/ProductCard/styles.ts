import styled from 'styled-components/native';

import {Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');

export const ProductCardContainer = styled.View`
  width: ${width / 2 - 32}px;
  height: 300px;
  border: solid 1px ${props => props.theme.border};
  border-radius: 10px;
`;

export const BottomContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Image = styled.Image``;
export const Title = styled.Text``;
export const Price = styled.Text``;
export const AddButton = styled.TouchableOpacity``;
