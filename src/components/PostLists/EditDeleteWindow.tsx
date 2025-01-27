import { useAppDispatch } from "src/hooks/hooks";
import "./EditDeleteWindow.scss";
import { deletePost } from "src/store/posts/postsSlice";

interface IBtnWindowProps {
  id: string;
}

const EditDeleteWindow = ({ id }: IBtnWindowProps) => {
  const dispatch = useAppDispatch();

  const handleDeletePost = () => {
    dispatch(deletePost({ _id: id }));
  };
  return (
    <div className="EditDeleteWindow">
      <button className="EditDeleteWindow__edit">Edit</button>
      <button className="EditDeleteWindow__delete" onClick={handleDeletePost}>
        Delete
      </button>
    </div>
  );
};

export default EditDeleteWindow;
