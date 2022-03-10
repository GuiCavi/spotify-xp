import { renderHook } from "../../test/test-utils";
import { useSpotifyAuthData } from "../useSpotifyAuthData";

describe("useSpotifyAuthData", () => {
  it("should be a function", () => {
    expect(typeof useSpotifyAuthData).toBe("function");
  });

  it("should return an object", () => {
    jest.spyOn(window, "location", "get").mockImplementation(() => ({ search: "" }));

    const { result } = renderHook(() => useSpotifyAuthData());

    expect(typeof result.current).toBe("object");
    expect(typeof error).toBe("string");
  });
});
