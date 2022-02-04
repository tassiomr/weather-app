import styled from 'styled-components/native';
import { IStyledComponentsProps } from '../../typescript/interface';

export const Component = styled.View`
  flex: 1;
  width: 100%;
  alignItems: center;
  paddingLeft: 8px;
  paddingRight: 8px;
  backgroundColor: ${(props: IStyledComponentsProps) => props.theme.colors.background};
`;
