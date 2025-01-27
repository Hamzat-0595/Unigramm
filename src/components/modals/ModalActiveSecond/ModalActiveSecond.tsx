import "./ModalActiveSecond.scss";
import Arrow from "src/assets/Arrow 1.png";

interface IModalActiveSecondProps {
  setActiveModalPrev: () => void;
  imageUrl: string;
  handleAddPost: () => void;
  onChangeInput: (e: React.FormEvent<HTMLInputElement>) => void;
}
const ModalActiveSecond = ({
  setActiveModalPrev,
  imageUrl,
  handleAddPost,
  onChangeInput,
}: IModalActiveSecondProps) => {
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
          <button className="modalActiveSecond__btnAdd" onClick={handleAddPost}>
            Поделиться
          </button>
        </div>
        <div className="modalActiveSecond__bottom">
          <div>
            <img className="modalActiveSecond__addImg" src={imageUrl} />
          </div>
          <div className="modalActiveSecond__container">
            <div className="modalActiveSecond__user">
              <img className="modalActiveSecond__userImg" />
              <div className="modalActiveSecond__userName">Khamzat</div>
            </div>
            <textarea
              className="modalActiveSecond__input"
              placeholder="Добавьте подпись..."
              onChange={onChangeInput}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalActiveSecond;
