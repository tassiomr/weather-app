import * as React from 'react';
import { render } from '@testing-library/react-native';
import { View } from 'react-native';
import { Body } from '../../../src/components';

describe('Testing body component', () => {
  it('should isLoading is true show ActivityIndicator', () => {
    const container = render(
      <Body isLoading={true}>
        <View />
      </Body>
    );
    expect(container.toJSON()).toMatchSnapshot();
  });

  it('should isLoading is false show children', () => {
    const container = render(
      <Body isLoading={false}>
        <View />
      </Body>
    );
    expect(container.toJSON()).toMatchSnapshot();
  });
});
