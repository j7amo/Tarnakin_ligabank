export const RequestStatus = {
  IDLE: 'idle',
  LOADING: 'loading',
};

export const RequestResult = {
  SUCCEEDED: 'succeeded',
  FAILED: 'failed',
};

export const CurrencyCode = {
  RUB: 'RUB',
  USD: 'USD',
  EUR: 'EUR',
  GBP: 'GBP',
  CNY: 'CNY',
};

export const currencyCodes = Object.values(CurrencyCode);

export const MAX_AMOUNT = 1000000000;
