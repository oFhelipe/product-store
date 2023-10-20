import styled, {css} from 'styled-components/native';

interface ButtonStyleProps {
  variant: 'primary' | 'secondary';
}

export const ButtonContainer = styled.TouchableOpacity<ButtonStyleProps>`
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 64px;
  border-radius: 10px;

  ${props => {
    if (props.variant === 'primary') {
      return css`
        background-color: ${props.theme.primary};
      `;
    }

    if (props.variant === 'secondary') {
      return css`
        background-color: ${props.theme.background};
        border: solid 1px ${props.theme['primary-dark']};
      `;
    }
  }}
`;

export const Label = styled.Text<ButtonStyleProps>`
  font-size: 24px;
  font-weight: bold;

  ${props => {
    if (props.variant === 'primary') {
      return css`
        color: ${props.theme.white};
      `;
    }

    if (props.variant === 'secondary') {
      return css`
        color: ${props.theme['primary-dark']};
      `;
    }
  }}
`;
