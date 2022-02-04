import * as React from 'react';
import { TextType } from '../../typescript/type';
import { Component } from './styles';

type Props = {
  text: string;
  textType: TextType;
  testID: string;
};

export const Text: React.FC<Props> = ({ text, textType, testID }) => {
  return <Component testID={testID} textType={textType}>{text}</Component>;
};
