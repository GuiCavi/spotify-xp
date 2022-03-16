const ALLOWED_PROPS_IN_SPOTIFY_AUTH_DATA = ["access_token", "token_type", "expires_in"];

export const getDataFromHashString = (hash) => Object.fromEntries(hash.slice(1).split("&").map((item) => item.split("=")));

export const isValidSearchUrl = (params) => Array.from(params.entries()).length === 1 && params.has("error");

export const isValidHashUrl = (spotifyAuthData) => Object.keys(spotifyAuthData).length === 3
  && ALLOWED_PROPS_IN_SPOTIFY_AUTH_DATA.every((key) => key in spotifyAuthData);

export const useSpotifyAuthData = (location) => {
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
