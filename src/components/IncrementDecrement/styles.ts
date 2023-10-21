import styled from 'styled-components/native';
import {IncrementDecrementSize} from '.';

interface CountLabelProps {
  size: IncrementDecrementSize;
}

export const IncrementDecrementContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 8px;
`;

export const CountContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 8px;
`;

export const CountLabel = styled.Text<CountLabelProps>`
  color: ${props => props.theme.text};
  font-size: ${props => (props.size === 'large' ? 32 : 20)}px;
  font-weight: bold;
`;
