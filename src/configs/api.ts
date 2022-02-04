import axios, { Axios, AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { API_URL } from '@env';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
   }
})

api.interceptors.request.use(
  (value: AxiosRequestConfig) => value,
  (error: AxiosError) => Promise.reject(error)
);

api.interceptors.response.use(
  (value: AxiosResponse) => value.data,
  (error: Axios) => Promise.reject(error)
)

export { api };
