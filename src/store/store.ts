import { combineReducers, configureStore } from '@reduxjs/toolkit';

import * as todo from './todo';

const reducer = combineReducers({
  [todo.featureKey]: todo.reducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      immutableCheck: true,
      serializableCheck: true,
    }),
  devTools: process.env.REACT_APP_REDUX_DEV_TOOLS! === "ENABLE",
});
