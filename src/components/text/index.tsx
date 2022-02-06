import * as React from 'react';
import { TextAlign, TextType } from '../../typescript/type';
import { Component } from './styles';

type Props = {
  text: string;
  textType: TextType;
  testID: string;
  textAlign?: TextAlign;
};

export const Text: React.FC<Props> = ({
  text,
  textType,
  testID,
  textAlign,
}) => {
  return (
    <Component
      testID={testID}
      textType={textType}
      textAlign={textAlign || 'left'}>
      {text}
    </Component>
  );
};
