import PropTypes from "prop-types";
import React from "react";

import { useHasPlayer } from "../../redux/slices/Player";
import { Logo } from "../Logo";

import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  const isPlayerOpen = useHasPlayer();
  const classname = [styles.Container];

  if (isPlayerOpen) {
    classname.push(styles.PlayerOpen);
  }

  return (
    <div className={classname.join(" ")}>
      <main className={styles.MainContent}>
        <Logo />
        {children}
      </main>
    </div>
  );
};

Layout.propTypes = { children: PropTypes.node.isRequired };

export default Layout;
