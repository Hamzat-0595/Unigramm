import { useState } from "react";

import ModalActiveFirst from "./ModalActiveFirst/ModalActiveFirst";
import ModalActiveSecond from "./ModalActiveSecond/ModalActiveSecond";

import "./ModalWindow.scss";

interface IModalWindowProps {
  toggleModalActive: () => void;
}

const ModalWindow = ({ toggleModalActive }: IModalWindowProps) => {
  const [activeModal, setActiveModal] = useState(0);

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

  const modals = [
    <ModalActiveFirst setActiveModalNext={setActiveModalNext} />,
    <ModalActiveSecond setActiveModalPrev={setActiveModalPrev} />,
  ];

  const ActiveModal = modals[activeModal];

  return (
    <>
      <div className="ModalWindowBack" onClick={toggleModalActive} />
      <div className="ModalWindow">{ActiveModal}</div>
    </>
  );
};

export default ModalWindow;
