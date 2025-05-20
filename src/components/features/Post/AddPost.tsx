import { useDispatch } from 'react-redux';
import { addPost } from '../../../store/slices';
import { useState } from 'react';

const generatePostId = () => {
	const timeStamp = new Date().getTime();
	return timeStamp;
};

const AddPost = () => {
	const [title, setTitle] = useState('Sample title');
	const [body, setBody] = useState('Sample body');

	const dispatch = useDispatch();
	const onCreate = () => {
		//todo: create a banner informing user need fill mandatory fields
		if (!title || !body) {
			return;
		}

		dispatch(addPost({ id: generatePostId(), title, body, userId: 1 }));
		setTitle('');
		setBody('');
		//todo: add notification new post is added
	};

	return (
		<div>
			<input
				onChange={(e) => setTitle(e.target.value)}
				type="text"
				placeholder="title"
				value={title}
			/>
			<textarea
				placeholder="body"
				onChange={(e) => setBody(e.target.value)}
				value={body}
			/>
			<button onClick={onCreate}>Create</button>
		</div>
	);
};

export default AddPost;
