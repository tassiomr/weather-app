import * as React from 'react';
import { NoPermissionFragment } from '../../../src/fragments';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components';
import colors from '../../../src/configs/theme';
import sizes from '../../../src/configs/sizes';


describe('Testing No Permission fragment', () => {

    const Provider = ({ children }) => (
        <ThemeProvider theme={{ colors: colors.dark, sizes: sizes }}>
            {children}
        </ThemeProvider>
    )
 
  it('should render correctly', () => {
    const { toJSON } = render(<NoPermissionFragment />, { wrapper: Provider })
    expect(toJSON()).toMatchSnapshot();
  });

});
