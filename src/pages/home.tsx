import * as React from 'react';
import { Body } from '../components';
import { useGeoLocation } from '../context/geolocation.context';
import { useWeather } from '../context/weather.context';
import { ErrorFragment, WeatherFragment } from '../fragments';

export const Home: React.FC = () => {
  const { weather } = useWeather();
  const { getGeoLocation } = useGeoLocation();

  return <Body isLoading={false} onPress={getGeoLocation}>
    {
      !!weather ? <WeatherFragment weather={weather} /> : <ErrorFragment />
    }
  </Body>
};
