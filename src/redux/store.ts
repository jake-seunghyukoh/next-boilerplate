import {
  Action,
  AnyAction,
  combineReducers,
  configureStore,
  ReducersMapObject,
  ThunkAction,
} from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { Reducer } from 'react';
import AuthReducer, { authSlice } from './slices/auth';

const combinedReducer = combineReducers({
  [authSlice.name]: AuthReducer,
});

const reducer: Reducer<any, AnyAction> | ReducersMapObject<any, AnyAction> = (
  state,
  action,
) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    if (state.count) nextState.count = state.count; // preserve count value on client side navigation
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export function makeStore() {
  return configureStore({
    reducer,
    devTools: true,
  });
}

export type AppStore = ReturnType<typeof makeStore>;

export type AppState = ReturnType<AppStore['getState']>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper<AppStore>(makeStore);
