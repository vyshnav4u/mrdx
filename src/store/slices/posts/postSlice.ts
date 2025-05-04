import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TPost, TPosts } from './postTypes';

const initialState: TPosts = {
	posts: [],
	loading: false,
	error: null,
};

export const fetchPosts = createAsyncThunk<TPost[]>(
	'posts/fetchPosts',
	async (_, thunkAPI) => {
		try {
			const POST_URI = 'https://jsonplaceholder.typicode.com/posts';
			const res = await fetch(POST_URI);
			const data = (await res.json()) as TPost[];

			return data;
		} catch (err) {
			return thunkAPI.rejectWithValue(
				err instanceof Error ? err.message : 'Failed to fetch posts'
			);
		}
	}
);

const postSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		addPost: (state, action: PayloadAction<TPost>) => {
			state.posts.push(action.payload);
		},
	},
});

export const { addPost } = postSlice.actions;

export const posts = postSlice.reducer;
