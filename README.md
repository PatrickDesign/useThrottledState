# use-throttled-state

> Drop-in replacement for &#x60;useState&#x60; with throttling capabilities. Access
> local state immediately while dispatching data to worker functions at a throttled pace.

[![NPM](https://img.shields.io/npm/v/use-throttled-state.svg)](https://www.npmjs.com/package/use-throttled-state) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-throttled-state
```

## Usage

```jsx
import React from "react";

import useThrottledState from "use-throttled-state";

const doWork = (query) => {
  //... do expensive work with the query ...
  db.query(query);
};

const Example = () => {
  const [searchQuery, setSearchQuery] = useThrottledState("", 550, doWork);

  return (
    <>
      <input
        id="query"
        onChange={(event) => {
          setSearchQuery(event.target.value);
        }}
        value={searchQuery}
      />
      <div>Local data: {searchQuery}</div>
    </>
  );
};
```

## License

MIT © [@patrickDesign](https://github.com/@patrickDesign)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
