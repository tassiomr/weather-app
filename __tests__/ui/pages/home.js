import * as React from 'react';
import { render } from '@testing-library/react-native';
import { WeatherContext } from '../../../src/context/weather.context';
import { Home } from '../../../src/pages/home';
import { constants } from '../../../src/configs/constants';
import { Data } from '../../../__mocks__/data';
import { GetCurrentDay, GetCurrentHour } from '../../../src/tools';
import { GeoLocationContext } from '../../../src/context/geolocation.context';

describe('Testing integration between Home and Weather Context', () => {
  it('should when wont has a weather', () => {
    const props = { weather: null, isLoading: false, getWeather: jest.fn };
    const locationProps = {
      getGeoLocation: jest.fn,
    };

    const Provider = ({ children }) => (
      <GeoLocationContext.Provider value={locationProps}>
        <WeatherContext.Provider value={props}>
          {children}
        </WeatherContext.Provider>
      </GeoLocationContext.Provider>

    );

    const { getByTestId, queryByTestId, toJSON } = render(<Home />, {
      wrapper: Provider,
    });

    expect(queryByTestId(constants.testsId.weatherFragment)).toBe(null);
    expect(getByTestId(constants.testsId.noPermission)).not.toBe(null);
    expect(toJSON()).toMatchSnapshot();
  });

  it('should when has a weather', () => {
    const providerProps = {
      weather: Data,
      isLoading: false,
      getWeather: jest.fn,
    };

    const locationProps = {
      getGeoLocation: jest.fn,
      hasPermission: true,
    };

    const Provider = ({ children }) => {
      return (
        <GeoLocationContext.Provider value={locationProps}>
          <WeatherContext.Provider value={providerProps}>
            {children}
          </WeatherContext.Provider>
        </GeoLocationContext.Provider>
      );
    };

    const { getByTestId, queryByTestId, toJSON } = render(<Home />, {
      wrapper: Provider,
    });

    expect(getByTestId(constants.testsId.weatherFragment)).not.toBe(null);
    expect(queryByTestId(constants.testsId.noPermission)).toBe(null);

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
    expect(tempText.children[0]).toBe('283°');
    expect(weatherText.children[0]).toBe('Clear');
    expect(humityText.children[0]).toBe('Humidity: 100%');
    expect(feelsText.children[0]).toBe('Feels like: 282°');
    expect(minTempText.children[0]).toBe('Today Min Temp: 280°');
    expect(maxTempText.children[0]).toBe('Today Max Temp: 284°');
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
