import * as React from 'react';
import { Body } from '../components';
import { useGeoLocation } from '../context/geolocation.context';
import { useWeather } from '../context/weather.context';
import { ErrorFragment, WeatherFragment } from '../fragments';

export const Home: React.FC = () => {
  const { weather, isLoading } = useWeather();
  const { getGeoLocation } = useGeoLocation();

  return (
    <Body isLoading={isLoading} onPress={getGeoLocation}>
      {weather ? <WeatherFragment weather={weather} /> : <ErrorFragment />}
    </Body>
  );
};
