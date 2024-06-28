import request from '@/apis';
import type { HttpResponse } from '@/apis/types';
import type { UserRecord } from '@/apis/user/types';

/**
 * 获取用户资料
 */
export function getProfile(): Promise<HttpResponse<UserRecord>> {
  return request.get('/user');
}
