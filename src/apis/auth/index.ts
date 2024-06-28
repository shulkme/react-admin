import request from '@/apis';
import { LoginData, LoginResult, RegisterData } from '@/apis/auth/types';
import { HttpResponse } from '@/apis/types';

/**
 * 用户登录
 * @param data
 */
export function login(data: LoginData): Promise<HttpResponse<LoginResult>> {
  return request.post('/login', data);
}

/**
 * 用户注册
 * @param data
 */
export function register(data: RegisterData) {
  return request.post('/register', data);
}

/**
 * 注销登录
 */
export function logout() {
  return request.post('/logout');
}
