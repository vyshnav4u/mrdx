import { useDispatch } from 'react-redux';
import { TDispatch } from '../../store';
import { useEffect } from 'react';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { TPost } from './postTypes';

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

export const useInitPosts = () => {
	const dispatch = useDispatch<TDispatch>();

	useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);
};
