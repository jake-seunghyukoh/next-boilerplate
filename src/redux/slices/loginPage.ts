import { AppState } from '@redux/store';
import { createSlice } from '@reduxjs/toolkit';

export enum LoginEnums {
  LOGIN = 'login',
  SIGN_UP = 'signUp',
}

interface LoginPageState {
  loginState: LoginEnums;
}

const initialState: LoginPageState = {
  loginState: LoginEnums.LOGIN,
};

export const loginSlice = createSlice({
  name: 'loginPage',
  initialState,
  reducers: {
    goLogin: (state) => {
      state.loginState = LoginEnums.LOGIN;
    },
    goSignUp: (state) => {
      state.loginState = LoginEnums.SIGN_UP;
    },
  },
});

export const { goLogin, goSignUp } = loginSlice.actions;

export const selectLoginPageState = (state: AppState) =>
  state.loginPage.loginState;

export default loginSlice.reducer;
