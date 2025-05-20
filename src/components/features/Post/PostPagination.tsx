import { useSelector } from 'react-redux';
import { TRootState } from '../../../store';

const usePostData = () => {
	const currentPage = useSelector(
		(state: TRootState) => state.posts.currentPage
	);
	const totalNumberOfPosts = useSelector(
		(state: TRootState) => state.posts.totalNumberOfPosts
	);

	return { currentPage, totalNumberOfPosts };
};

const PostPagination = () => {
	const { currentPage, totalNumberOfPosts } = usePostData();

	const onNext = () => {};

	return (
		<div className="pagination" style={{ display: 'flex' }}>
			<button> ⏮ </button>
			<p> Current Page: {currentPage}</p>
			<button onClick={onNext}> ⏭ </button>
		</div>
	);
};

export default PostPagination;
