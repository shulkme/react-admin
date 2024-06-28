// +---------------------------------
// | 请求管理，基于Axios，其它自行实现
// +---------------------------------

import { appendPending, removePending } from '@/apis/pending';
import { getToken } from '@/utils/token.ts';
import axios, { type AxiosResponse } from 'axios';

/**
 * 请求器
 */
const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 3000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

/**
 * 请求拦截器
 */
request.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = token;
    }
    // removePending(config); // 在发送请求前移除上一个相同的请求
    appendPending(config); // 将当前请求添加到队列中
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

/**
 * 响应拦截器
 */
request.interceptors.response.use(
  <T>(response: AxiosResponse<T>): T => {
    removePending(response.config); // 在响应后移除请求
    return response.data;
  },
  (error) => {
    if (error.config) {
      removePending(error.config); // 在请求错误后移除请求
    }
    // 这里可以统一处理各种错误情况
    if (error.response) {
      // 服务器返回了一个错误响应
      //console.error('Server Error:', error.response.data);
      return Promise.reject(error.response.data);
    } else if (error.request) {
      // 请求发出但没有收到响应
      console.error('Request Error:', error.request);
    } else {
      // 在设置请求时发生了错误
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  },
);

export default request;
