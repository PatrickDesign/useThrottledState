# use-throttled-state

> Drop-in replacement for &#x60;useState&#x60; with throttling capabilities.

[![NPM](https://img.shields.io/npm/v/use-throttled-state.svg)](https://www.npmjs.com/package/use-throttled-state) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-throttled-state
```

## Usage

```jsx
import React, { Component } from 'react'

import { useMyHook } from 'use-throttled-state'

const Example = () => {
  const example = useMyHook()
  return (
    <div>{example}</div>
  )
}
```

## License

MIT © [@patrickDesign](https://github.com/@patrickDesign)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
