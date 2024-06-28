import request from '@/apis';
import type { RouteRecord } from '@/apis/route/types';
import type { HttpResponse } from '@/apis/types';

export function getRoutes(): Promise<HttpResponse<RouteRecord[]>> {
  return request.get('/api/routes');
}
