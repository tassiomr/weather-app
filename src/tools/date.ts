import { constants } from "../configs/constants";

export const GetCurrentHour = () => {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();

  return `${hour}:${minute}`
}

export const GetCurrentDay = () => {
  const date = new Date();
  const dayOfWeek = constants.days[date.getDay()];
  const month = constants.months[date.getMonth()];
  const dayOfMonth = date.getDate();

  return `${dayOfWeek} | ${month} ${dayOfMonth}`;
}