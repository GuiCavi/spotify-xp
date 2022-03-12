import PropTypes from "prop-types";

import styles from "./Player.module.scss";

const typeStyle = { inverted: styles.Inverted };

const PlayerButton = ({
  children, onClick, styleType,
}) => (
  <div className={[styles.PlayerButton, typeStyle[styleType]].join(" ")} onClick={onClick}>
    {children}
  </div>
);

PlayerButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  styleType: PropTypes.string,
};

PlayerButton.defaultProps = {
  onClick: () => { },
  styleType: "",
};

export default PlayerButton;
