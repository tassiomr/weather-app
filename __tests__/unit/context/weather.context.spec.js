import * as React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import {
  WeatherProvider,
  useWeather,
} from '../../../src/context/weather.context';
import { fireEvent, render, waitFor } from '@testing-library/react-native';

describe('Testing geolocation context', () => {
  const Provider = ({ children }) => {
    return <WeatherProvider>{children}</WeatherProvider>;
  };

  it('should call getWeather and get an error', async () => {
    const TestingProvider = () => {
      const { getWeather } = useWeather();

      return (
        <>
          <TouchableOpacity testID="button-test-case" onPress={getWeather}>
            <Text>Button</Text>
          </TouchableOpacity>
        </>
      );
    };

    const { getByTestId } = render(<TestingProvider />, {
      wrapper: Provider,
    });

    const button = getByTestId('button-test-case');
    waitFor(() => fireEvent.press(button));
  });

  it('should call getWeather and get a correct weather', () => {
    const TestingProvider = () => {
      const { getWeather } = useWeather();

      return (
        <>
          <TouchableOpacity
            testID="button-test-case"
            onPress={() => getWeather(1, 2)}>
            <Text>Button</Text>
          </TouchableOpacity>
        </>
      );
    };
    const { getByTestId } = render(<TestingProvider />, {
      wrapper: Provider,
    });

    const button = getByTestId('button-test-case');
    waitFor(() => fireEvent.press(button));
  });
});
