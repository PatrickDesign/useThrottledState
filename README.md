# use-throttled-state

> Drop-in replacement for &#x60;useState&#x60; with throttling capabilities. Access
> local state immediately while dispatching data to worker functions at a throttled rate.

[![NPM](https://img.shields.io/npm/v/use-throttled-state.svg)](https://www.npmjs.com/package/use-throttled-state) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-throttled-state
```

## Usage

`useThrottledState` allows you to easily work with data locally while dispatching any updates to a worker function in the background. The worker function is only called once per `throttleRate` time interval.

Here is a quick writeup with examples [](MEDIUM ARTICLE LINK HERE).

Interface:

```js
import useThrottledState from "use-throttled-state"

const [value, setValue] = useThrottledState(
  initialValue,
  throttleRate, // In milliseconds
  workerFunction
)
```

Example with 500 ms `throttleRate`:
![`useThrottledState` example with 500 ms throttleRate](https://snap.anedot.com/patrick.wees/screencast_2020-08-16_23-53-25.gif)

vs. 2500 ms `throttleRate`:
![`useThrottledState` example with 2500 ms throttleRate](https://snap.anedot.com/patrick.wees/screencast_2020-08-16_23-54-04.gif)

```jsx
import React from "react"
import useThrottledState from "use-throttled-state"

const doWork = (query) => {
  //... do expensive work with the query ...
  db.query(query)
}

const Example = () => {
  const [searchQuery, setSearchQuery] = useThrottledState("", 550, doWork)

  return (
    <>
      <input
        id="query"
        onChange={(event) => {
          setSearchQuery(event.target.value)
        }}
        value={searchQuery}
      />
      <div>Local data: {searchQuery}</div>
    </>
  )
}
```

A common scenario is wanting to limit the number of context updates that occur as a user types. This setup might look like:

```js
import useThrottledState from "use-throttled-state"

...

const { setValueFromContext, valueFromContext } = useContext(SomeContext)

const [localValue, setLocalValue] = useThrottledState(
  valueFromContext,
  500,
  (newValue) => {
    setValueFromContext(newValue)
  }
)
```

## License

MIT © [@patrickDesign](https://github.com/@patrickDesign)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
