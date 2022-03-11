import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

import styles from "./SearchCard.module.scss";

const getImagesByType = (item) => {
  if (item.type === "album") {
    return item.images;
  }

  if (item.type === "track") {
    return item.album.images;
  }

  return [];
};

const SearchCard = ({ searchItem }) => {
  const images = getImagesByType(searchItem);

  const {
    id,
    name,
    type,
    artists,
  } = searchItem;

  const redirectTo = `/albums/${encodeURI(artists[0].name)}`;

  return (
    <div className={styles.SearchCard} key={id}>
      <Link to={redirectTo} state={searchItem}>
        <div className={styles.Cover}>
          <img src={images[0]?.url} alt={`${type} name ${name}`} />
        </div>
        <div className={styles.Info}>
          <span className={styles.Name}>{name}</span>
          <span className={styles.ArtistName}>{artists[0].name}</span>
        </div>
      </Link>
    </div>
  );
};

SearchCard.propTypes = {
  searchItem: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    artists: PropTypes.arrayOf(
      PropTypes.shape({ name: PropTypes.string.isRequired })
    ).isRequired,
    type: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({ url: PropTypes.string.isRequired })
    ).isRequired,
  }).isRequired,
};

export default SearchCard;
