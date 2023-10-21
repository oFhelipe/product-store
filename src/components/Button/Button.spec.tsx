import 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {screen, act, fireEvent} from '@testing-library/react-native';
import {Button} from '.';
import {renderWithProviders} from '../../../tests/utils/renderWithProviders';

describe('Component <Button />', () => {
  it('should render with label', () => {
    renderWithProviders(<Button label="Label" />);
    const title = screen.getByText('Label');
    expect(title).toBeOnTheScreen();
  });

  it('should render with icon', () => {
    renderWithProviders(
      <Button icon={<AntDesign testID="icone" name="plus" />} />,
    );
    const icon = screen.getByTestId('icone');
    expect(icon).toBeOnTheScreen();
  });

  it('should render with label and icon', () => {
    renderWithProviders(
      <Button label="Label" icon={<AntDesign testID="icone" name="plus" />} />,
    );
    const icon = screen.getByTestId('icone');
    expect(icon).toBeOnTheScreen();

    const title = screen.getByText('Label');
    expect(title).toBeOnTheScreen();
  });

  it('should exec function on press', async () => {
    const onPressFunction = jest.fn();
    renderWithProviders(<Button label="Label" onPress={onPressFunction} />);
    const button = screen.getByTestId('button');
    act(() => {
      fireEvent.press(button);
    });
    expect(onPressFunction).toBeCalledTimes(1);
  });
});
