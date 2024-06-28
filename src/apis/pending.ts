// +---------------------------------
// | 请求队列，防止重复请求，避免资源过载
// +---------------------------------
import axios, { type AxiosRequestConfig, type Canceler } from 'axios';

/**
 * 请求队列
 */
const pending = new Map<string, Canceler>();

/**
 * 构造队列项
 * @param config
 */
const createPending = (config: AxiosRequestConfig): string => {
  return [
    config.method,
    config.url,
    JSON.stringify(config.params),
    JSON.stringify(config.data),
  ].join('&');
};

/**
 * 追加队列项
 * @param config
 */
const appendPending = (config: AxiosRequestConfig): void => {
  const item = createPending(config);
  config.cancelToken =
    config.cancelToken ||
    new axios.CancelToken((cancel) => {
      if (!pending.has(item)) {
        pending.set(item, cancel);
      }
    });
};

/**
 * 移除队列项
 * @param config
 */
const removePending = (config: AxiosRequestConfig): void => {
  const item = createPending(config);
  if (pending.has(item)) {
    const cancel = pending.get(item);
    if (cancel) {
      cancel(`Request cancelled: ${item}`);
    }
    pending.delete(item);
  }
};

/**
 * 清空队列项
 */
const clearPending = (): void => {
  for (const [item, cancel] of pending) {
    if (cancel) {
      cancel(`Request cancelled: ${item}`);
    }
  }
  pending.clear();
};

export { appendPending, clearPending, createPending, removePending };
