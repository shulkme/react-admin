import request from '@/apis';
import type { PageParams, PageResult } from '@/apis/types';
import { UserRecord } from '@/apis/user/types';

export function getList(params?: PageParams): Promise<PageResult<UserRecord>> {
  return request('/users', {
    params,
  });
}
