import PropTypes from "prop-types";

import styles from "./Player.module.scss";

const CurrentSongInfo = ({ currentSong }) => (
  <div className={styles.CurrentSongInfo}>
    <span className={styles.CurrentSongTitle}>
      {currentSong.name}
    </span>
    <span className={styles.CurrentSongArtist}>
      {currentSong.artists?.[0].name}
    </span>
  </div>
);

CurrentSongInfo.propTypes = {
  currentSong: PropTypes.shape({
    name: PropTypes.string.isRequired,
    artists: PropTypes.arrayOf(
      PropTypes.shape({ name: PropTypes.string.isRequired })
    ).isRequired,
  }).isRequired,
};

export default CurrentSongInfo;
