/**
 * 通过地址查找目标对象
 * @param data 对象数组
 * @param path 地址段
 * @param key 指定查找
 */
export const findNestedObject = <T extends { children?: T[] }>(
  data: T[],
  path: string,
  key: string = 'key',
): T | undefined => {
  const keys = path.split('.');
  let result: T | undefined;

  for (const k of keys) {
    result = data.find((item) => item[key] === k);
    if (result && result.children) {
      data = result.children;
    } else {
      break;
    }
  }

  return result;
};
