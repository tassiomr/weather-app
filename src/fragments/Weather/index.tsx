import * as React from 'react';
import { Image } from 'react-native';
import { Spacer, Text, Icon } from '../../components';
import { constants } from '../../configs/constants';
import { GetCurrentDay, GetCurrentHour } from '../../tools';
import { Weather } from '../../typescript/type';
import {
  HourContainer,
  WeatherContainer,
  CountryWrapper,
  WeatherWrapper,
  TextWeatherWrapper,
} from './styles';

type Props = {
  weather: Weather;
};

export const WeatherFragment: React.FC<Props> = ({ weather }) => (
  <>
    <HourContainer testID={constants.testsId.weatherFragment}>
      <Text
        testID={constants.testsId.weatherHourText}
        text={GetCurrentHour()}
        textType="header"
      />
      <Text
        testID={constants.testsId.weatherDayText}
        text={GetCurrentDay()}
        textType="paragraph"
      />
    </HourContainer>
    <WeatherContainer>
      <CountryWrapper>
        <Icon name="map-marker" size="medium" color="blue" />
        <Text
          testID={constants.testsId.weatherCountryText}
          textType="paragraph"
          text={`${weather.name} - ${weather.sys.country}`}
        />
      </CountryWrapper>
      <Spacer size="large" />
      <WeatherWrapper>
        <TextWeatherWrapper>
          <Text
            testID={constants.testsId.weatherTempText}
            textType="subtitle"
            text={`${weather.main.temp.toFixed(0)}°`}
          />
          <Text
            testID={constants.testsId.weatherText}
            textType="paragraph"
            text={weather.weather[0].main}
          />
          <Text
            testID={constants.testsId.weatherHumityText}
            textType="paragraph"
            text={`Humidity: ${weather.main.humidity}%`}
          />
          <Text
            testID={constants.testsId.weatherFeelsText}
            textType="paragraph"
            text={`Feels like: ${weather.main.feels_like.toFixed(0)}°`}
          />
          <Text
            testID={constants.testsId.weatherMaxTempText}
            textType="paragraph"
            text={`Today Max Temp: ${weather.main.temp_max.toFixed(0)}°`}
          />
          <Text
            testID={constants.testsId.weatherMinTempText}
            textType="paragraph"
            text={`Today Min Temp: ${weather.main.temp_min.toFixed(0)}°`}
          />
        </TextWeatherWrapper>
        <Image
          source={{
            uri: `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`,
          }}
          style={{ width: 150, height: 150 }}
        />
      </WeatherWrapper>
    </WeatherContainer>
  </>
);
