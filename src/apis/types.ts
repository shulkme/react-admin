/**
 * 统一响应体
 */
export interface HttpResponse<T = unknown> {
  msg: string;
  code: number;
  data: T;
}

/**
 * 统一异常体
 */
export interface HttpError {
  msg: string;
  code: number;
}

/**
 * 基本实体类型
 */
export type BaseRecord<T> = T & {
  id: number;
  created_at?: string;
  updated_at?: string;
};

/**
 * 统一分页结果
 */
export type PageResult<T> = HttpResponse<T[]> & {
  meta: {
    page: number;
    total: number;
    pageSize: number;
    pageCount: number;
  };
};

/**
 * 统一分页查询
 */
export type PageParams<T = unknown> = T & {
  page?: number;
  pageSize?: number;
};
