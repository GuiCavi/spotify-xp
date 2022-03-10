import { useDispatch } from "react-redux";

import { setToken } from "../redux/slices/Auth";

const getDataFromHashString = (hash) => Object.fromEntries(hash.slice(1).split("&").map((item) => item.split("=")));

const ALLOWED_PROPS_IN_SPOTIFY_AUTH_DATA = ["access_token", "token_type", "expires_in"];
const isValidSearchUrl = (params) => Array.from(params.entries()).length === 1 && params.has("error");
const isValidHashUrl = (spotifyAuthData) => Object.keys(spotifyAuthData).length === 3
  && ALLOWED_PROPS_IN_SPOTIFY_AUTH_DATA.every((key) => key in spotifyAuthData);

export const useSpotifyAuthData = () => {
  const dispatch = useDispatch();
  const url = new URL(window.location.href);
  let error = null;
  let spotifyAuthData = {};

  if (url.search.length > 0) {
    const params = new URLSearchParams(url.search);

    if (isValidSearchUrl(params)) {
      error = params.get("error");
    } else {
      error = "Invalid URL";
    }
  } else {
    spotifyAuthData = getDataFromHashString(url.hash);

    if (isValidHashUrl(spotifyAuthData)) {
      localStorage.setItem("token", spotifyAuthData.access_token);
      dispatch(setToken(spotifyAuthData.access_token));
    } else {
      error = "Invalid URL";
      spotifyAuthData = {};
    }
  }

  return { spotifyAuthData, error };
};
