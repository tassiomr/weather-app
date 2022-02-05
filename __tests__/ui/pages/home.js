import * as React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeContext } from 'styled-components';
import { WeatherContext } from '../../../src/context/weather.context';
import colors from '../../../src/configs/theme';
import sizes from '../../../src/configs/sizes';
import { Home } from '../../../src/pages/home';
import { constants } from '../../../src/configs/constants';
import { Data } from '../../../__mocks__/data';
import { GetCurrentDay, GetCurrentHour } from '../../../src/tools';
import { GeoLocationContext } from '../../../src/context/geolocation.context';

describe('Testing integration between Home and Weather Context', () => {
  it('should when wont has a weather', () => {
    const { getByTestId, queryByTestId, toJSON } = render(
      <ThemeContext.Provider theme={{ colors: colors.dark, sizes: sizes }}>
        <WeatherContext.Provider value={{ weather: null }}>
          <Home />
        </WeatherContext.Provider>
      </ThemeContext.Provider>
    );

    expect(queryByTestId(constants.testsId.weatherFragment)).toBe(null);
    expect(getByTestId(constants.testsId.errorFragment)).not.toBe(null);
    expect(toJSON()).toMatchSnapshot();
  });

  it('should when has a weather', () => {
    const providerProps = {
      weather: Data,
      isLoading: false,
      getWeather: jest.fn,
    };
    const { getByTestId, queryByTestId, toJSON } = render(
      <WeatherContext.Provider value={providerProps}>
        <Home />
      </WeatherContext.Provider>
    );

    expect(getByTestId(constants.testsId.weatherFragment)).not.toBe(null);
    expect(queryByTestId(constants.testsId.errorFragment)).toBe(null);

    const hourText = getByTestId(constants.testsId.weatherHourText);
    const dayText = getByTestId(constants.testsId.weatherDayText);
    const countryText = getByTestId(constants.testsId.weatherCountryText);
    const tempText = getByTestId(constants.testsId.weatherTempText);
    const weatherText = getByTestId(constants.testsId.weatherText);
    const humityText = getByTestId(constants.testsId.weatherHumityText);
    const feelsText = getByTestId(constants.testsId.weatherFeelsText);

    const minTempText = getByTestId(constants.testsId.weatherMinTempText);
    const maxTempText = getByTestId(constants.testsId.weatherMaxTempText);

    const hour = GetCurrentHour();
    const day = GetCurrentDay();

    expect(hourText.children[0]).toBe(hour);
    expect(dayText.children[0]).toBe(day);
    expect(countryText.children[0]).toBe('Mountain View - US');
    expect(tempText.children[0]).toBe('282.55°');
    expect(weatherText.children[0]).toBe('Clear');
    expect(humityText.children[0]).toBe('Humidity: 100%');
    expect(feelsText.children[0]).toBe('Feels like: 281.86°');
    expect(minTempText.children[0]).toBe('Today Min Temp: 280.37°');
    expect(maxTempText.children[0]).toBe('Today Max Temp: 284.26°');
    expect(toJSON()).toMatchSnapshot();
  });

  it('should when has a geoLocation', () => {
    const providerProps = {
      weather: Data,
      isLoading: false,
      getWeather: jest.fn,
    };

    const { toJSON } = render(
      <GeoLocationContext.Provider
        value={{ getGeoLocation: jest.fn, geoLocation: { lat: 1, log: 1 } }}>
        <WeatherContext.Provider value={providerProps}>
          <Home />
        </WeatherContext.Provider>
      </GeoLocationContext.Provider>
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
