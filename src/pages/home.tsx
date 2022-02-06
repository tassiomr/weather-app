import * as React from 'react';
import { Body } from '../components';
import { useGeoLocation } from '../context/geolocation.context';
import { useWeather } from '../context/weather.context';
import {
  NoPermissionFragment,
  WeatherFragment,
  HourFragment,
} from '../fragments';

export const Home: React.FC = () => {
  const { weather, isLoading, getWeather } = useWeather();
  const { getGeoLocation, geoLocation } = useGeoLocation();

  React.useEffect(() => {
    if (geoLocation) {
      getWeather(geoLocation.lat, geoLocation.log);
    }
  }, [geoLocation]);

  return (
    <Body isLoading={isLoading} onPress={getGeoLocation}>
      <HourFragment />
      {weather ? (
        <WeatherFragment weather={weather} />
      ) : (
        <NoPermissionFragment />
      )}
    </Body>
  );
};
