import { constants } from '../configs/constants';

const formatDate = (date?: string) => {
  if (date) {
    return new Date(date);
  } else {
    return new Date();
  }
};
export const GetCurrentHour = (date?: string) => {
  let newDate = formatDate(date);

  let hour = newDate.getHours().toString();
  let minute = newDate.getMinutes().toString();

  if (hour.length < 2) {
    hour = `0${hour}`;
  }

  if (minute.length < 2) {
    minute = `0${minute}`;
  }

  return `${hour}:${minute}`;
};

export const GetCurrentDay = (date?: string) => {
  const newDate = formatDate(date);
  const dayOfWeek = constants.days[newDate.getDay()];
  const month = constants.months[newDate.getMonth()];
  let dayOfMonth = newDate.getDate().toString();

  if (dayOfMonth.length < 2) {
    dayOfMonth = `0${dayOfMonth}`;
  }

  return `${dayOfWeek} | ${month} ${dayOfMonth}`;
};
