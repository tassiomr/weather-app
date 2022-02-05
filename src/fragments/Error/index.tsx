import * as React from 'react';
import { Text, Icon } from '../../components';

import { constants } from '../../configs/constants';

import { Container } from './styles';

export const ErrorFragment: React.FC = () => (
  <>
    <Container testID={constants.testsId.errorFragment}>
      <Icon name="emoticon-cry" size="extra-large" color="blue" />
      <Text
        testID="error-text"
        text={constants.fragments.errorPage.message}
        textType="subtitle"
      />
    </Container>
  </>
);
