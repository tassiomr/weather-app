import * as React from 'react';
import { GeoLocationService } from '../services';
import { GeoLocation } from '../typescript/type';

type GeoLocationContextData = {
  geoLocation: GeoLocation | null;
  getGeoLocation: () => void;
  getPermission: () => void;
  isLoading: boolean;
  hasPermission: boolean;
};

export const GeoLocationContext = React.createContext<GeoLocationContextData>(
  {} as GeoLocationContextData
);

export const GeoLocationProvider: React.FC = ({ children }) => {
  const [geoLocation, setGeoLocation] = React.useState<GeoLocation | null>(
    null
  );

  const [isLoading, setLoading] = React.useState<boolean>(true);
  const [hasPermission, setPermission] = React.useState<boolean>(false);

  async function getPermission() {
    try {
      const permission = await GeoLocationService.getPermission();

      setPermission(permission);
    } catch (error) {
      throw error;
    }
  }

  async function getGeoLocation() {
    try {
      setLoading(true);
      await getPermission();

      GeoLocationService.getGeoLocation(position => {
        setGeoLocation({
          lat: position.coords.latitude,
          log: position.coords.longitude,
        });
      });

      setLoading(false);
    } catch (error) {
      setLoading(false);

      throw error;
    }
  }

  return (
    <GeoLocationContext.Provider
      value={{ geoLocation, getGeoLocation, getPermission, isLoading, hasPermission }}>
      {children}
    </GeoLocationContext.Provider>
  );
};

export const useGeoLocation = () => React.useContext(GeoLocationContext);
