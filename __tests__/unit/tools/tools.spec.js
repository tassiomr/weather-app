import { constants } from '../../../src/configs/constants';
import {
  GetCurrentDay,
  GetCurrentHour,
  ResponsiveSize,
} from '../../../src/tools';

const mock = '2021-02-07 09:00';

describe('Testing tools', () => {
  describe('Testing ResponsiveSize file', () => {
    it('should when user no pass value get an error', () => {
      const number = ResponsiveSize();
      expect(number).toBe(NaN);
    });

    it('should when user pass 100 on function, they get 48', () => {
      const number = ResponsiveSize(100);
      expect(number).toBe(48);
    });
  });

  describe('Testing date file tools', () => {
    it('Should a user get a current hour', () => {
      const date = new Date();
      let hour = date.getHours().toString();
      let minute = date.getMinutes().toString();

      if (hour.length < 2) {
        hour = `0${hour}`;
      }

      if (minute.length < 2) {
        minute = `0${minute}`;
      }


      const currentHour = GetCurrentHour();

      expect(`${hour}:${minute}`).toBe(currentHour);
    });

    it('Should a user get a current date', () => {
      const date = new Date();
      const dayOfWeek = constants.days[date.getDay()];
      const month = constants.months[date.getMonth()];
      let dayOfMonth = date.getDate().toString();

      if (dayOfMonth.length < 2) {
        dayOfMonth = `0${dayOfMonth}`;
      }

      const currentDay = GetCurrentDay();
      expect(`${dayOfWeek} | ${month} ${dayOfMonth}`).toBe(currentDay);
    });

    it('Should a user get a date with lenght = 1', () => {
      const date = new Date(mock);
      const dayOfWeek = constants.days[date.getDay()];
      const month = constants.months[date.getMonth()];
      let dayOfMonth = date.getDate().toString();

      if (dayOfMonth.length < 2) {
        dayOfMonth = `0${dayOfMonth}`;
      }

      const currentDay = GetCurrentDay(mock);
      expect(`${dayOfWeek} | ${month} ${dayOfMonth}`).toBe(currentDay);
    });

    it('Should a user get a hour with lenght = 1', () => {
      const date = new Date(mock);
      let hour = date.getHours().toString();
      let minute = date.getMinutes().toString();

      const currentHour = GetCurrentHour(mock);

      if (hour.length < 2) {
        hour = `0${hour}`;
      }

      if (minute.length < 2) {
        minute = `0${minute}`;
      }

      expect(`${hour}:${minute}`).toBe(currentHour);
    });
  });
});
