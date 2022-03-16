import { renderHook } from "@testing-library/react-hooks";

import {
  getDataFromHashString, isValidHashUrl, isValidSearchUrl, useSpotifyAuthData,
} from "../useSpotifyAuthData";

describe("useSpotifyAuthData", () => {
  it("should be a function", () => {
    expect(typeof useSpotifyAuthData).toBe("function");
  });

  it("should return error when error is passed in search for url", () => {
    jest.spyOn(window, "location", "get").mockImplementation(() => ({ search: "?error=access_denied", hash: "" }));

    const { result } = renderHook(() => useSpotifyAuthData(window.location));

    expect(typeof result.current.spotifyAuthData).toBe("object");
    expect(result.current.spotifyAuthData).toEqual({});
    expect(typeof result.current.error).toBe("string");
  });

  it("returns spotifyAuthData when hash is passed in", () => {
    jest.spyOn(window, "location", "get").mockImplementation(() => ({ search: "", hash: "#access_token=abc&token_type=Bearer&expires_in=3600" }));

    const { result } = renderHook(() => useSpotifyAuthData(window.location));

    expect(typeof result.current.spotifyAuthData).toBe("object");
    expect(result.current.spotifyAuthData).toEqual({
      access_token: "abc",
      token_type: "Bearer",
      expires_in: "3600",
    });
    expect(result.current.error).toBe(null);
  });

  it("returns error (Invalid URL) when the hash is not okey", () => {
    jest.spyOn(window, "location", "get").mockImplementation(() => ({ search: "", hash: "#invalid_hash=123" }));

    const { result } = renderHook(() => useSpotifyAuthData(window.location));

    expect(typeof result.current.spotifyAuthData).toBe("object");
    expect(result.current.spotifyAuthData).toEqual({});
    expect(typeof result.current.error).toBe("string");
  });

  it("returns error (Invalid URL) when the search string for error is not oket", () => {
    jest.spyOn(window, "location", "get").mockImplementation(() => ({ search: "?fail_error=access_denied", hash: "" }));

    const { result } = renderHook(() => useSpotifyAuthData(window.location));

    expect(typeof result.current.spotifyAuthData).toBe("object");
    expect(result.current.spotifyAuthData).toEqual({});
    expect(typeof result.current.error).toBe("string");
  });
});

describe("getDataFromHashString", () => {
  it("should be a function", () => {
    expect(typeof getDataFromHashString).toBe("function");
  });

  it("returns an object with the data from the hash string", () => {
    expect(getDataFromHashString("#access_token=abc&token_type=Bearer&expires_in=3600")).toEqual({
      access_token: "abc",
      token_type: "Bearer",
      expires_in: "3600",
    });
  });
});

describe("isValidSearchUrl", () => {
  it("should be a function", () => {
    expect(typeof isValidSearchUrl).toBe("function");
  });

  it("returns true when the search string is valid", () => {
    expect(isValidSearchUrl(new URLSearchParams("?error=access_denied"))).toBe(true);
  });

  it("returns false when the search string is not valid", () => {
    expect(isValidSearchUrl(new URLSearchParams("?invalid_error=invalid_error"))).toBe(false);
  });
});

describe("isValidHashUrl", () => {
  it("should be a function", () => {
    expect(typeof isValidHashUrl).toBe("function");
  });

  it("returns true when the hash is valid", () => {
    expect(isValidHashUrl({
      access_token: "abc",
      token_type: "Bearer",
      expires_in: "3600",
    })).toBe(true);
  });

  it("returns false when the hash is not valid (for missing param)", () => {
    expect(isValidHashUrl({
      access_token: "abc",
      token_type: "Bearer",
    })).toBe(false);
  });

  it("returns false when the hash is not valid (for more params than allowed)", () => {
    expect(isValidHashUrl({
      access_token: "abc",
      token_type: "Bearer",
      expires_in: "3600",
      invalid_param: "123",
    })).toBe(false);
  });

  it("returns false when the hash is not valid (for param not allowed)", () => {
    expect(isValidHashUrl({
      access_token: "abc",
      token_type: "Bearer",
      expires_in_invalid: "3600",
    })).toBe(false);
  });
});
