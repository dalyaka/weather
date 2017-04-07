import { weatherActionTypes } from '../sagas/actionTypes';

export const defaultCenter = { lat: 59.9386300, lng: 30.3141300 };
const initialState = defaultCenter;


export default function positionReducer(state = initialState, action) {
  switch (action.type) {
    case weatherActionTypes.FETCH_WEATHER:
      return action.payload;
    default:
      return state;
  }
}
