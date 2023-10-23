import {css} from 'styled-components';
import styled from 'styled-components/native';

interface SelectionProps {
  isSelected: boolean;
}

export const SelectionContainer = styled.TouchableOpacity<SelectionProps>`
  height: 32px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
  margin-right: 8px;
  ${props =>
    props.isSelected
      ? css`
          background-color: ${props.theme['primary-light']};
          border: solid 1px ${props.theme.primary};
        `
      : css`
          background-color: ${props.theme.background};
          border: solid 1px ${props.theme.border};
        `}
`;

export const Label = styled.Text<SelectionProps>`
  ${props =>
    props.isSelected
      ? css`
          color: ${props.theme.primary};
        `
      : css`
          color: ${props.theme['text-light']};
        `}
`;
