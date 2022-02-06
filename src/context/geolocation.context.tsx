import * as React from 'react';
import { GeoLocationService } from '../services';
import { GeoLocation } from '../typescript/type';

type GeoLocationContextData = {
  geoLocation: GeoLocation | null;
  getGeoLocation: () => void;
  getPermission: () => void;
};

export const GeoLocationContext = React.createContext<GeoLocationContextData>(
  {} as GeoLocationContextData
);

export const GeoLocationProvider: React.FC = ({ children }) => {
  const [geoLocation, setGeoLocation] = React.useState<GeoLocation | null>(
    null
  );

  async function getPermission() {
    try {
      await GeoLocationService.getPermission();
    } catch (error) {
      throw error;
    }
  }

  async function getGeoLocation() {
    try {
      await getPermission();

      GeoLocationService.getGeoLocation(position => {
        setGeoLocation({
          lat: position.coords.latitude,
          log: position.coords.longitude,
        });
      });
    } catch (error) {
      throw error;
    }
  }

  return (
    <GeoLocationContext.Provider
      value={{ geoLocation, getGeoLocation, getPermission }}>
      {children}
    </GeoLocationContext.Provider>
  );
};

export const useGeoLocation = () => React.useContext(GeoLocationContext);
