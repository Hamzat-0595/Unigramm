import "./ModalActiveSecond.scss";
import Arrow from "src/assets/Arrow 1.png";

interface IModalActiveSecondProps {
  setActiveModalPrev: () => void;
}
const ModalActiveSecond = ({ setActiveModalPrev }: IModalActiveSecondProps) => {
  return (
    <div className="modalActiveSecond">
      <div className="modalActiveSecond__wrapper">
        <div className="modalActiveSecond__header">
          <button
            className="modalActiveSecond__btnPrev"
            onClick={setActiveModalPrev}
          >
            <img src={Arrow} />
          </button>
          <div className="modalActiveSecond__title">Создание публикации</div>
          <button className="modalActiveSecond__btnAdd">Поделиться</button>
        </div>
        <div className="modalActiveSecond__bottom">
          <div>
            <img className="modalActiveSecond__addImg" />
          </div>
          <div className="modalActiveSecond__container">
            <div className="modalActiveSecond__user">
              <img className="modalActiveSecond__userImg" />
              <div className="modalActiveSecond__userName">hamza</div>
            </div>
            <input
              className="modalActiveSecond__input"
              placeholder="Добавьте подпись..."
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalActiveSecond;
