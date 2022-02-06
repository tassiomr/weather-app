import * as React from 'react';
import { Image } from 'react-native';
import { Spacer, Text, Icon } from '../../components';
import { constants } from '../../configs/constants';
import { Weather } from '../../typescript/type';
import {
  WeatherContainer,
  CountryWrapper,
  WeatherWrapper,
  TextWeatherWrapper,
  Unavailable,
} from './styles';

type Props = {
  weather: Weather | null;
};

export const WeatherFragment: React.FC<Props> = ({ weather }) => (
  <>
    <WeatherContainer>
      {weather ? (
        <>
          <CountryWrapper testID={constants.testsId.weatherFragment}>
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
                text={`${constants.fragments.weather.humidity}${weather.main.humidity}%`}
              />
              <Text
                testID={constants.testsId.weatherFeelsText}
                textType="paragraph"
                text={`${constants.fragments.weather.feelsLike}${weather.main.feels_like.toFixed(0)}°`}
              />
              <Text
                testID={constants.testsId.weatherMaxTempText}
                textType="paragraph"
                text={`${constants.fragments.weather.maxTemp}${weather.main.temp_max.toFixed(0)}°`}
              />
              <Text
                testID={constants.testsId.weatherMinTempText}
                textType="paragraph"
                text={`${constants.fragments.weather.minTemp}${weather.main.temp_min.toFixed(0)}°`}
              />
            </TextWeatherWrapper>
            <Image
              source={{
                uri: `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`,
              }}
              style={{ width: 150, height: 150 }}
            />
          </WeatherWrapper>
        </>
      ) : (
        <Unavailable>
          <Text
            textType="paragraph"
            textAlign="center"
            testID={constants.testsId.unavailable}
            text={constants.fragments.weather.message_error}
          />
        </Unavailable>
      )}
    </WeatherContainer>
  </>
);
