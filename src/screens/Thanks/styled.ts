import styled from 'styled-components/native';

export const ThanksContainer = styled.View`
  flex: 1;
  background-color: ${props => props.theme.background};
  padding: 16px;
`;

export const Title = styled.Text`
  font-weight: 700;
  font-size: 40px;
  color: ${props => props.theme.text};
  margin-bottom: 16px;
`;

export const Subtitle = styled.Text`
  font-size: 20px;
  color: ${props => props.theme['text-light']};
`;

export const DeliveryIllustration = styled.Image`
  flex: 1;
  object-fit: contain;
`;
