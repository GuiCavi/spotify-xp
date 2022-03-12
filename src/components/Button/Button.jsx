import PropTypes from "prop-types";
import React from "react";

import styles from "./Button.module.scss";

const Button = ({ children, onClick }) => (
  <button className={styles.Button} type="submit" onClick={onClick}>{children}</button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
