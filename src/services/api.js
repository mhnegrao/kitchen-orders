import axios from 'axios';
import { localStorageRemoveToken, localStorageGetToken } from './localStorage';

const api = axios.create({
  baseURL: 'http://localhost:3005',
});

api.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response.status === 401) {
      localStorageRemoveToken();
    }
  }
);

api.interceptors.request.use((req) => {
  const token = localStorageGetToken();

  req.headers.Authorization = `Bearer ${token}`;

  return req;
});

export default api;
