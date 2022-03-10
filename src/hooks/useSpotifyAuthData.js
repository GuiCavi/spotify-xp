import { useLocation } from "react-router-dom";

const ALLOWED_PROPS_IN_SPOTIFY_AUTH_DATA = ["access_token", "token_type", "expires_in"];

const getDataFromHashString = (hash) => Object.fromEntries(hash.slice(1).split("&").map((item) => item.split("=")));

const isValidSearchUrl = (params) => Array.from(params.entries()).length === 1 && params.has("error");

const isValidHashUrl = (spotifyAuthData) => Object.keys(spotifyAuthData).length === 3
  && ALLOWED_PROPS_IN_SPOTIFY_AUTH_DATA.every((key) => key in spotifyAuthData);

export const useSpotifyAuthData = () => {
  const location = useLocation();

  let error = null;
  let spotifyAuthData = {};

  if (location.search.length > 0) {
    const params = new URLSearchParams(location.search);

    error = isValidSearchUrl(params) ? params.get("error") : "Invalid URL";
  } else {
    spotifyAuthData = getDataFromHashString(location.hash);

    if (!isValidHashUrl(spotifyAuthData)) {
      error = "Invalid URL";
      spotifyAuthData = {};
    }
  }

  return { spotifyAuthData, error };
};
