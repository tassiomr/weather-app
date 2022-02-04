import * as React from 'react';
import { TextType } from '../../typescript/type';
import { Component } from './styles';

type Props = {
  text: string;
  textType: TextType
};

export const Text: React.FC<Props> = ({ text, textType }) => {
  return <Component textType={textType}>{text}</Component>;
};
