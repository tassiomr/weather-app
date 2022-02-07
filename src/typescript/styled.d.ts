import 'styled-components';
import { Sizes, Theme } from './type';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Theme;
    sizes: Sizes;
  }
}
