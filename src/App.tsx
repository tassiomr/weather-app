import * as React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { ThemeProvider } from 'styled-components';
import sizes from './configs/sizes';
import Themes from './configs/theme';
import { Home } from './pages/home';
import { GeoLocationProvider } from './context/geolocation.context';
import { WeatherProvider } from './context/weather.context';

const App = () => {
  const theme = useColorScheme();
  StatusBar.setHidden(true);

  return (
    <ThemeProvider theme={{ colors: Themes[theme || 'light'], sizes }}>
      <WeatherProvider>
        <GeoLocationProvider>
          <Home />
        </GeoLocationProvider>
      </WeatherProvider>
    </ThemeProvider>
  );
}

export default App;
