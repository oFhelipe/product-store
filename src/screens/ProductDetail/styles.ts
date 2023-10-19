import styled from 'styled-components/native';

export const ProductDetailContainer = styled.View`
  flex: 1;
  padding: 16px;
  background-color: ${props => props.theme.background};
`;

export const BackButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: solid 1px ${props => props.theme.border};
  align-items: center;
  justify-content: center;
`;

export const CategoryRateContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Category = styled.Text`
  color: ${props => props.theme['text-light']};
  font-size: 14px;
`;

export const Detail = styled.Text``;
