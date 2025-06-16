import { useState } from 'react';
import AddPost from './AddPost';
import PostList from './PostList';

const Post = () => {
  const [showAddPost, setShowAddPost] = useState(false);

  return (
    <div>
      <button onClick={() => setShowAddPost((show) => !show)}>Add Post </button>
      {showAddPost && <AddPost />}
      <PostList />
    </div>
  );
};

export default Post;
