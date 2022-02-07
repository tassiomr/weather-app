import { Theme } from '../typescript/type';
import { palette } from './palette';

const light: Theme = {
  background: palette.lightBg,
  accent: palette.lightAccent,
  primary: palette.primary,
};

const dark: Theme = {
  background: palette.darkBg,
  accent: palette.darkAccent,
  primary: palette.primary,
};

const colors = {
  light,
  dark,
};

export default colors;
