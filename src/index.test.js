import { waitFor } from "@testing-library/react"
import { act, renderHook } from "@testing-library/react-hooks"
import useThrottledState from "./"

describe("useThrottledState", () => {
  it("", async () => {
    const mockThrottledFunc = jest.fn()
    const { result } = renderHook(() =>
      useThrottledState("defaultValue", 500, mockThrottledFunc)
    )

    act(() => {
      result.current[1]("newValue")
      result.current[1]("newValue2")
    })

    // Test that we have most up-to-date value locally
    expect(result.current[0]).toBe("newValue2")

    // But our real setter has only been called once with the first value
    expect(mockThrottledFunc).toHaveBeenCalledWith("defaultValue")

    await waitFor(
      () => expect(mockThrottledFunc).toHaveBeenCalledWith("newValue2"),
      {
        timeout: 550,
      }
    )
  })
})
