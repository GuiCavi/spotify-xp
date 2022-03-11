import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import {
  Header, SearchCard, TracksContainer,
} from "../components";
import { clearTracks, getTracksByAlbumId } from "../redux/slices/Search";

import styles from "./styles/Album.module.scss";

const Album = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const album = location.state;

  useEffect(() => {
    dispatch(getTracksByAlbumId(album.id));

    return () => {
      dispatch(clearTracks());
    };
  }, []);

  return (
    <>
      <Header />

      <section className={styles.AlbumContent}>
        <aside className={styles.AlbumAside}>
          <SearchCard searchItem={album} />
        </aside>

        <TracksContainer />
      </section>
    </>
  );
};

export default Album;
