import React from "react";

import LogoImage from "../../assets/spotify-logo-white.png";

import styles from "./Logo.module.scss";

const Logo = () => (
  <img src={LogoImage} className={styles.Logo} alt="Spotify Logo" />
);

export default Logo;
