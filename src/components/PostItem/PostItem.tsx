import Comment from "src/assets/postActions/comments.png";
import Like from "src/assets/postActions/like.png";
import Save from "src/assets/postActions/save.png";
import Share from "src/assets/postActions/share.png";
import Emojis from "src/assets/postActions/emojis.png";
import { IPost } from "src/types/IPosts";
import "./PostItem.scss";
import { useState } from "react";
import EditDeleteWindow from "../PostLists/EditDeleteWindow";

const PostItem = ({ description, likes, image, user, _id }: IPost) => {
  const [BtnActive, setBtnActive] = useState(false);

  const toggleBtnActive = () => {
    setBtnActive(!BtnActive);
  };
  return (
    <div className="container">
      <div className="posts">
        <div className="posts__header">
          <div className="posts__wrapper">
            <img className="posts__img" src={image} />
            <div className="posts__name">{user.username}</div>
          </div>
          <button className="posts__btn" onClick={toggleBtnActive}>
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
                src={Comment}
                alt="Comments"
              />
              <img className="posts__Share" src={Share} alt="Share" />
            </span>
            <img className="posts__Save" src={Save} alt="Save" />
          </div>
          <div className="posts__likeCount">{likes.length}</div>
          <div className="posts__Comments">
            <span className="posts__Commentator">{user.username} </span>
            {description.substring(0, 100) + "..."}
            <button className="posts__btnMore">more...</button>
          </div>
          <button className="posts__seeComets">
            See {description.length} comments
          </button>
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
      {BtnActive && <EditDeleteWindow id={_id} />}
    </div>
  );
};

export default PostItem;
