import React from "react";
import { Link } from "react-router-dom";

import ArrowLeft from "../../assets/chevron-left-solid.svg";

import styles from "./Header.module.scss";

const Header = () => (
  <header className={styles.Header}>
    <Link to="/" className="">
      <ArrowLeft />
      Voltar
    </Link>
  </header>
);

export default Header;
