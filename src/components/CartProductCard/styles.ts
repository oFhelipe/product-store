import styled from 'styled-components/native';

export const CartProductCardContainer = styled.TouchableOpacity`
  height: 108px;
  width: 100%;
  flex-direction: row;
  padding: 4px 8px;
  border: solid 1px ${props => props.theme.border};
  border-radius: 10px;
  margin-bottom: 16px;
`;

export const Image = styled.Image`
  height: 100%;
  width: 30%;
  object-fit: contain;
`;

export const InfoContainer = styled.View`
  padding: 8px;
  flex: 1;
  justify-content: space-between;
`;

export const Title = styled.Text`
  padding-right: 8px;
  font-weight: 600;
  color: ${props => props.theme.text};
`;

export const BottomContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Price = styled.Text`
  font-weight: 700;
  color: ${props => props.theme.text};
  font-size: 20px;
`;
