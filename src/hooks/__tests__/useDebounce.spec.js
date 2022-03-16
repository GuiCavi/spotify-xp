import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-test-renderer";

import { useDebounce } from "../useDebounce";

const sleep = (ms = 500) => new Promise((resolve) => setTimeout(resolve, ms));

describe("useDebounce", () => {
  it("should return the initial value", async () => {
    const { result } = renderHook(() => useDebounce(1));

    await sleep(400);

    expect(result.current).toBe(1);
  });
});
