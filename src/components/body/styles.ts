import styled from 'styled-components/native';
import { IStyledComponentsProps } from '../../typescript/interface';

export const Component = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding-left: 8px;
  padding-right: 8px;
  background-color: ${(props: IStyledComponentsProps) =>
    props.theme.colors.primary};
`;
