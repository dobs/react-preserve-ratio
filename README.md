# react-preserve-ratio

> A React component to preserve an element's ratio when scaling.

[![NPM](https://img.shields.io/npm/v/react-preserve-ratio.svg)](https://www.npmjs.com/package/react-preserve-ratio) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-preserve-ratio
```

Or for yarn:

```bash
yarn add react-preserve-ratio
```

## Usage

```tsx
import React, { Component } from 'react'

import { PreserveRatio } from 'react-preserve-ratio'

class Example extends Component {
  render() {
    return (
      <div
        style={{
          border: '1px dotted rgba(0, 0, 0, 0.2)',
          display: 'block',
          overflow: 'hidden',
          resize: 'both',
          width: '640px'
        }}
      >
        <PreserveRatio>
          <div
            style={{
              backgroundColor: '#ffffdd',
              display: 'flex',
              width: '320px',
              height: '240px',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            Hello, world!
          </div>
        </PreserveRatio>
      </div>
    )
  }
}
```

## Props

### Constraints

* `maxScale` (optional number): The maximum scale for content relative to their real size.
* `maxHeight` (optional number): The maximum height of content, in pixels.
* `maxWidth` (optional number): The maximum width of content, in pixels.

`minScale`, `minHeight` and `minWidth` aren't currently supported in favor of having users control the `min-height` and `min-width` on the `PreserveRatio`'s container instead. This is largely due to how potentially tricky overflow cases can be and less-clear use cases.

### Alignment

* `align` (optional string): Horizontal alignment, `center`, `left` or `right` (default: `center`).
* `valign` (optional string): Vertical alignment, `center`, `top` or `bottom` (default: `center`).

### Safety

* `safeMode` (optional bool): Attempt to reduce non-user-impacting `ResizeObserver` errors at the cost of latency (See: [StackOverflow](https://stackoverflow.com/questions/49384120/resizeobserver-loop-limit-exceeded))


## Examples

See the [Examples Page](https://dobs.github.io/react-preserve-ratio/).

## License

Apache-2.0 © [Daniel O'Brien](https://github.com/dobs)
