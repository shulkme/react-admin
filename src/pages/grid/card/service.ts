import request from '@/apis';
import type { PageParams, PageResult } from '@/apis/types';
import { ProductRecord } from './types';

export function getList(
  params?: PageParams,
): Promise<PageResult<ProductRecord>> {
  return request('/products', {
    params,
  });
}
