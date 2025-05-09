import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TPost, TPosts } from './postTypes';
import { fetchPosts } from './postActions';

const initialState: TPosts = {
	posts: [],
	loading: false,
	error: null,
};

const postSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		addPost: (state, action: PayloadAction<TPost>) => {
			state.posts.push(action.payload);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPosts.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchPosts.fulfilled, (state, action) => {
				console.log('action', action);

				state.loading = false;
				state.posts = action.payload;
			})
			.addCase(fetchPosts.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || 'Something went wrong';
			});
	},
});

export const { addPost } = postSlice.actions;

export const posts = postSlice.reducer;
