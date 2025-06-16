export type TPost = {
  id: number;
  title: string;
  body: string;
  userId: number;
  views: number;
};

export type TPosts = {
  posts: TPost[];
  loading: boolean;
  error: string | null;
  totalNumberOfPosts: number;
  currentPage: number;
  numOfItemInPage: number;
};

export type TPostResponse = {
  posts: TPost[];
  total: number;
  skip: number;
  limit: number;
};
