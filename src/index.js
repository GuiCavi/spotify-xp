import ReactDOM from "react-dom";

import { makeApp } from "./main/makers/make-app";

import "./styles/global.scss";

ReactDOM.render(
  makeApp(),
  document.getElementById("root")
);
