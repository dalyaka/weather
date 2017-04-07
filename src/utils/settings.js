export const settings = {
  apiUrl: process.env.NODE_ENV !== 'production' ? 'http://api.openweathermap.org' : ' https://crossorigin.me/http://api.openweathermap.org',
  baseUrl: process.env.NODE_ENV !== 'production' ? '/Users/dalyaka/my/weather/index.html' : '/weather/assets/',
  openWeatherApiParams: 'appid=c260fa56e60ab19059cabec7029ac520&lang=ru',
};
