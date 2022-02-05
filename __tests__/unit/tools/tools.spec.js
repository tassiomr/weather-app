import { constants } from '../../../src/configs/constants';
import {
  GetCurrentDay,
  GetCurrentHour,
  ResponsiveSize,
} from '../../../src/tools';

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
      const hour = date.getHours();
      const minute = date.getMinutes();

      const currentHour = GetCurrentHour();

      expect(`${hour}:${minute}`).toBe(currentHour);
    });

    it('Should a user get a current date', () => {
      const date = new Date();
      const dayOfWeek = constants.days[date.getDay()];
      const month = constants.months[date.getMonth()];
      const dayOfMonth = date.getDate();

      const currentDay = GetCurrentDay();
      expect(`${dayOfWeek} | ${month} ${dayOfMonth}`).toBe(currentDay);
    });
  });
});
