import request from '@/apis';
import type { HttpResponse, PageParams, PageResult } from '@/apis/types';
import type { UserRecord } from '@/apis/user/types';

/**
 * 获取用户资料
 */
export function getProfile(): Promise<HttpResponse<UserRecord>> {
  return request.get('/user');
}

/**
 * 获取用户列表
 */
export function getUsers(params?: PageParams): Promise<PageResult<UserRecord>> {
  return request.get('/users', {
    params,
  });
}
