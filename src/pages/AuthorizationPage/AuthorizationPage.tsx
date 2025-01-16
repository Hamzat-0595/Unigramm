import { useNavigate } from "react-router-dom";
import "./AuthorizationPage.scss";
import logo from "src/assets/instagram.png";
import { useState } from "react";
import { useAppDispatch } from "src/hooks/hooks";
import { logIn } from "src/store/user/userActions";

const AuthorizationPage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useAppDispatch();

  const authorization = async () => {
    try {
      await dispatch(logIn({ username, password })).unwrap();
      setPassword("");
      setUsername("");
      navigate("/");
    } catch (e) {
      return e;
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      authorization();
    }
  };

  return (
    <div className="LoginForm">
      <form className="LoginForm__form" onSubmit={(e) => e.preventDefault()}>
        <img className="LoginForm__logo" src={logo} />
        <input
          className="LoginForm__input"
          type="name"
          placeholder="Телефон, имя пользователя или эл.адрес"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="LoginForm__input"
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
        />
        <button className="LoginForm__button" onClick={authorization}>
          Войти
        </button>
      </form>
    </div>
  );
};

export default AuthorizationPage;
