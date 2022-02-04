import {api} from '../configs';
import {Weather} from '../typescript/type';
import {API_KEY} from '@env';

export const WeatherService = {
  getCurrentWeather: async (lat: number, log: number): Promise<Weather> => {
    try {
      if(!lat || !log) {
        throw new Error("Você precisa informar a longitude e a latitude!")
      }

      return await api.get(
        `?lat=${lat}&lon=${log}&units=metric&appid=${API_KEY}`
      );
    } catch (error) {
      throw error;
    }
  },
};
