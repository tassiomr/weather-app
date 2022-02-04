import * as React from 'react';
import { Image } from 'react-native';
import { Body, Spacer, Text, Icon } from '../../components';
import { GetCurrentDay, GetCurrentHour } from '../../tools';
import { HourContainer, WeatherContainer, CountryWrapper, WeatherWrapper, TextWeatherWrapper } from './styles';


export const Home: React.FC = () => {
  return (
    <Body isLoading={false}>
        <HourContainer>
          <Text text={GetCurrentHour()} textType="header" />
          <Text text={GetCurrentDay()} textType="paragraph" />
        </HourContainer>
        <WeatherContainer>
          <CountryWrapper>
            <Icon name='map-marker' size='medium' color='blue' />
            <Text textType='paragraph' text={'Istambul - TK'} />
          </CountryWrapper>
          <Spacer size='large' />
          <WeatherWrapper>
            <TextWeatherWrapper>
              <Text textType='subtitle' text={'32°'} />
              <Text textType='paragraph' text={'Sunny'} />
              <Text textType='paragraph' text={'Humity: 30%'} />
              <Text textType='paragraph' text={'Feels like: 32°'} />
              <Text textType='paragraph' text={'Today Max Temp: 32°'} />
              <Text textType='paragraph' text={'Today Min Temp: 16°'} />
            </TextWeatherWrapper>
            <Image source={{ uri: 'https://openweathermap.org/img/wn/10d@4x.png' }} style={{ width: 150, height: 150 }} />
          </WeatherWrapper>
        </WeatherContainer>
    </Body>
  );
};
