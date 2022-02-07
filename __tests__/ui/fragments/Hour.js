import * as React from 'react';
import { HourFragment } from '../../../src/fragments';
import { render } from '@testing-library/react-native';

describe('Testing Hour fragment', () => {
 
  it('should render correctly', () => {
    const { toJSON } = render(<HourFragment />)
    expect(toJSON()).toMatchSnapshot();
  });

});
