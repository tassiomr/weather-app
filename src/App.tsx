import * as React from 'react';
import { useColorScheme } from 'react-native';
import { ThemeProvider } from 'styled-components';
import sizes from './configs/sizes';
import Themes from './configs/theme';
import { Home } from './pages';
import { GeoLocationProvider } from './context/geolocation.context';

const App = () => {
  const theme = useColorScheme();
  return (
    <ThemeProvider theme={{ colors: Themes[theme || 'light'], sizes }}>
      <GeoLocationProvider>
        <Home />
      </GeoLocationProvider>
    </ThemeProvider>
  );
};

export default App;
