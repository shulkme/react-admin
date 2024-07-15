import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { ThemeMode } from 'antd-style';

interface AppState {
  themeMode: ThemeMode;
  lang: string;
}

const initialState: AppState = {
  themeMode: 'auto',
  lang: 'en',
};

const app = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setThemeMode: (state, action: PayloadAction<ThemeMode>) => {
      state.themeMode = action.payload;
    },
  },
});

export const appActions = app.actions;

export default app.reducer;
