import PropTypes from "prop-types";
import { useRef } from "react";
import Lottie from "react-lottie";

import volumeEqAnimationData from "../../assets/lotties/volume-eq.json";
import { Duration } from "../../data/usecases/Duration";
import { useCurrentSong } from "../../redux/slices/Player";

import styles from "./TracksContainer.module.scss";

const TracksContainer = ({ tracks }) => {
  const currentSong = useCurrentSong();

  if (!tracks) {
    return <span>Carregando...</span>;
  }

  return (
    <ul className={styles.AlbumTracks}>
      {
        tracks.items.map((track) => (
          <TrackItem key={track.id} track={track} selected={currentSong?.id === track.id} />
        ))
      }
    </ul>
  );
};

TracksContainer.propTypes = {
  tracks: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        duration_ms: PropTypes.number.isRequired,
        artists: PropTypes.arrayOf(
          PropTypes.shape({ name: PropTypes.string.isRequired })
        ).isRequired,
      })
    ).isRequired,
  }).isRequired,
};

const TrackItem = ({ track, selected }) => {
  const classname = [styles.TrackItem];
  if (selected) {
    classname.push(styles.TrackItemSelected);
  }

  const defaultOptions = useRef({
    loop: true,
    autoplay: true,
    animationData: volumeEqAnimationData,
    rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
  });

  return (
    <li className={classname.join(" ")}>
      <span className={styles.TrackName}>{track.name}</span>
      {selected && (
        <Lottie
          options={defaultOptions.current}
          width={40}
          height={14}
        />
      )}
      <span className={styles.TrackDuration}>{Duration.format(track.duration_ms)}</span>
    </li>
  );
};

TrackItem.propTypes = {
  track: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    duration_ms: PropTypes.number.isRequired,
  }).isRequired,
  selected: PropTypes.bool,
};

TrackItem.defaultProps = { selected: false };

export default TracksContainer;
