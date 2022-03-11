import PropTypes from "prop-types";
import React from "react";

import styles from "./AlbumCard.module.scss";

const AlbumCard = ({ album }) => (
  <div className={styles.AlbumCard} key={album.id}>
    <div className={styles.AlbumCover}>
      <img src={album.images[0].url} alt={`Album name ${album.name}`} />
    </div>
    <div className={styles.AlbumInfo}>
      <span className={styles.AlbumName}>{album.name}</span>
      <span className={styles.ArtistName}>{album.artists[0].name}</span>
    </div>
  </div>
);

AlbumCard.propTypes = {
  album: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    artists: PropTypes.arrayOf(
      PropTypes.shape({ name: PropTypes.string.isRequired })
    ).isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({ url: PropTypes.string.isRequired })
    ).isRequired,
  }).isRequired,
};

export default AlbumCard;
