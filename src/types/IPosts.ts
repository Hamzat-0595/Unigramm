export interface IPost {
  _id: string;
  description: string;
  comments: string[];
  image: string;
  user: {
    _id: string;
    username: string;
    avatar: string;
  };
  created_at: number;
  likes: string[];
}

export type postState = {
  posts: IPost[];
  isLoadingPosts: boolean;
  editPostId: string;
  error: string;
};
