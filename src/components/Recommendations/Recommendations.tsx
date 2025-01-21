import "./Recommendations.scss";

const Recommendations = () => {
  return (
    <div className="Recommendations">
      <div className="Recommendations__containerTop">
        <div className="Recommendations__infoTop">
          <img className="Recommendations__image" />
          <div className="Recommendations__wrapper">
            <div className="Recommendations__nameChange">johndoe</div>
            <div className="Recommendations__description">John Doe</div>
          </div>
        </div>
        <button className="Recommendations__Change">Change</button>
      </div>
      <div className="Recommendations__all">
        <div className="Recommendations__suggestions">Suggestions for you</div>
        <div className="Recommendations__see">See all</div>
      </div>
      <div className="Recommendations__container">
        <div className="Recommendations__info">
          <img className="Recommendations__img" />
          <div className="Recommendations__wrapper">
            <div className="Recommendations__name">janedoe</div>
            <div className="Recommendations__description">
              Suggestion for you
            </div>
          </div>
        </div>
        <button className="Recommendations__Follow">Follow</button>
      </div>
      <div className="Recommendations__container">
        <div className="Recommendations__info">
          <img className="Recommendations__img" />
          <div className="Recommendations__wrapper">
            <div className="Recommendations__name">robertdoe</div>
            <div className="Recommendations__description">
              Suggestion for you
            </div>
          </div>
        </div>
        <button className="Recommendations__Follow">Follow</button>
      </div>
      <div className="Recommendations__container">
        <div className="Recommendations__info">
          <img className="Recommendations__img" />
          <div className="Recommendations__wrapper">
            <div className="Recommendations__name">sandradoe</div>
            <div className="Recommendations__description">
              Suggestion for you
            </div>
          </div>
        </div>
        <button className="Recommendations__Follow">Follow</button>
      </div>
      <div className="Recommendations__container">
        <div className="Recommendations__info">
          <img className="Recommendations__img" />
          <div className="Recommendations__wrapper">
            <div className="Recommendations__name">pepedoe_</div>
            <div className="Recommendations__description">
              Suggestion for you
            </div>
          </div>
        </div>
        <button className="Recommendations__Follow">Follow</button>
      </div>
      <div className="Recommendations__container">
        <div className="Recommendations__info">
          <img className="Recommendations__img" />
          <div className="Recommendations__wrapper">
            <div className="Recommendations__name">simon.doe</div>
            <div className="Recommendations__description">
              Suggestion for you
            </div>
          </div>
        </div>
        <button className="Recommendations__Follow">Follow</button>
      </div>
      <div className="Recommendations__Information">
        Information · Help · Prisoner · API · Job · Privacity · Conditions ·
        Locations · Trending accounts · Hashtags · Language
      </div>
      <div className="Recommendations__instagram">
        © 2022 INSTAGRAM FROM SIMMXS
      </div>
    </div>
  );
};

export default Recommendations;
