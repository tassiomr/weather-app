import * as React from 'react';
import { ThemeContext } from 'styled-components';
import { Icon } from '../icon';

import { ActivityIndicator } from 'react-native';
import { Spacer } from '..';

import { Container } from './styles';

export const Loading = () => {
  const theme = React.useContext(ThemeContext);

  return (
    <Container>
      <Icon name="white-balance-sunny" size="extra-large" />
      <Spacer size="large" />
      <Spacer size="large" />
      <ActivityIndicator color={theme?.colors?.background} size="large" />
    </Container>
  );
};
