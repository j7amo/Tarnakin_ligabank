import {
  beginRatesDataFetch,
  convertWantAmount,
  setRatesData,
  setRatesFetchError,
} from './action';
import dayjs from 'dayjs';
import { currencyCodes } from '../const';

export const fetchRatesData = (date) => (dispatch, _getState, api) => {
  dispatch(beginRatesDataFetch());
  return api
    .get(
      `historical?access_key=0262640da177365c816e27fc44699961&date=${dayjs(
        date
      ).format('YYYY-MM-DD')}&currencies=${currencyCodes.join(',')}`
    )
    .then((data) => {
      dispatch(setRatesData(data));
      dispatch(convertWantAmount());
    })
    .catch((err) => dispatch(setRatesFetchError(err)));
};
