import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

import { Token } from "../../data/usecases/Token";
import requester from "../../infra/http/Requester";

import { logoutAsync } from "./Auth";

const SearchSlice = createSlice({
  name: "search",
  initialState: {
    searchResults: [],
    searchQuery: "",
    searchError: null,
    searchLoading: false,
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
    clearSearch: (state) => {
      state.searchResults = [];
      state.searchQuery = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchByQueryString.pending, (state) => {
        state.searchLoading = true;
      })
      .addCase(searchByQueryString.fulfilled, (state, action) => {
        state.searchLoading = false;
        state.searchResults = action.payload;
      });
  },
});

export const {
  setSearchQuery, setSearchResults, clearSearch,
} = SearchSlice.actions;

export default SearchSlice.reducer;

export const useSearchResults = () => useSelector((state) => state.search.searchResults);
export const useSearchLoading = () => useSelector((state) => state.search.searchLoading);
export const useAlbums = () => useSelector((state) => state.search.searchResults.albums);
export const useTracks = () => useSelector((state) => state.search.searchResults.tracks);

export const searchByQueryString = createAsyncThunk(
  "search/searchByQueryString",
  async (query, { dispatch, getState }) => {
    const { searchQuery } = getState().search;
    const { expiresIn, loginAt } = getState().auth;

    const token = new Token(expiresIn, loginAt);

    if (token.isTokenExpired()) {
      dispatch(logoutAsync());
      return {};
    }

    if (query === searchQuery) {
      return {};
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
