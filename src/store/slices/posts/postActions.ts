import { useDispatch } from 'react-redux';
import { TDispatch, TRootState } from '../../store';
import { useEffect } from 'react';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { TPostResponse } from './postTypes';

const POST_URI = 'https://dummyjson.com/posts';

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
			console.log('data', data);

			return data;
		} catch (err) {
			return thunkAPI.rejectWithValue(
				err instanceof Error ? err.message : 'Failed to fetch posts'
			);
		}
	}
);

export const useInitPosts = () => {
	const dispatch = useDispatch<TDispatch>();

	useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);
};
