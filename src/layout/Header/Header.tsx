import logo from "src/assets/instagram.png";
import home from "src/assets/home.png";
import msg from "src/assets/msg.png";
import add from "src/assets/add.png";
import trends from "src/assets/trends.png";
import likes from "src/assets/Vector1.png";
import elipse from "src/assets/Ellipse 1.png";
import search from "src/assets/search.png";

import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__size">
        <img className="header__logo" src={logo} />
        <div className="header__input-wrapper">
          <input className="header__input" placeholder="search" />
          <img className="header__search" src={search} />
        </div>
        <div className="picture__wrapper">
          <img className="picture _home" src={home} />
          <img className="picture _msg" src={msg} />
          <button className="picture__btn">
            <img className="picture _add" src={add} />
          </button>
          <img className="picture _trends" src={trends} />
          <img className="picture _likes" src={likes} />
          <img className="picture _elipse" src={elipse} />
        </div>
      </div>
    </div>
  );
};

export default Header;
