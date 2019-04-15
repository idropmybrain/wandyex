import { combineReducers } from 'redux';
import videos from '@reducers/videos';

const appReducer = combineReducers({
  videos
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
