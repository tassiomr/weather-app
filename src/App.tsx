import * as React from 'react';
import {useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components';
import sizes from './configs/sizes';
import Themes from './configs/theme';
import {Home} from './pages';

const App = () => {
  const theme = useColorScheme();
  return (
    <ThemeProvider theme={{colors: Themes[theme || 'light'], sizes}}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
