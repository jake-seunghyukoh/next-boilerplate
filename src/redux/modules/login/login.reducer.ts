import { AppState } from '@redux/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum LoginEnums {
  LOGIN = 'login',
  SIGN_UP = 'signUp',
}

interface LoginPageState {
  loginState: LoginEnums;
  redirectURL: string | null;
  expired: boolean | null;
}

const initialState: LoginPageState = {
  loginState: LoginEnums.LOGIN,
  redirectURL: null,
  expired: null,
};

interface setQueryInterface {
  redirectURL: string | null;
  expired: boolean | null;
}

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
    setQuery: (state, action: PayloadAction<setQueryInterface>) => {
      state.expired = action.payload.expired;
      state.redirectURL = action.payload.redirectURL;
    },
  },
});

export const { goLogin, goSignUp, setQuery } = loginSlice.actions;

export const selectLoginPageState = (state: AppState) =>
  state.loginPage.loginState;

export default loginSlice.reducer;
