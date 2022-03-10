import { useToken } from "../redux/slices/Auth";
import { AppRouter, UnauthorizedRouter } from "../routes";
import "../styles.scss";

const App = () => {
  const token = useToken();

  const hasToken = !!token;

  return hasToken ? <AppRouter /> : <UnauthorizedRouter />;
};

export default App;
