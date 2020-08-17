import { useEffect, useRef, useState } from "react"
import throttle from "lodash.throttle"

const useThrottledState = (defaultVal, throttleRate, dispatch) => {
  const [value, setValue] = useState(defaultVal)

  const throttledFunc = useRef(throttle(dispatch, throttleRate)).current

  useEffect(() => {
    throttledFunc(value)
  }, [value])

  return [value, setValue]
}

export default useThrottledState
