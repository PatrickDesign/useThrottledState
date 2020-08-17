import { waitFor } from "@testing-library/react";
import { act, renderHook } from "@testing-library/react-hooks";
import useThrottledState from "./";

describe("useThrottledState", () => {
  it("", async () => {
    const mockThrottledFunc = jest.fn();
    const { result } = renderHook(() =>
      useThrottledState(
        {
          data: "defaultValue",
        },
        500,
        mockThrottledFunc
      )
    );

    act(() => {
      result.current[1]({ data: "newValue" });
      result.current[1]({ data: "newValue2" });
    });

    //Test that we have most up-to-date value locally
    expect(result.current[0].data).toBe("newValue2");

    //but our real setter has only been called once...
    expect(mockThrottledFunc).toHaveBeenCalledTimes(1);

    await waitFor(() => expect(mockThrottledFunc).toHaveBeenCalledTimes(2), {
      timeout: 550,
    });
  });
});
