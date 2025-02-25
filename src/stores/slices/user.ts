import type { UserRecord } from '@/apis/user/types';
import type { RouteObjectType } from '@/router/types';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface UserState
  extends Pick<
    UserRecord,
    'username' | 'nickname' | 'email' | 'avatar' | 'roles' | 'permissions'
  > {
  loading: boolean;
  routes?: RouteObjectType[]; // 可选，用于从远程获取用户路由
}

const initialState: UserState = {
  username: '',
  nickname: '',
  email: '',
  avatar: '',
  roles: '',
  permissions: [],
  loading: true,
  routes: [],
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<Partial<UserState>>) => {
      return { ...state, ...action.payload };
    },
    reset: (state) => {
      return {
        ...state,
        ...initialState,
      };
    },
  },
});

export const userActions = user.actions;

export default user.reducer;
