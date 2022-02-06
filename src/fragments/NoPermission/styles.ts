import styled from 'styled-components/native';
import { IStyledComponentsProps } from '../../typescript/interface';

export const Container = styled.View`
  flex-direction: column;
  width: 100%;
  height: 250px;
  padding: 16px;
  border-radius: 12px;
  align-items: center;
  background-color: ${(props: IStyledComponentsProps) =>
    props.theme?.colors?.background};
  opacity: 0.7;
  justify-content: center;
`;
