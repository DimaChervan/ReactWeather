import axios from 'axios';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=b714ec74bbab5650795063cb0fdf5fbe&units=metric';

export const getTemp = (location) => {
  const encodedLocation = encodeURIComponent(location);
  const requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

  return axios.get(requestUrl)
    .then(res => res.data.main.temp)
    .catch(res => {
      return new Error(res.data.message);
    });
};
