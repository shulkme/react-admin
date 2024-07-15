// +---------------------------------
// | 状态管理
// +---------------------------------

import { configureStore } from '@reduxjs/toolkit';
import app from './slices/app';
import user from './slices/user';

const store = configureStore({
  reducer: {
    user,
    app,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
