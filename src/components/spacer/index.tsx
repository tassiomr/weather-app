import * as React from 'react';
import { Component } from './styles';

type Props = { size: 'small' | 'medium' | 'large' };

export const Spacer: React.FC<Props> = ({ size }) => {
  return <Component size={size} />;
};
