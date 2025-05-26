import { TRootState } from '../../store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { TPostResponse } from './postTypes';
import { POST_URI } from './postConstants';

export const fetchPosts = createAsyncThunk<TPostResponse>(
	'posts/fetchPosts',
	async (_, thunkAPI) => {
		try {
			const { posts } = thunkAPI.getState() as TRootState;
			const { currentPage, numOfItemInPage } = posts;
			const skip = numOfItemInPage * currentPage;
			const url = `${POST_URI}/?limit=${numOfItemInPage}&skip=${skip}`;
			const res = await fetch(url);
			const data = (await res.json()) as TPostResponse;
			return data;
		} catch (err) {
			return thunkAPI.rejectWithValue(
				err instanceof Error ? err.message : 'Failed to fetch posts'
			);
		}
	}
);
