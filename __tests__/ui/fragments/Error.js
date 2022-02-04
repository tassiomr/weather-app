import * as React from 'react';
import { ErrorFragment } from '../../../src/fragments';
import { render  } from '@testing-library/react-native' 

describe('Testing Weather fragment', () => {
  it('should render correctly', () => {
    const tree = render(<ErrorFragment />).toJSON()
    expect(tree).toMatchSnapshot();
  });
})
