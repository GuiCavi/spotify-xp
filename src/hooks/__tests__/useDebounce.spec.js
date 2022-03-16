import { renderHook } from "@testing-library/react-hooks";

import { sleep } from "../../test/test-utils";
import { useDebounce } from "../useDebounce";

describe("useDebounce", () => {
  it("should return the initial value", async () => {
    const { result } = renderHook(() => useDebounce(1));

    await sleep(400);

    expect(result.current).toBe(1);
  });
});
