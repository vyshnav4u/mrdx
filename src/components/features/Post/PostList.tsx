import { useInitPosts, usePost } from '../../../store/slices';

const PostList = () => {
	useInitPosts();
	const { posts, loading, error } = usePost();
	//todo: check what is bets way to display loading and error / in wrapper
	if (loading) return 'Loading...';

	if (error) return 'Error';

	return (
		<div>
			<h2> Post Lists </h2>
			{posts.map((post) => (
				<article key={post.id}>
					<h3> {post.title} </h3>
				</article>
			))}
		</div>
	);
};

export default PostList;
