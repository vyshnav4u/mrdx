import { configureStore } from '@reduxjs/toolkit';
import * as rootReducers from './slices';
import { loggerMiddleware } from './middleware/logger';

export const store = configureStore({
  reducer: {
    ...rootReducers,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware),
});

export type TRootState = ReturnType<typeof store.getState>;
export type TDispatch = typeof store.dispatch;
