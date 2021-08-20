import {
  beginRatesDataFetch,
  setRatesData,
  setRatesFetchError,
} from './action';

export const fetchRatesData = () => (dispatch, _getState, api) => {
  dispatch(beginRatesDataFetch());
  return api
    .get()
    .then((data) => dispatch(setRatesData(data)))
    .catch((err) => dispatch(setRatesFetchError(err)));
};
