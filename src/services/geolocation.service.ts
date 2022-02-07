import GeoLocation from '@react-native-community/geolocation';
import { PermissionsAndroid, Platform } from 'react-native';
import { constants } from '../configs/constants';

export const GeoLocationService = {
  checkPermission: () => {
    return PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );
  },

  getPermission: async () : Promise<boolean> => {
    try {
      if (Platform.OS === 'android') {
        const resp = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        if (resp !== PermissionsAndroid.RESULTS.GRANTED) {
          throw constants.services.geolocation.error;
        }

      }
      return GeoLocationService.checkPermission();
    } catch (error) {
      throw error;
    }
  },

  getGeoLocation: (callback: (position: any) => void) => {
    try {
      GeoLocation.getCurrentPosition(
        callback,
        error => {
          throw error;
        },
        { enableHighAccuracy: true, timeout: 2000, maximumAge: 1000 }
      );
    } catch (error) {
      throw error;
    }
  },
};
