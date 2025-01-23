import "./PostsList.scss";

import { useAppDispatch, useAppSelector } from "src/hooks/hooks";
import { getPosts } from "src/store/posts/postsSlice";
import { useEffect } from "react";
import PostItem from "../PostItem/PostItem";

const PostsList = () => {
  const dispatch = useAppDispatch();
  const { posts, isLoadingPosts } = useAppSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  console.log(posts);

  if (isLoadingPosts) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="container">
      <div className="navbar">
        {posts.map((post) => (
          <PostItem {...post} />
        ))}
      </div>
    </div>
  );
};

export default PostsList;
