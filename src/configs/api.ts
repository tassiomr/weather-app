import axios, { Axios, AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
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
