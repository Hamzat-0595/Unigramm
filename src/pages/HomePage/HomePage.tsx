import Header from "src/layout/Header/Header";
import PostsList from "src/components/PostLists/PostsList";
import Recommendations from "src/components/Recommendations/Recommendations";

import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="homePage">
      <Header />
      <div className="homePage__container">
        <div>
          <PostsList />
          <PostsList />
        </div>
        <Recommendations />
      </div>
    </div>
  );
};

export default HomePage;
