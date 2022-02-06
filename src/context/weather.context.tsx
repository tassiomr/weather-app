import * as React from 'react';
import { WeatherService } from '../services';
import { Weather } from '../typescript/type';

type WeatherContextData = {
  weather: Weather | null;
  isLoading: boolean;
  getWeather: (lat: number, log: number) => void;
};

export const WeatherContext = React.createContext<WeatherContextData>(
  {} as WeatherContextData
);

export const WeatherProvider: React.FC = ({ children }) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [weather, setWeather] = React.useState<Weather | null>(null);

  async function getWeather(lat: number, log: number) {
    try {
      setIsLoading(true);
      const result = await WeatherService.getCurrentWeather(lat, log);
      setWeather(result);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  }

  return (
    <WeatherContext.Provider value={{ weather, isLoading, getWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => React.useContext(WeatherContext);
