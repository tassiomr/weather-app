import * as React from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { ThemeContext } from 'styled-components';
import { Icon } from '..';
import { Component, ButtonContainer } from './styles';

type Props = {
  isLoading?: boolean;
  onPress: () => void;
};

export const Body: React.FC<Props> = ({ children, isLoading, onPress }) => {
  const { colors } = React.useContext(ThemeContext);

  return (
    <Component>
      <ButtonContainer>
        <TouchableOpacity onPress={onPress}>
          <Icon name="refresh" size="large" color={colors.accent} />
        </TouchableOpacity>
      </ButtonContainer>
      {isLoading ? <ActivityIndicator size="large" /> : children}
    </Component>
  );
};
