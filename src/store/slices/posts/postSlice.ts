import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TPost, TPosts } from './postTypes';
import { fetchPosts } from './postActions';

const initialState: TPosts = {
	posts: [],
	loading: false,
	error: null,
	currentPage: 1,
	numOfItemInPage: 12,
	totalNumberOfPosts: 1,
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
				state.loading = false;
				console.log('action', action);

				const { posts, total } = action.payload;
				state.posts = posts;
				if (total !== state.totalNumberOfPosts) {
					//todo: check if number update each time re-render helps
					state.totalNumberOfPosts = total;
				}
			})
			.addCase(fetchPosts.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || 'Something went wrong';
			});
	},
});

export const { addPost } = postSlice.actions;

export const posts = postSlice.reducer;
