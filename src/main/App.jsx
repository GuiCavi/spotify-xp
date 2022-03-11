import { useEffect } from "react";
import { useDispatch } from "react-redux";

import requester from "../infra/http/Requester";
import { setData, useToken } from "../redux/slices/Auth";
import { AppRouter, UnauthorizedRouter } from "../routes";
import "../styles.scss";

const App = () => {
  const dispatch = useDispatch();
  const authData = localStorage.getItem("auth_data");

  if (authData) {
    dispatch(setData(JSON.parse(authData)));
  }

  return <AppContainer />;
};

const AppContainer = () => {
  const token = useToken();

  useEffect(() => {
    if (token) {
      requester.setToken(token);
    }
  }, [token]);

  return token ? <AppRouter /> : <UnauthorizedRouter />;
};

export default App;
