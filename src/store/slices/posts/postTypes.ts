export type TPost = {
	id: number;
	title: string;
	body: string;
	userId: number;
};

export type TPosts = {
	posts: TPost[];
	loading: boolean;
	error: string | null;
};
