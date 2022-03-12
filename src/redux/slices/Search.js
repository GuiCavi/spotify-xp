import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

import { Token } from "../../data/usecases/Token";
import requester from "../../infra/http/Requester";

import { logoutAsync } from "./Auth";

const SearchSlice = createSlice({
  name: "search",
  initialState: {
    searchResults: {},
    searchQuery: "",
    searchError: null,
    searchLoading: false,
    selectedAlbumTracks: null,
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
    setSelectedAlbumTracks: (state, action) => {
      state.selectedAlbumTracks = { items: [action.payload] };
    },
    clearSearch: (state) => {
      state.searchQuery = "";
    },
    clearTracks: (state) => {
      state.selectedAlbumTracks = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchByQueryString.pending, (state) => {
        state.searchLoading = true;
      })
      .addCase(searchByQueryString.fulfilled, (state, action) => {
        state.searchLoading = false;
        state.searchResults = {
          ...state.searchResults,
          [state.searchQuery]: action.payload,
        };
      })
      .addCase(getTracksByAlbumId.pending, (state) => {
        state.searchLoading = true;
      })
      .addCase(getTracksByAlbumId.fulfilled, (state, action) => {
        state.searchLoading = false;
        state.selectedAlbumTracks = action.payload;
      });
  },
});

export const {
  setSearchQuery, setSearchResults, clearSearch, clearTracks, setSelectedAlbumTracks,
} = SearchSlice.actions;

export default SearchSlice.reducer;

export const useSearchResults = () => useSelector((state) => state.search.searchResults);
export const useSearchLoading = () => useSelector((state) => state.search.searchLoading);
export const useAlbums = (query) => useSelector(
  (state) => state.search.searchResults[query]?.albums
);
export const useTracks = (query) => useSelector(
  (state) => state.search.searchResults[query]?.tracks
);
export const useSelectedAlbumTracks = () => useSelector(
  (state) => state.search.selectedAlbumTracks
);
export const useSearchQuery = () => useSelector((state) => state.search.searchQuery);

export const searchByQueryString = createAsyncThunk(
  "search/searchByQueryString",
  async (query, { dispatch, getState }) => {
    const { searchResults } = getState().search;
    const { expiresIn, loginAt } = getState().auth;

    const token = new Token(expiresIn, loginAt);

    if (token.isTokenExpired()) {
      dispatch(logoutAsync());
      return {};
    }

    if (searchResults[query]) {
      return searchResults[query];
    }

    dispatch(setSearchQuery(query));
    const params = new URLSearchParams();
    params.append("q", query);
    params.append("type", "album,track");
    params.append("market", "BR");
    params.append("limit", "5");

    const response = await requester.get("/search", params);

    return response.data;
  }
);

export const getTracksByAlbumId = createAsyncThunk(
  "search/getTracksByAlbumId",
  async (albumId, { dispatch, getState }) => {
    const { expiresIn, loginAt } = getState().auth;

    const token = new Token(expiresIn, loginAt);

    if (token.isTokenExpired()) {
      dispatch(logoutAsync());
      return {};
    }

    const params = new URLSearchParams();
    params.append("market", "BR");

    const response = await requester.get(`/albums/${albumId}/tracks`, params);

    return response.data;
  }
);
