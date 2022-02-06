import styled from 'styled-components/native';
import { IStyledComponentsProps } from '../../typescript/interface';

export const HourContainer = styled.View`
  width: 100%;
  height: 300px;

  opacity: 0.7;
  align-items: center;
  justify-content: center;
`;

export const WeatherContainer = styled.View`
  flex-direction: column;
  width: 100%;
  height: 250px;
  padding: 16px;
  border-radius: 12px;
  align-items: center;
  background-color: ${(props: IStyledComponentsProps) =>
    props.theme?.colors?.background};
    opacity: 0.7;
`;

export const CountryWrapper = styled.View`
  flex-direction: row;
  width: 100%;
`;

export const WeatherWrapper = styled.View`
  flex-direction: row;
  width: 100%;
  padding: 4px;
  justify-content: space-between;
`;

export const TextWeatherWrapper = styled.View`
  flex-direction: column;
  padding: 4px;
`;
