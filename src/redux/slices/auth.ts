import { AppState } from '@redux/store';
import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  authenticated: boolean;
}

const initialAuthState: AuthState = {
  authenticated: false,
};

export const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    exampleLogin: (state) => {
      state.authenticated = true;
    },
    exampleLogout: (state) => {
      state.authenticated = false;
    },
  },
});

export const { exampleLogin, exampleLogout } = authSlice.actions;

export const selectAuthenticated = (state: AppState) =>
  state.authentication.authenticated;

export default authSlice.reducer;
