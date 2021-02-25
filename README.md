# react-preserve-ratio

> A React component to preserve an element's ratio when scaling.

[![NPM](https://img.shields.io/npm/v/react-preserve-ratio.svg)](https://www.npmjs.com/package/react-preserve-ratio) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-preserve-ratio
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

* `maxScale` (optional number): The maximum scale for content relative to their real size.
* `maxHeight` (optional number): The maximum height of content, in pixels.
* `maxWidth` (optional number): The maximum width of content, in pixels.

## Examples

See the [Examples Page](https://dobs.github.io/react-preserve-ratio/).

## License

Apache-2.0 © [Daniel O'Brien](https://github.com/dobs)
