import styled from 'styled-components/native';
import { IStyledComponentsProps } from '../../typescript/interface';
import { TextType } from '../../typescript/type';

export const Component = styled.Text<IStyledComponentsProps & { texType: TextType }>`
  color: ${(props: IStyledComponentsProps) => props.theme.colors.accent};
  font-size: ${(props: IStyledComponentsProps & { textType: TextType}) =>
    props.theme.sizes.font[props.textType]}px;
  font-weight: 700;
`;
