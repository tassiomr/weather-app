import * as React from 'react';
import { render } from '@testing-library/react-native';
import { Icon } from '../../../src/components';

describe('Testing icon component', () => {
  it('should color is null', () => {
    const container = render(<Icon size="extra-large" name="camera" />);
    expect(container.toJSON()).toMatchSnapshot();
  });

  it('should color is not null', () => {
    const container = render(
      <Icon size="extra-large" name="camera" color="blue" />
    );
    expect(container.toJSON()).toMatchSnapshot();
  });
});
