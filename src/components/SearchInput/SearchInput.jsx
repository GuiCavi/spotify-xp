import PropTypes from "prop-types";
import React from "react";

const SearchInput = ({ value, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <label htmlFor="query-search" className="Text body">
      Busque por artistas, álbuns ou músicas
      <input type="text" name="query-search" placeholder="Busca..." value={value} onChange={handleChange} />
    </label>
  );
};

SearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchInput;
