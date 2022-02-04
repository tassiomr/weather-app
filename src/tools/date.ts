export const GetCurrentHour = () => {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();

  return `${hour}:${minute}`
}
