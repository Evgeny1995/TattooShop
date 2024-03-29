import thunk from 'redux-thunk';
import { rootReducer } from './rootReducers.ts';
import { configureStore } from '@reduxjs/toolkit';

export const index = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([thunk]),
});

export type RootState = ReturnType<typeof rootReducer>;
