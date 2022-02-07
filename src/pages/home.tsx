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
  const { weather, isLoading: weatherLoading, getWeather } = useWeather();
  const { getGeoLocation, isLoading: geoLocationLoading, geoLocation, hasPermission } = useGeoLocation();

  React.useEffect(() => {
    if (geoLocation) {
      getWeather(geoLocation.lat, geoLocation.log);
    }
  }, [geoLocation]);

  React.useEffect(() => {
    getGeoLocation();
  }, [])

  return (
    <Body isLoading={weatherLoading || geoLocationLoading} onPress={getGeoLocation}>
      <HourFragment />
      {hasPermission ? (
        <WeatherFragment weather={weather} />
      ) : (
        <NoPermissionFragment />
      )}
    </Body>
  );
};
