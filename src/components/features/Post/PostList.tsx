import { useAppSelector } from '../../../store/hook';
import { selectPost } from '../../../store/slices/posts';
import { useInitPosts } from '../../../store/slices/posts/postHooks';
import PostPagination from './PostPagination';

const PostList = () => {
  useInitPosts();
  const { posts, loading, error, totalNumberOfPosts } = useAppSelector(selectPost);
  //todo: check what is bets way to display loading and error / in wrapper
  if (loading) return 'Loading...';

  if (error) return 'Error';

  console.log('posts', posts);

  return (
    <div>
      <h2> Post Lists </h2>
      <div>
        <p> Total Posts: {totalNumberOfPosts} </p>
      </div>
      <ol>
        {posts.map((post) => (
          <li key={post.id}>
            <h4> {post.title} </h4>
          </li>
        ))}
      </ol>
      <PostPagination />
    </div>
  );
};

export default PostList;
