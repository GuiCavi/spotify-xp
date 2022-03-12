import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import {
  HorizontalList, SearchCard, SearchInput,
} from "../components";
import { useDebounce } from "../hooks/useDebounce";
import {
  clearSearch,
  searchByQueryString, useAlbums, useSearchQuery, useTracks,
} from "../redux/slices/Search";

const Home = () => {
  const dispatch = useDispatch();
  const initialQueryString = useSearchQuery();
  const [queryString, setQueryString] = useState(initialQueryString);
  const debounceQueryString = useDebounce(queryString, 500);

  const albums = useAlbums(debounceQueryString);
  const tracks = useTracks(debounceQueryString);

  useEffect(() => {
    if (debounceQueryString.length > 0) {
      dispatch(searchByQueryString(debounceQueryString));
    } else if (initialQueryString.length > 0) {
      dispatch(clearSearch());
    }
  }, [debounceQueryString]);

  const resultsTest = debounceQueryString.length > 0
    ? `Resultados encontrados para "${debounceQueryString}"`
    : "Faça uma busca para aparecer os resultados";

  const searchResults = albums?.items.concat(tracks?.items);

  return (
    <>
      <SearchInput value={queryString} onChange={setQueryString} />

      <h3 className="Text heading">{resultsTest}</h3>

      <HorizontalList>
        {
          searchResults?.map((album) => (
            <SearchCard
              searchItem={album}
            />
          ))
        }
      </HorizontalList>
    </>
  );
};

export default Home;
