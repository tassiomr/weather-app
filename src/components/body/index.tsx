import * as React from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { ThemeContext } from 'styled-components';
import { Icon } from '..';
import Theme from '../../configs/theme';
import { Component, ButtonContainer } from './styles';

type Props = {
  isLoading?: boolean;
  onPress: () => void;
};

export const Body: React.FC<Props> = ({ children, isLoading, onPress }) => {
  const theme = React.useContext(ThemeContext);

  return (
    <Component>
      <ButtonContainer>
        <TouchableOpacity testID="button-refresh" onPress={onPress}>
          <Icon
            name="refresh"
            size="large"
            color={theme?.colors?.accent || Theme.light.accent}
          />
        </TouchableOpacity>
      </ButtonContainer>
      {isLoading ? <ActivityIndicator size="large" /> : children}
    </Component>
  );
};
