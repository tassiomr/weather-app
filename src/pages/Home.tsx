import * as React from 'react';
import { Body, Text } from '../components';

export const Home: React.FC = () => {
  return (
    <Body isLoading={false}>
      <Text text={'Weather App'} />
    </Body>
  );
};
