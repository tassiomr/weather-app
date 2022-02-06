import * as React from 'react';
import { TouchableOpacity, ImageBackground } from 'react-native';
import { ThemeContext } from 'styled-components';
import { Icon } from '..';
import Theme from '../../configs/theme';
import { Loading } from '../loading';
import { Component, ButtonContainer } from './styles';

type Props = {
  isLoading?: boolean;
  onPress: () => void;
};

export const Body: React.FC<Props> = ({ children, isLoading, onPress }) => {
  const theme = React.useContext(ThemeContext);

  return (
    <ImageBackground source={require('../../img/bg.jpg')} style={{ flex: 1 }}>
      <Component>
        {isLoading ? <Loading /> : children}
        <ButtonContainer>
          <TouchableOpacity testID="button-refresh" onPress={onPress}>
            <Icon
              name="refresh"
              size="large"
              color={theme?.colors?.accent || Theme.light.accent}
            />
          </TouchableOpacity>
        </ButtonContainer>
      </Component>
    </ImageBackground>
  );
};
