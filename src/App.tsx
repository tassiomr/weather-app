import * as React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { ThemeProvider } from 'styled-components';
import sizes from './configs/sizes';
import Themes from './configs/theme';
import { Home } from './pages';
import { GeoLocationProvider } from './context/geolocation.context';
import { palette } from './configs/palette';
import { WeatherContainer } from './pages/Home/styles';

const App = () => {
  const theme = useColorScheme();
  return (
    <ThemeProvider theme={{ colors: Themes[theme || 'light'], sizes }}>
      <StatusBar backgroundColor={palette.primary} />
      <WeatherContainer>
        <GeoLocationProvider>
          <Home />
        </GeoLocationProvider>
      </WeatherContainer>
    </ThemeProvider>
  );
};

export default App;
