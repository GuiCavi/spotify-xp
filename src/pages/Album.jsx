import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import {
  Button,
  Header, SearchCard, TracksContainer,
} from "../components";
import { setPlaylist } from "../redux/slices/Player";
import {
  clearTracks, getTracksByAlbumId, useSelectedAlbumTracks,
} from "../redux/slices/Search";

import styles from "./styles/Album.module.scss";

const Album = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const tracks = useSelectedAlbumTracks();

  const album = location.state;

  useEffect(() => {
    dispatch(getTracksByAlbumId(album.id));

    return () => {
      dispatch(clearTracks());
    };
  }, []);

  const handlePlayAlbum = () => {
    dispatch(setPlaylist(tracks.items));
  };

  return (
    <>
      <Header />

      <section className={styles.AlbumContent}>
        <aside className={styles.AlbumAside}>
          <SearchCard searchItem={album} />
          <Button className={styles.Button} onClick={handlePlayAlbum}>Tocar álbum</Button>
        </aside>

        <TracksContainer tracks={tracks} />
      </section>
    </>
  );
};

export default Album;
