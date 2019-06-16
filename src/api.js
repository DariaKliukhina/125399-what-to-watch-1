import axios from "axios";

const TIMEOUT = 5000;

export const createAPI = () => {
  const api = axios.create({
    baseURL: `https://es31-server.appspot.com/wtw`,
    timeout: TIMEOUT,
    withCredentials: true
  });

  const onSuccess = (response) => response;
  const onFail = (err) => {
    if (err.status === 400) {
      return;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
