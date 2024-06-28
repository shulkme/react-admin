// +---------------------------------
// | 令牌相关函数
// +---------------------------------

/**
 * 令牌存储字段
 */
const TOKEN_KEY = import.meta.env.VITE_TOKEN_KEY;

/**
 * 获取本地令牌
 */
export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

/**
 * 存储令牌
 * 默认使用jwt鉴权格式
 * @param token
 */
export const setToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, `Bearer ${token}`);
};

/**
 * 删除令牌
 */
export const delToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

/**
 * 检查令牌
 */
export const hasToken = () => {
  return !!localStorage.getItem(TOKEN_KEY);
};
