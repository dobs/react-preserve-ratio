# react-preserve-ratio

> A React component to preserve an element's ratio when scaling.

For example, how slideshow slides automatically scale to fit a window or screen without distorting. See the [interactive examples](https://dobs.github.io/react-preserve-ratio/) for a demo!

[![NPM](https://img.shields.io/npm/v/react-preserve-ratio.svg)](https://www.npmjs.com/package/react-preserve-ratio) [![CI](https://github.com/dobs/react-preserve-ratio/actions/workflows/main.yml/badge.svg)](https://github.com/dobs/react-preserve-ratio/actions/workflows/main.yml) [![Github Pages](https://github.com/dobs/react-preserve-ratio/actions/workflows/github-pages.yml/badge.svg)](https://dobs.github.io/react-preserve-ratio/)

![Visualization of react-preserve-ratio](/banner.svg)

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
import { PreserveRatio } from 'react-preserve-ratio';

export const Example = () => {
  <div
    style={{
      border: '1px dotted rgba(0, 0, 0, 0.2)',
      display: 'block',
      overflow: 'hidden',
      resize: 'both',
      width: '640px',
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
          justifyContent: 'center',
        }}
      >
        Hello, world!
      </div>
    </PreserveRatio>
  </div>
}
```

## Props

### Constraints

- `maxScale` (optional number): The maximum scale for content relative to their real size.
- `maxHeight` (optional number): The maximum height of content, in pixels.
- `maxWidth` (optional number): The maximum width of content, in pixels.

`minScale`, `minHeight` and `minWidth` aren't currently supported in favor of having users control the `min-height` and `min-width` on the `PreserveRatio`'s container instead. This is largely due to how potentially tricky overflow cases can be and less-clear use cases.

### Alignment

- `align` (optional string, default: `center`): Horizontal alignment, `center`, `left` or `right`.
- `valign` (optional string, default: `center`): Vertical alignment, `center`, `top` or `bottom`.
- `cover` (optional boolean, default: `false`): Have content "cover" rather than be "contained".

### Tweaks

Dynamic scaling comes with some visual and performance quirks, and these props aim to help work around them.

- `hint` (optional bool): Slightly increases the bleed between content and container. This ensures edge-to-edge coverage at the cost of having some overhang. Useful when there's high contrast between content and container that would be noticeable otherwise.
- `safeMode` (optional bool): Attempt to reduce non-user-impacting `ResizeObserver` errors at the cost of latency (See: [StackOverflow](https://stackoverflow.com/questions/49384120/resizeobserver-loop-limit-exceeded))

## Context

Currently there's only one context attribute:

- `scale` (number): The content scale, e.g. `1` when at 100% scale, `2` when at 200% scale, etc.

For convenience components can access it via the `useScale` hook:

```tsx
import React from 'react';
import { PreserveRatio, useScale } from 'react-preserve-ratio';

function DisplayScale() {
  const scale = useScale();
  return <div>{scale}</div>;
}

function Example() {
  return (
    <PreserveRatio>
      <DisplayScale />
    </PreserveRatio>
  );
}
```

But it's also available via `PreserveRatioContext` if preferred:

```tsx
import React from 'react';
import { PreserveRatio, PreserveRatioContext } from 'react-preserve-ratio';

function DisplayScale() {
  const { scale } = useContext(PreserveRatioContext);
  return <div>{scale}</div>;
}

// ...
```

## Preserving Scale

Occasionally you may want a child component to preserve its scale independent of the `PreserveRatio` component it lives under -- for such cases there's a `PreserveScale` component that does exactly that.

Like `PreserveRatio` it accepts `align` and `valign` attributes. Unlike `PreserveRatio` it's hard to provide good defaults, so you'll probably want to set them explicitly.

Example:

```tsx
<PreserveRatio>
  <div
    style={{
      alignItems: 'center',
      display: 'flex',
      height: '240px',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      width: '320px',
    }}
  >
    ... Scaling Content ...
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        right: 0,
      }}
    >
      <PreserveScale align="right" valign="bottom">
        Disclaimer: Bottom-Right.
      </PreserveScale>
    </div>
  </div>
</PreserveRatio>
```

## Examples

See the [Examples Page](https://dobs.github.io/react-preserve-ratio/).

## License

Apache-2.0 © [Daniel O'Brien](https://github.com/dobs)
