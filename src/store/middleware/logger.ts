import { Middleware } from '@reduxjs/toolkit';

export const loggerMiddleware: Middleware = (store) => (next) => (action) => {
	console.log('%c[Logger] Dispatching:', 'color: orange', action);
	const result = next(action); // forward to next middleware or reducer
	console.log('%c[Logger] Next State:', 'color: orange', store.getState());
	return result;
};
