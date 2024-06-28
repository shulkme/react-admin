import request from '@/apis';
import type { PageParams, PageResult } from '@/apis/types';
import type { PostRecord } from '@/pages/layouts/grid/posts/types';

export function getList(params?: PageParams): Promise<PageResult<PostRecord>> {
  return request('/posts', {
    params,
  });
}
