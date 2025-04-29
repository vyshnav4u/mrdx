import { configureStore } from '@reduxjs/toolkit';
import { posts } from './slices';

export const store = configureStore({
	reducer: {
		posts,
	},
});

export type TRootState = ReturnType<typeof store.getState>;
export type TDispatch = typeof store.dispatch;
