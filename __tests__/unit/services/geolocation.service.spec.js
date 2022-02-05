import { GeoLocationService } from '../../../src/services';

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
      let error;
      GeoLocationService.getGeoLocation(
        'a',
        callbackError => (error = callbackError)
      );
    } catch (e) {
      expect(e).toBe('Get an error');
    }
  });

  //   it('shoul success request weather', async () => {
  //     try {
  //       const response = await WeatherService.getCurrentWeather(1, 2);
  //       console.log(response);
  //     } catch (error) {
  //       expect(error.message).toMatch(
  //         'Você precisa informar a longitude e a latitude!'
  //       );
  //     }
  //   });
});
