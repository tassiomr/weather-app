export type Theme = {
  background: string;
  accent: string;
  primary: string;
};

export type Sizes = {
  icons: {
    large: number;
    medium: number;
    small: number;
  };
  font: {
    header: number;
    subtitle: number;
    paragraph: number;
  };
  spaces: {
    small: number;
    medium: number;
    large: number;
  }
};

export type GeoLocation = {
  lat: number;
  log: number;
};

export type Weather = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  base: String;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    message: number;
    country: string;
    sunrise: Date;
    sunset: Date;
  };
  timezone: Date;
  id: number;
  name: string;
  cod: number;
};

export type TextType = 'header' | 'subtitle' | 'paragraph'
