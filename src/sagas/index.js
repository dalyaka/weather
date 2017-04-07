import { fork } from 'redux-saga/effects';

import weatherSagas from './weatherSagas';

export default function* sagas() {
  yield fork(weatherSagas);
}
