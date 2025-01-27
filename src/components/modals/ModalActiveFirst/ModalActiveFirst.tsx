import "./ModalActiveFirst.scss";
interface IModalActiveFirstProps {
  setActiveModalNext: () => void;
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ModalActiveFirst = ({
  setActiveModalNext,
  handleFileChange,
}: IModalActiveFirstProps) => {
  return (
    <div className="modalActiveFirst">
      <div className="modalActiveFirst__wrapper">
        <div className="modalActiveFirst__header">
          <div className="modalActiveFirst__title">Создание публикации</div>
          <button
            className="modalActiveFirst__btn"
            onClick={setActiveModalNext}
          >
            Далее
          </button>
        </div>
        <div className="modalActiveFirst__wrapperBotton">
          <div className="modalActiveFirst__text">
            Перетащите сюда фото и видео
          </div>
          <input
            type="file"
            id="real-input"
            hidden
            onChange={handleFileChange}
          />
          <label
            htmlFor="real-input"
            className="modalActiveFirst__imgFromComputer"
          >
            Выбрать на компьютере
          </label>
        </div>
      </div>
    </div>
  );
};

export default ModalActiveFirst;
