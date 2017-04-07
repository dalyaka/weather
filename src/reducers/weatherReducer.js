import { weatherActionTypes } from '../sagas/actionTypes';


const initialState = {
  loading: false,
  loaded: false,
  info: null,
};


export default function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case weatherActionTypes.FETCH_WEATHER:
      return { ...state, loading: true, loaded: false };
    case weatherActionTypes.FETCH_WEATHER_COMPLETE:
      return { loading: false, loaded: true, info: action.payload };
    default:
      return state;
  }
}
