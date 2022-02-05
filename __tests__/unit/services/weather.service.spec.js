import { WeatherService } from '../../../src/services';

describe('Testing Weather Service', () => {
  it('should no pass lat or log in the params', async () => {
    try {
      await WeatherService.getCurrentWeather();
    } catch (error) {
      expect(error.message).toMatch(
        'Você precisa informar a longitude e a latitude!'
      );
    }
  });
});
