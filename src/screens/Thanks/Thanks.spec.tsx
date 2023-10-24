import {screen} from '@testing-library/react-native';
import Thanks from '.';
import {renderWithProviders} from '../../../tests/utils/renderWithProviders';

describe('Component: <Thanks />', () => {
  it('should render', () => {
    renderWithProviders(<Thanks />);
    const title = screen.getByText('Compra realizada com sucesso');
    expect(title).toBeOnTheScreen();
  });
});
