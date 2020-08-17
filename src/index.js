import { useEffect, useRef, useState } from "react";
import throttle from "lodash.throttle";

// Drop in replacement for useState with deepMerge built in
// const [val, setVal] = useThrottledState(defaultValue, timeout, dispatchFunc)
// val and setVal update immediately locally, but do not push updates
// until dispatch runs
const useThrottledState = (defaultVal, timeout, dispatch) => {
  const [value, setValue] = useState(defaultVal);

  const throttledFunc = useRef(throttle(dispatch, timeout)).current;

  useEffect(() => {
    throttledFunc(value);
  }, [value]);
  return [value, setValue];
};

export default useThrottledState;
