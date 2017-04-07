import { fork } from 'redux-saga/effects';

import { weatherApi } from '../api/WeatherApi';
import { weatherActionTypes } from './actionTypes';
import { takeEveryApiCall } from './utils';

export const fetchWeather = ({ lat, lng }) => ({
  type: weatherActionTypes.FETCH_WEATHER,
  payload: { lat, lng }
});

const watchFetchWeather = takeEveryApiCall(weatherActionTypes.FETCH_WEATHER, weatherApi.fetchWeather);

export default function* weatherSagas() {
  yield fork(watchFetchWeather);
}
