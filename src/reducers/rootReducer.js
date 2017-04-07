import { combineReducers } from 'redux';

import weather from './weatherReducer';
import position from './positionReducer';


const rootReducer = combineReducers({
  weather,
  position
});

export default rootReducer;
