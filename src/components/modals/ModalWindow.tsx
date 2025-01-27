import { useState } from "react";

import ModalActiveFirst from "./ModalActiveFirst/ModalActiveFirst";
import ModalActiveSecond from "./ModalActiveSecond/ModalActiveSecond";

import "./ModalWindow.scss";
import { addPost } from "src/store/posts/postsSlice";
import { useAppDispatch } from "src/hooks/hooks";

interface IModalWindowProps {
  toggleModalActive: () => void;
}

const ModalWindow = ({ toggleModalActive }: IModalWindowProps) => {
  const [activeModal, setActiveModal] = useState(0);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
      setActiveModalNext();
    }
  };
  const onChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const handleAddPost = () => {
    dispatch(addPost({ description: value, body: value }));
    setValue("");
    toggleModalActive();
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddPost();
    }
  };

  const setActiveModalNext = () => {
    setActiveModal((prev) => {
      const nextPage = prev + 1;
      if (modals.length - 1 < nextPage) {
        return modals.length;
      }
      return nextPage;
    });
  };

  const setActiveModalPrev = () => {
    setActiveModal((prev) => {
      const prevPage = prev - 1;
      if (prevPage < 0) {
        return 0;
      }
      return prevPage;
    });
  };

  const imageUrl = selectedFile ? URL.createObjectURL(selectedFile) : "";

  const modals = [
    <ModalActiveFirst
      setActiveModalNext={setActiveModalNext}
      handleFileChange={handleFileChange}
    />,
    <ModalActiveSecond
      setActiveModalPrev={setActiveModalPrev}
      imageUrl={imageUrl}
      handleAddPost={handleAddPost}
      onChangeInput={onChangeInput}
    />,
  ];

  const ActiveModal = modals[activeModal];

  return (
    <div className="ModalWindow">
      <div className="ModalWindowBack" onClick={toggleModalActive} />
      <div className="ModalWindow">{ActiveModal}</div>
    </div>
  );
};

export default ModalWindow;
