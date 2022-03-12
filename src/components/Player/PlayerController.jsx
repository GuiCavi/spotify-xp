import { useDispatch } from "react-redux";

import Previous from "../../assets/backward-step-solid.svg";
import Next from "../../assets/forward-step-solid.svg";
import Pause from "../../assets/pause-solid.svg";
import Play from "../../assets/play-solid.svg";
import {
  nextSong,
  pausePlaylist, playPlaylist, prevSong, useIsPlaying,
} from "../../redux/slices/Player";

import styles from "./Player.module.scss";
import PlayerButton from "./PlayerButton";

const changeSongMap = {
  next: nextSong,
  prev: prevSong,
};

const PlayerController = () => {
  const dispatch = useDispatch();
  const isPlaying = useIsPlaying();

  const handleChangeSong = (type) => {
    dispatch(changeSongMap[type]());
  };

  const handlePlayClick = () => {
    if (isPlaying) {
      dispatch(pausePlaylist());
    } else {
      dispatch(playPlaylist());
    }
  };

  return (
    <div className={styles.PlayerButtons}>
      <PlayerButton styleType="inverted" onClick={() => handleChangeSong("prev")}>
        <Previous className={styles.ActionButton} />
      </PlayerButton>

      <PlayerButton onClick={handlePlayClick}>
        {isPlaying ? (
          <Pause className={styles.ActionButton} />
        ) : (
          <Play className={styles.ActionButton} data-correct-position />
        )}
      </PlayerButton>

      <PlayerButton styleType="inverted" onClick={() => handleChangeSong("next")}>
        <Next className={styles.ActionButton} />
      </PlayerButton>
    </div>
  );
};

export default PlayerController;
