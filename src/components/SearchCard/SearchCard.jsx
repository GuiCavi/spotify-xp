import PropTypes from "prop-types";
import React from "react";

import styles from "./SearchCard.module.scss";

const SearchCard = ({ searchItem, images }) => (
  <div className={styles.SearchCard} key={searchItem.id}>
    <div className={styles.Cover}>
      <img src={images[0].url} alt={`${searchItem.type} name ${searchItem.name}`} />
    </div>
    <div className={styles.Info}>
      <span className={styles.Name}>{searchItem.name}</span>
      <span className={styles.ArtistName}>{searchItem.artists[0].name}</span>
    </div>
  </div>
);

SearchCard.propTypes = {
  searchItem: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    artists: PropTypes.arrayOf(
      PropTypes.shape({ name: PropTypes.string.isRequired })
    ).isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({ url: PropTypes.string.isRequired })
  ).isRequired,
};

export default SearchCard;
