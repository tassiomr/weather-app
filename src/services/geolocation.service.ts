import GeoLocation from '@react-native-community/geolocation';
import { PermissionsAndroid, Platform } from 'react-native';

export const GeoLocationService = {
  checkPermission: () => {
    return PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
  },

  getPermission: async () => {
    try {
      if (Platform.OS === 'android') {
        const resp = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Permissão de acesso a sua localização',
            message:
              'Este app precisa da localização para te mostar o clima com base na sua posição!',
            buttonNeutral: 'Pergunte-me depois',
            buttonNegative: 'Não',
            buttonPositive: 'Sim',
          }
        );
        if (resp !== PermissionsAndroid.RESULTS.GRANTED) {
          throw 'Permissão negada! Para acessar as funcionalidades, vá até as configurações e autorize o uso da localização!';
        }
      }
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
