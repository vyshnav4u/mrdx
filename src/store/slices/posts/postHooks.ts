import { useDispatch } from "react-redux";
import { TDispatch } from "../../store";
import { useEffect } from "react";
import { fetchPosts } from "./postThunks";

export const useInitPosts = () => {
	const dispatch = useDispatch<TDispatch>();

	useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);
};