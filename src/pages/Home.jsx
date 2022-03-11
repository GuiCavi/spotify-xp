import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import {
  HorizontalList, SearchCard, SearchInput,
} from "../components";
import { useDebounce } from "../hooks/useDebounce";
import {
  clearSearch,
  searchByQueryString, useAlbums, useTracks,
} from "../redux/slices/Search";

import styles from "./styles/Home.module.scss";

const Home = () => {
  const dispatch = useDispatch();
  const [queryString, setQueryString] = useState("");
  const debounceQueryString = useDebounce(queryString, 500);

  const albums = useAlbums();
  const tracks = useTracks();

  useEffect(() => {
    if (debounceQueryString.length > 0) {
      dispatch(searchByQueryString(debounceQueryString));
    } else {
      dispatch(clearSearch());
    }
  }, [debounceQueryString]);

  const resultsTest = debounceQueryString.length > 0
    ? `Resultados encontrados para "${debounceQueryString}"`
    : "Álbuns buscados recentemente";

  return (
    <div className={styles.Container}>
      <main className={styles.MainContent}>
        <SearchInput value={queryString} onChange={setQueryString} />

        <h3 className="Text heading">{resultsTest}</h3>

        <HorizontalList>
          {
            albums?.items.concat(tracks?.items).map((album) => (
              <SearchCard searchItem={album} />
            ))
          }
        </HorizontalList>
      </main>
    </div>
  );
};

export default Home;
