// +---------------------------------
// | 状态管理
// +---------------------------------

import { configureStore } from '@reduxjs/toolkit';
import user from './slices/user';

const store = configureStore({
  reducer: {
    user,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
