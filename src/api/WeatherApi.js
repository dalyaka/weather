import { apiClient } from './ApiClient';
import { settings } from '../utils/settings';

export class WeatherApi {

  constructor(client = null) {
    this.client = client || apiClient;
  }

  fetchWeather = ({ lat, lng }) =>
    this.client.get(`/data/2.5/forecast/daily?lat=${lat}&lon=${lng}&cnt=7&${settings.openWeatherApiParams}`)

}

export const weatherApi = new WeatherApi();
