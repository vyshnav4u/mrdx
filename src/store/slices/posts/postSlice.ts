import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TPost, TPosts } from './postTypes';

const initialState: TPosts = {
	posts: [],
};

const postSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		addPost: (state, action: PayloadAction<TPost>) => {
			state.posts = [...state.posts, action.payload];
		},
	},
});

export const { addPost } = postSlice.actions;

export const posts = postSlice.reducer;
