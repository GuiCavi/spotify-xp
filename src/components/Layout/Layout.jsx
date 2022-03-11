import PropTypes from "prop-types";
import React from "react";

import { Logo } from "../Logo";

import styles from "./Layout.module.scss";

const Layout = ({ children }) => (
  <div className={styles.Container}>
    <main className={styles.MainContent}>
      <Logo />
      {children}
    </main>
  </div>
);

Layout.propTypes = { children: PropTypes.node.isRequired };

export default Layout;
