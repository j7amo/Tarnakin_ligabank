export const ActionType = {
  SET_HAVE_AMOUNT: 'data/haveAmountSet',
  SET_HAVE_AMOUNT_CODE: 'data/haveAmountCodeSet',
  SET_WANT_AMOUNT: 'data/wantAmountSet',
  SET_WANT_AMOUNT_CODE: 'data/wantAmountCodeSet',
  CONVERT_WANT_AMOUNT: 'data/wantAmountConverted',
  CONVERT_HAVE_AMOUNT: 'data/haveAmountConverted',
  SET_RATES_REQUEST_DATE: 'data/ratesRequestDateSet',
  BEGIN_RATES_DATA_FETCH: 'data/ratesDataFetchBegan',
  SET_RATES_DATA: 'data/ratesDataSet',
  SET_RATES_FETCH_ERROR: 'data/ratesFetchErrorSet',
  ADD_HISTORY_DATA: 'data/historyDataAdded',
  CLEAR_HISTORY_DATA: 'data/historyDataCleared',
};

export function setHaveAmount(amount) {
  return {
    type: ActionType.SET_HAVE_AMOUNT,
    payload: amount,
  };
}

export function setHaveAmountCode(code) {
  return {
    type: ActionType.SET_HAVE_AMOUNT_CODE,
    payload: code,
  };
}

export function setWantAmount(amount) {
  return {
    type: ActionType.SET_WANT_AMOUNT,
    payload: amount,
  };
}

export function setWantAmountCode(code) {
  return {
    type: ActionType.SET_WANT_AMOUNT_CODE,
    payload: code,
  };
}

export function convertWantAmount() {
  return {
    type: ActionType.CONVERT_WANT_AMOUNT,
  };
}

export function convertHaveAmount() {
  return {
    type: ActionType.CONVERT_HAVE_AMOUNT,
  };
}

export function setRatesRequestDate(date) {
  return {
    type: ActionType.SET_RATES_REQUEST_DATE,
    payload: date,
  };
}

export function beginRatesDataFetch() {
  return {
    type: ActionType.BEGIN_RATES_DATA_FETCH,
  };
}

export function setRatesData(data) {
  return {
    type: ActionType.SET_RATES_DATA,
    payload: data,
  };
}

export function setRatesFetchError(err) {
  return {
    type: ActionType.SET_RATES_FETCH_ERROR,
    payload: err,
  };
}

export function addHistoryData(data) {
  return {
    type: ActionType.ADD_HISTORY_DATA,
    payload: data,
  };
}

export function clearHistoryData() {
  return {
    type: ActionType.CLEAR_HISTORY_DATA,
  };
}
