import { createApi } from '../services/api';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './reducer';
import thunk from 'redux-thunk';
import { setRatesFetchError } from './action';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(createApi(() => store.dispatch(setRatesFetchError('BAD APP ID')))))),
);

export { store };
