import "./PostsList.scss";
import Comments from "src/assets/postActions/comments.png";
import Like from "src/assets/postActions/like.png";
import Save from "src/assets/postActions/save.png";
import Share from "src/assets/postActions/share.png";
import Emojis from "src/assets/postActions/emojis.png";
import { useAppDispatch, useAppSelector } from "src/hooks/hooks";
import { getPosts } from "src/store/posts/postsSlice";
import { useEffect } from "react";

const PostsList = () => {
  const dispatch = useAppDispatch();
  const { posts, isLoadingPosts } = useAppSelector((state) => state.posts);

  // const completedPosts = posts.filter((post) => post.completed === true);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  console.log(posts);

  if (isLoadingPosts) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="container">
      <div className="posts">
        <div className="posts__header">
          <div className="posts__wrapper">
            <img className="posts__img" />
            <div className="posts__name">{posts[0].user.username}</div>
          </div>
          <button className="posts__btn">
            <div className="posts__dots"></div>
            <div className="posts__dots"></div>
            <div className="posts__dots"></div>
          </button>
        </div>
        <img className="posts__content" />
        <div className="posts__bottom">
          <div className="posts__actions">
            <span className="posts__span">
              <img className="posts__Like" src={Like} alt="Like" />
              <img
                className="posts__ImgComments"
                src={Comments}
                alt="Comments"
              />
              <img className="posts__Share" src={Share} alt="Share" />
            </span>
            <img className="posts__Save" src={Save} alt="Save" />
          </div>
          <div className="posts__likeCount">9.999 likes</div>
          <div className="posts__Comments">
            <span className="posts__Commentator">Johndoe </span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor<button className="posts__btnMore">more...</button>
          </div>
          <button className="posts__seeComets">See 0 comments</button>
          <div className="posts__time">9 HOURS AGO</div>
        </div>
      </div>
      <div className="posts__addComments">
        <button className="posts__smile">
          <img src={Emojis} alt="Emojis" className="posts__emojis" />
        </button>
        <input
          type="text"
          className="posts__input"
          placeholder="Add a comment..."
        />
        <button className="posts__add">Post</button>
      </div>
    </div>
  );
};

export default PostsList;
