/**
 * 为了便于类型推导，重写 `useDispatch` 和 `useSelector`
 * https://cn.redux.js.org/tutorials/typescript-quick-start#%E5%AE%9A%E4%B9%89%E6%A0%B9-state-%E5%92%8C-dispatch-%E7%B1%BB%E5%9E%8B
 */

import type { AppDispatch, RootState } from '@/stores';
import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from 'react-redux';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
