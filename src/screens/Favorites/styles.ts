import styled from 'styled-components/native';

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
