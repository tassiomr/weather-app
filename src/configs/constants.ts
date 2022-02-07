export const constants = {
  months: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  days: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],

  testsId: {
    unavailable: "unavailable-text",
    noPermission: 'no-permission-fragment',
    weatherFragment: 'weather-fragment',
    weatherHourText: 'weather-hour-text',
    weatherDayText: 'weather-day-text',
    weatherTempText: 'weather-temp-text',
    weatherText: 'weather-text',
    weatherHumityText: 'weather-humity-text',
    weatherFeelsText: 'weather-feels-text',
    weatherMaxTempText: 'weather-max-temp-text',
    weatherMinTempText: 'weather-min-temp-text',
    weatherCountryText: 'weather-country-text',
  },

  services: {
    geolocation: {
      error: 'Permission denied! To access the functionalities, go to the settings and authorize the use of the location!'
    }
  },

  fragments: {
    noPermission: {
      message: "We don't have permission to access your location, go to setting and enable it to use the app!",
    },
    weather: {
      humidity: "Humidity: ",
      minTemp: "Today Min Temp: ",
      maxTemp: "Today Max Temp: ",
      message_error: "Service unavailable!",
      feelsLike: "Feels like: ",
    }
  },
};
