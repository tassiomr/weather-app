import * as React from 'react';
import { Image } from 'react-native';
import { Spacer, Text, Icon } from '../../components';
import { GetCurrentDay, GetCurrentHour } from '../../tools';
import { Weather } from '../../typescript/type';
import { HourContainer, WeatherContainer, CountryWrapper, WeatherWrapper, TextWeatherWrapper } from './styles';

// type Props = {
//   weather: Weather
// }

export const WeatherFragment = () => (
  <><HourContainer>
    <Text testID='weather-hour-text' text={GetCurrentHour()} textType="header" />
    <Text testID='weather-day-text' text={GetCurrentDay()} textType="paragraph" />
   </HourContainer>
   <WeatherContainer>
      <CountryWrapper>
        <Icon name='map-marker' size='medium' color='blue' />
        <Text testID='weather-country-text' textType='paragraph' text={'Istambul - TK'} />
      </CountryWrapper>
      <Spacer size='large' />
      <WeatherWrapper>
        <TextWeatherWrapper>
          <Text testID='weather-temp-text' textType='subtitle' text={'32°'} />
          <Text testID='weather-text' textType='paragraph' text={'Sunny'} />
          <Text testID='weather-humity-text' textType='paragraph' text={'Humity: 30%'} />
          <Text testID='weather-feels-text' textType='paragraph' text={'Feels like: 32°'} />
          <Text testID='weather-max-temp-text' textType='paragraph' text={'Today Max Temp: 32°'} />
          <Text testID='weather-min-temp-text' textType='paragraph' text={'Today Min Temp: 16°'} />
        </TextWeatherWrapper>
        <Image source={{ uri: 'https://openweathermap.org/img/wn/10d@4x.png' }} style={{ width: 150, height: 150 }} />
      </WeatherWrapper>
    </WeatherContainer>
  </>
)