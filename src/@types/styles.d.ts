import 'styled-components/native';
import {ITheme} from '../styles/themes/ITheme';

declare module 'styled-components/native' {
  export interface DefaultTheme extends ITheme {}
}
