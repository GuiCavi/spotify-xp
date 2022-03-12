/* eslint-disable jsx-a11y/media-has-caption */
import PropTypes from "prop-types";
import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import { useAudioController } from "../../hooks";
import {
  nextSong, useCurrentSong, useIsPlaying,
} from "../../redux/slices/Player";

import CurrentSongInfo from "./CurrentSongInfo";
import styles from "./Player.module.scss";
import PlayerController from "./PlayerController";

const Player = () => {
  const currentSong = useCurrentSong();

  if (!currentSong) {
    return null;
  }

  return (
    <div className={styles.PlayerContainer}>
      <CurrentSongInfo currentSong={currentSong} />

      <PlayerController currentSong={currentSong} />

      <AudioController currentSong={currentSong} />
    </div>
  );
};

const AudioController = ({ currentSong }) => {
  const audioController = useAudioController();
  const isPlaying = useIsPlaying();
  const firstRender = useRef(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isPlaying) {
      audioController.pause();
    } else {
      audioController.play();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (!firstRender.current) {
      audioController.next(currentSong.preview_url);
    }
  }, [currentSong]);

  useEffect(() => {
    const handleEndSong = () => {
      dispatch(nextSong());
    };

    if (audioController.audioRef.current) {
      audioController.audioRef.current.addEventListener("ended", handleEndSong);
    }

    return () => {
      audioController.audioRef.current.removeEventListener("ended", handleEndSong);
    };
  }, []);

  useEffect(() => {
    firstRender.current = false;
  }, []);

  return (
    <audio
      ref={audioController.audioRef}
      className={styles.AudioTag}
      src={currentSong.preview_url}
    />
  );
};

AudioController.propTypes = { currentSong: PropTypes.shape({ preview_url: PropTypes.string.isRequired }).isRequired };

export default Player;
