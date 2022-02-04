import styled from 'styled-components/native';
import { IStyledComponentsProps } from '../../typescript/interface';

export const Component = styled.Text`
  color: ${(props: IStyledComponentsProps) => props.theme.colors.accent};
  font-size: ${(props: IStyledComponentsProps) => props.theme.sizes.font.paragraph};
  font-weight: 700;
`
