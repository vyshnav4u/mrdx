import { configureStore } from '@reduxjs/toolkit';
import { posts } from './slices';
import { loggerMiddleware } from './middleware/logger';

export const store = configureStore({
	reducer: {
		posts,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(loggerMiddleware),
});

export type TRootState = ReturnType<typeof store.getState>;
export type TDispatch = typeof store.dispatch;
