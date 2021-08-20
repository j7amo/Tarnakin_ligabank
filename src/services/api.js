import axios from 'axios';
import { currencyCodes } from '../const';

const BACKEND_URL = `http://api.currencylayer.com/live?access_key=0262640da177365c816e27fc44699961&currencies=${currencyCodes.join(
  ','
)}`;
const REQUEST_TIMEOUT = 5000;

const HttpCode = {
  UNAUTHORIZED: 401,
};

export const createApi = (onUnauthorized) => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const { response } = err;

    if (response.status === HttpCode.UNAUTHORIZED) {
      onUnauthorized();
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
