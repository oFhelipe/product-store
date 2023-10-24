import styled, {css} from 'styled-components/native';
import {ButtonSizes, ButtonVariants} from '.';

interface ButtonStyleProps {
  variant: ButtonVariants;
  size: ButtonSizes;
}

export const ButtonContainer = styled.TouchableOpacity<ButtonStyleProps>`
  flex-direction: row;
  padding: 0 8px;
  gap: 8px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  ${props =>
    props.disabled &&
    css`
      opacity: 0.7;
    `}

  ${props => {
    if (props.size === 'small') {
      return css`
        height: 32px;
        min-width: 32px;
      `;
    }

    if (props.size === 'medium') {
      return css`
        height: 40px;
        min-width: 40px;
      `;
    }

    if (props.size === 'large') {
      return css`
        height: 48px;
        min-width: 48px;
      `;
    }
  }}

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

    if (props.variant === 'tertiary') {
      return css`
        background-color: ${props.theme.background};
        border: solid 1px ${props.theme.border};
      `;
    }
  }}
`;

export const Label = styled.Text<ButtonStyleProps>`
  font-size: 16px;
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
