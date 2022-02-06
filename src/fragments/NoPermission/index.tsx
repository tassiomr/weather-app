import * as React from 'react';
import { ThemeContext } from 'styled-components';

import { Text, Icon } from '../../components';

import { Container } from './styles';

export const NoPermissionFragment: React.FC = () => {
  const { colors } = React.useContext(ThemeContext);

  return (
    <>
      <Container>
        <Icon name="emoticon-dead" size="extra-large" color={colors.accent} />
        <Text
          textType="paragraph"
          textAlign="center"
          testID="no-permission-text"
          text="We don't have permission to access your location, go to setting and enable it to use the app!"
        />
      </Container>
    </>
  );
};
