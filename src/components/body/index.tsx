import * as React from 'react';
import { ActivityIndicator } from 'react-native';
import { Component } from './styles';

type Props = {
  children: React.ReactElement,
  isLoading?: boolean
}

export const Body: React.FC<Props> = ({ children, isLoading }) => {
  return <Component>{ isLoading ? <ActivityIndicator size='large' /> : children }</Component>
}
