import * as React from 'react';
import { constants } from '../../../src/configs/constants';
import { WeatherFragment } from '../../../src/fragments';
import { render  } from '@testing-library/react-native' 
import { ThemeProvider } from 'styled-components'

import colors from '../../../src/configs/theme';
import sizes from '../../../src/configs/sizes';
import { GetCurrentDay, GetCurrentHour } from '../../../src/tools';

const Data =
{
  "coord": {
    "lon": -122.08,
    "lat": 37.39
  },
  "weather": [
    {
      "id": 800,
      "main": "Clear",
      "description": "clear sky",
      "icon": "01d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 282.55,
    "feels_like": 281.86,
    "temp_min": 280.37,
    "temp_max": 284.26,
    "pressure": 1023,
    "humidity": 100
  },
  "visibility": 16093,
  "wind": {
    "speed": 1.5,
    "deg": 350
  },
  "clouds": {
    "all": 1
  },
  "dt": 1560350645,
  "sys": {
    "type": 1,
    "id": 5122,
    "message": 0.0139,
    "country": "US",
    "sunrise": 1560343627,
    "sunset": 1560396563
  },
  "timezone": -25200,
  "id": 420006353,
  "name": "Mountain View",
  "cod": 200
  }                         

describe('Testing Weather fragment', () => {
  const tree = () => render(<WeatherFragment weather={Data} />, {
    wrapper: ({children}) => <ThemeProvider theme={{ colors: colors, sizes }}>{children}</ThemeProvider>
  })
  
  it('should render correctly', () => {
    const { container } = tree().toJSON();
    expect(container).toMatchSnapshot();
  });

  it('should recive an object', async () => {
    const { getByTestId } = tree()

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
  });
})