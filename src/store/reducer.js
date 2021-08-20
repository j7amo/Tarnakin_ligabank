import { combineReducers } from 'redux';
import { ratesReducer } from './rates-reducer';
import { historyReducer } from './history-reducer';

const rootReducer = combineReducers({
  rates: ratesReducer,
  history: historyReducer,
});

export { rootReducer };
