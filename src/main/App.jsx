import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Token } from "../data/usecases/Token";
import requester from "../infra/http/Requester";
import {
  logoutAsync, setData, useToken,
} from "../redux/slices/Auth";
import { AppRouter, UnauthorizedRouter } from "../routes";

const App = () => {
  const dispatch = useDispatch();
  const authData = localStorage.getItem("auth_data");

  if (authData) {
    const data = JSON.parse(authData);

    const token = new Token(data.expires_in, data.login_at);
    if (token.isTokenExpired()) {
      dispatch(logoutAsync());
    } else {
      dispatch(setData(data));
    }
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
