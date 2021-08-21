import { ActionType } from './action';
import { CurrencyCode, RequestResult, RequestStatus } from '../const';
import dayjs from 'dayjs';

const initialState = {
  haveAmount: 1000,
  haveCurrencyCode: CurrencyCode.RUB,
  wantAmount: 13.1234,
  wantCurrencyCode: CurrencyCode.USD,
  ratesRequestDate: dayjs(),
  ratesRequestStatus: RequestStatus.IDLE,
  ratesRequestResult: null,
  rates: {},
  error: null,
};

const ratesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_HAVE_AMOUNT:
      return {
        ...state,
        haveAmount: action.payload,
      };
    case ActionType.SET_HAVE_AMOUNT_CODE:
      return {
        ...state,
        haveCurrencyCode: action.payload,
      };
    case ActionType.SET_WANT_AMOUNT:
      return {
        ...state,
        wantAmount: action.payload,
      };
    case ActionType.SET_WANT_AMOUNT_CODE:
      return {
        ...state,
        wantCurrencyCode: action.payload,
      };
    case ActionType.CONVERT_WANT_AMOUNT:
      return {
        ...state,
        wantAmount:
          state.haveAmount *
          (state.rates.data.quotes[`USD${state.wantCurrencyCode}`] /
            state.rates.data.quotes[`USD${state.haveCurrencyCode}`]),
      };
    case ActionType.CONVERT_HAVE_AMOUNT:
      return {
        ...state,
        haveAmount:
          state.wantAmount *
          (state.rates.data.quotes[`USD${state.haveCurrencyCode}`] /
            state.rates.data.quotes[`USD${state.wantCurrencyCode}`]),
      };
    case ActionType.SET_RATES_REQUEST_DATE:
      return {
        ...state,
        ratesRequestDate: action.payload,
      };
    case ActionType.BEGIN_RATES_DATA_FETCH:
      return {
        ...state,
        ratesRequestStatus: RequestStatus.LOADING,
      };
    case ActionType.SET_RATES_DATA:
      return {
        ...state,
        ratesRequestStatus: RequestStatus.IDLE,
        ratesRequestResult: RequestResult.SUCCEEDED,
        rates: action.payload,
      };
    case ActionType.SET_RATES_FETCH_ERROR:
      return {
        ...state,
        ratesRequestStatus: RequestStatus.IDLE,
        ratesRequestResult: RequestResult.FAILED,
        error: action.payload,
      };
    default:
      return state;
  }
};

export { ratesReducer };
