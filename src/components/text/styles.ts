import styled from 'styled-components/native';
import sizes from '../../configs/sizes';
import colors from '../../configs/theme';
import { IStyledComponentsProps } from '../../typescript/interface';
import { TextType } from '../../typescript/type';

const Component = styled.Text<IStyledComponentsProps & { texType: TextType }>`
  color: ${({ theme }: IStyledComponentsProps) => theme.colors.accent};
  font-size: ${({
    theme,
    textType,
  }: IStyledComponentsProps & { textType: TextType }) =>
    theme.sizes.font[textType]}px;
  font-weight: 700;
`;

Component.defaultProps = {
  theme: {
    colors: colors.dark,
    sizes,
  },
};

export { Component };
