import * as React from 'react';

import { InitFragment } from '../../../src/fragments';
import { render  } from '@testing-library/react-native' 

describe('Testing Weather fragment', () => {
  it('should render correctly', () => {
    const tree = render(<InitFragment />).toJSON()
    expect(tree).toMatchSnapshot();
  });
})
