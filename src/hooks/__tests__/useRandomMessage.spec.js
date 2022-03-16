import { renderHook } from "@testing-library/react-hooks";

import { sleep } from "../../test/test-utils";
import { useRandomMessage } from "../useRandomMessage";

describe("useRandomMessasge", () => {
  it("should return the initial value", async () => {
    const { result } = renderHook(() => useRandomMessage());

    await sleep(400);

    expect(typeof result.current).toBe("string");
  });

  it("should return a random message and after return the next message", async () => {
    const textMap = ["Hello", "World"];
    const delay = 500;
    jest.spyOn(Math, "random").mockReturnValue(0.5);

    const { result, waitForNextUpdate } = renderHook(() => useRandomMessage(textMap, delay));

    expect(result.current).toBe("World");

    await waitForNextUpdate({ timeout: delay + 100 });

    expect(result.current).toBe("Hello");
  });
});
