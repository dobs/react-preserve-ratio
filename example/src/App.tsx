import React from 'react'
import * as PropTypes from 'prop-types'

import { PreserveRatio } from 'react-preserve-ratio'

function ResizableContainer({
  children
}: PropTypes.InferProps<typeof ResizableContainer.propTypes>) {
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
      {children}
    </div>
  )
}

ResizableContainer.propTypes = {
  children: PropTypes.node.isRequired
}

const App = () => {
  return (
    <div
      style={{
        margin: '1em'
      }}
    >
      <h1>Examples: react-preserve-scale</h1>
      <h2>Basic Example</h2>
      <p>
        Try resizing the box below and notice how the inner box automatically
        scales while maintaining its ratio.
      </p>
      <ResizableContainer>
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
      </ResizableContainer>

      <h2>Constraints Example</h2>
      <p>
        This time the <code>maxScale</code> option is set to <code>2</code>,
        limiting the inner box to 2x its initial scale.
      </p>
      <ResizableContainer>
        <PreserveRatio maxScale={2}>
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
      </ResizableContainer>
      <p>There are a few different constraint options:</p>
      <ul>
        <li>
          <code>maxScale</code>: A number indicating the maximum scale for
          content relative to their real size.
        </li>
        <li>
          <code>maxHeight</code>: A number indicating the maximum height of
          content, in pixels.
        </li>
        <li>
          <code>maxWidth</code>: A number indicating the maximum width of
          content, in pixels.
        </li>
      </ul>
      <p>
        Minimum constraints are more container-dependent an so aren't currently
        covered by the component in favour of letting users specify their own{' '}
        <code>min-width</code> and <code>min-height</code>.
      </p>

      <h2>Window Scaling Example</h2>
      <p>
        A typical use case is having content scale to fill the current window,
        for example when displaying a slide as part of a slide show.
      </p>
      <p>
        The box below should scale to match the window size. Try resizing your
        window (or rotating your device) and see how the inner content scales to
        fit.
      </p>
      <div
        style={{
          border: '1px dotted rgba(0, 0, 0, 0.2)',
          width: '100%',
          height: 'calc(100vh - 2em)'
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
    </div>
  )
}

export default App
