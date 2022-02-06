import * as React from 'react';
import { ThemeContext } from 'styled-components';

import { Text, Icon } from '../../components';
import { constants } from '../../configs/constants';

import { Container } from './styles';

export const NoPermissionFragment: React.FC = () => {
  const theme = React.useContext(ThemeContext);

  return (
    <>
      <Container>
        <Icon name="emoticon-dead" size="extra-large" color={theme?.colors?.accent} />
        <Text
          textType="paragraph"
          textAlign="center"
          testID={constants.testsId.noPermission}
          text="We don't have permission to access your location, go to setting and enable it to use the app!"
        />
      </Container>
    </>
  );
};
