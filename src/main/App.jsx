import { useDispatch } from "react-redux";

import { initAuth, useToken } from "../redux/slices/Auth";
import { AppRouter, UnauthorizedRouter } from "../routes";
import "../styles.scss";

const App = () => {
  const dispatch = useDispatch();
  dispatch(initAuth());

  return <AppContainer />;
};

const AppContainer = () => {
  const token = useToken();

  const hasToken = !!token;

  return hasToken ? <AppRouter /> : <UnauthorizedRouter />;
};

export default App;
