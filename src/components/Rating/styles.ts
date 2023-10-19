import styled from 'styled-components/native';

export const RatingContainer = styled.View`
  align-self: flex-end;
  flex-direction: row;
  align-items: center;
`;

export const Value = styled.Text`
  color: ${props => props.theme.text};
  font-size: 14px;
`;

export const Quantity = styled.Text`
  color: ${props => props.theme.text};
  font-size: 11px;
  font-weight: 300;
`;
