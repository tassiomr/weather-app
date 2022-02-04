import * as React from 'react';
import { Text, Icon } from '../../components';

import { constants } from '../../configs/constants';

import {
  Container
} from './styles';


export const ErrorFragment: React.FC = () => (
  <>
    <Container>
        <Icon name="emoticon-cry" size="extra-large" color="blue" />
        <Text testID='error-text' text="What's wrong" textType='subtitle' />
    </Container>
  </>
);
