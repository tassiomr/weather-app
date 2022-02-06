import * as React from 'react';
import { Text } from '../../components';
import { constants } from '../../configs/constants';
import { GetCurrentDay, GetCurrentHour } from '../../tools';
import { Weather } from '../../typescript/type';
import { HourContainer } from './styles';

type Props = {
  weather: Weather;
};

export const HourFragment: React.FC<Props> = () => (
  <>
    <HourContainer>
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
  </>
);
