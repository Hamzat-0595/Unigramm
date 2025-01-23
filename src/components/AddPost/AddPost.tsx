import { useState } from "react";
import { useAppDispatch } from "src/hooks/hooks";
import { addPosts } from "src/store/posts/postsSlice";

const AddPost = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>("");

  const onChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const handleAddPost = () => {
    dispatch(addPosts({ description: value, body: value }));
    setValue("");
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddPost();
    }
  };
  return <div>cmndfnnk</div>;
};

export default AddPost;
