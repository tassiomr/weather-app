import React from 'react';
import { Component } from './styles';

type Props = {
  text: string;
};

export const Text: React.FC<Props> = ({ text }) => {
  return <Component>{text}</Component>;
};
