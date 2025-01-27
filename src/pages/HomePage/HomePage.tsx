import Header from "src/layout/Header/Header";
import PostsList from "src/components/PostLists/PostsList";
import Recommendations from "src/components/Recommendations/Recommendations";
import { useState } from "react";

import "./HomePage.scss";
import ModalWindow from "src/components/modals/ModalWindow";

const HomePage = () => {
  const [modalActive, setModalActive] = useState(false);

  const toggleModalActive = () => {
    setModalActive((prev) => !prev);
  };

  return (
    <div className="homePage">
      <Header toggleModalActive={toggleModalActive} />
      {modalActive && <ModalWindow toggleModalActive={toggleModalActive} />}
      <div className="homePage__container">
        <PostsList />

        <Recommendations />
      </div>
    </div>
  );
};

export default HomePage;
