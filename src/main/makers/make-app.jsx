import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "../App";
import store from "../state/store";

export const makeApp = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
