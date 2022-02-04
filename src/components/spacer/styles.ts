import styled from 'styled-components/native'
import { IStyledComponentsProps } from '../../typescript/interface'

export const Component = styled.View<{ size: 'small' | 'medium' | 'large' }>`
  margin-bottom: ${({theme, size }: IStyledComponentsProps &  { size: 'small' | 'medium' | 'large' }) => theme.sizes.spaces[size]}px;
`