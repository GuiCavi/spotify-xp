import PropTypes from "prop-types";

import { Duration } from "../../data/usecases/Duration";
import { useSelectedAlbumTracks } from "../../redux/slices/Search";

import styles from "./TracksContainer.module.scss";

const TracksContainer = () => {
  const tracks = useSelectedAlbumTracks();

  if (!tracks) {
    return <span>Carregando...</span>;
  }

  return (
    <ul className={styles.AlbumTracks}>
      {
        tracks.items.map((track) => (
          <TrackItem key={track.id} track={track} />
        ))
      }
    </ul>
  );
};

const TrackItem = ({ track }) => (
  <li>
    <span className={styles.TrackName}>{track.name}</span>
    <span className={styles.TrackDuration}>{Duration.format(track.duration_ms)}</span>
  </li>
);

TrackItem.propTypes = {
  track: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    duration_ms: PropTypes.number.isRequired,
  }).isRequired,
};

export default TracksContainer;
