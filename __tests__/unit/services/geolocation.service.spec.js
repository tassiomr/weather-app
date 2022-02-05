import { GeoLocationService } from '../../../src/services';

const mock = {
  PERMISSIONS: {
    ACCESS_FINE_LOCATION: 'ACCESS_FINE_LOCATION',
  },
  check: () => {
    return true;
  },
  RESULTS: {
    GRANTED: 'granted',
    DENIED: 'denied',
    NEVER_ASK_AGAIN: 'never_ask_again',
  },
};

describe('Testing Weather Service', () => {
  it('should get correct location', () => {
    let geo;
    GeoLocationService.getGeoLocation(
      location => {
        geo = location;
      },
      error => error
    );
    expect(geo).toStrictEqual({ lat: 1, log: 2 });
  });

  it('should get an error', () => {
    try {
      GeoLocationService.getGeoLocation('a', callbackError => callbackError);
    } catch (e) {
      expect(e).toBe('Get an error');
    }
  });

  beforeEach(() => {
    jest.resetModules();
  });

  it('should request permission when is android platform and permission is DENIED', async () => {
    jest.mock('react-native/Libraries/Utilities/Platform', () => ({
      OS: 'android',
      select: () => null,
    }));

    jest.mock(
      'react-native//Libraries/PermissionsAndroid/PermissionsAndroid',
      () => ({
        ...mock,
        request: function () {
          return this.RESULTS.DENIED;
        },
      })
    );

    try {
      await GeoLocationService.getPermission();
    } catch (error) {
      expect(error).toBe(
        'Permissão negada! Para acessar as funcionalidades, vá até as configurações e autorize o uso da localização!'
      );
    }
  });

  it('should get is user not give a permission', () => {
    const response = GeoLocationService.checkPermission();

    jest.mock(
      'react-native//Libraries/PermissionsAndroid/PermissionsAndroid',
      () => ({
        ...mock,
        check: function (_) {
          return false
        },
      })
    );

    expect(response).toBeFalsy();
  })

  it('should get is user not give a permission', () => {
    const response = GeoLocationService.checkPermission();

    jest.mock(
      'react-native//Libraries/PermissionsAndroid/PermissionsAndroid',
      () => ({
        ...mock,
        check: function (_) {
          return true
        },
      })
    );

    expect(response).toBeTruthy();
  })
});
