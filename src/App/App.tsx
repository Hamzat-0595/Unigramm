import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import AuthorizationPage from "src/pages/AuthorizationPage/AuthorizationPage";
import HomePage from "src/pages/HomePage/HomePage";
import { useAppDispatch } from "src/hooks/hooks";
import { setToken } from "src/api/baseService";
import { getUser } from "src/store/user/userActions";
import { useEffect } from "react";

function App() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleGetUsers = async () => {
    try {
      setToken();
      await dispatch(getUser()).unwrap();
      navigate("/");
    } catch (error) {
      navigate("/user/sign-in");
    }
  };

  useEffect(() => {
    handleGetUsers();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user/sign-in" element={<AuthorizationPage />} />
      </Routes>
    </div>
  );
}

export default App;
