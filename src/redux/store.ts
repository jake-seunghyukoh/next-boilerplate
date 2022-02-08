import authReducer from '@redux/slices/auth';
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

export function makeStore() {
  return configureStore({
    reducer: {
      authentication: authReducer,
    },
  });
}

const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
