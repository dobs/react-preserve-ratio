import React, { useState } from 'react'
import * as PropTypes from 'prop-types'

import { PreserveRatio } from 'react-preserve-ratio'

interface Rect {
  height: number
  width: number
}

interface Alignment {
  align: string
  valign: string
}

function ResizableContainer({
  children
}: PropTypes.InferProps<typeof ResizableContainer.propTypes>) {
  return (
    <div
      style={{
        border: '1px dotted rgba(0, 0, 0, 0.2)',
        display: 'block',
        height: '240px',
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
  const [alignment, setAlignment] = useState<Alignment>({
    align: 'center',
    valign: 'center'
  })
  const [contentResizeRect, setContentResizeRect] = useState<Rect>({
    width: 320,
    height: 240
  })

  return (
    <div
      style={{
        margin: '1em'
      }}
    >
      <h1>Examples: react-preserve-scale</h1>
      <h2>Basic Example</h2>
      <p>
        Try resizing the box below and notice how content automatically scales
        while maintaining its ratio.
      </p>
      <ResizableContainer>
        <PreserveRatio>
          <div
            style={{
              alignItems: 'center',
              backgroundColor: '#ffffdd',
              display: 'flex',
              height: '240px',
              justifyContent: 'center',
              width: '320px'
            }}
          >
            Hello, world!
          </div>
        </PreserveRatio>
      </ResizableContainer>

      <h2>Constraints Example</h2>
      <p>
        This time the <code>maxScale</code> option is set to <code>2</code>,
        limiting content to 2x its initial scale.
      </p>
      <ResizableContainer>
        <PreserveRatio maxScale={2}>
          <div
            style={{
              alignItems: 'center',
              backgroundColor: '#ffffdd',
              display: 'flex',
              height: '240px',
              justifyContent: 'center',
              width: '320px'
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
        <code>min-width</code> and <code>min-height</code> on the container.
      </p>

      <h2>Content Resizing Example</h2>
      <p>
        Content is also automatically scaled when content dimensions change.
      </p>
      <p>
        <button
          onClick={() => setContentResizeRect({ width: 320, height: 240 })}
        >
          Default
        </button>
        <button
          onClick={() => setContentResizeRect({ width: 480, height: 240 })}
        >
          Wide
        </button>
        <button
          onClick={() => setContentResizeRect({ width: 240, height: 320 })}
        >
          Tall
        </button>
        |
        <input
          type='number'
          max='999'
          min='1'
          value={contentResizeRect.width}
          onChange={(e) =>
            setContentResizeRect({
              width: parseInt(e.target.value),
              height: contentResizeRect.height
            })
          }
        />
        x
        <input
          type='number'
          max='999'
          min='1'
          value={contentResizeRect.height}
          onChange={(e) =>
            setContentResizeRect({
              width: contentResizeRect.width,
              height: parseInt(e.target.value)
            })
          }
        />
      </p>
      <ResizableContainer>
        <PreserveRatio>
          <div
            style={{
              alignItems: 'center',
              backgroundColor: '#ffffdd',
              display: 'flex',
              height: `${contentResizeRect.height}px`,
              justifyContent: 'center',
              transition: 'width 200ms, height 200ms',
              width: `${contentResizeRect.width}px`
            }}
          >
            Hello, world!
          </div>
        </PreserveRatio>
      </ResizableContainer>

      <h2>Alignment Example</h2>
      <p>
        Components also support horizontal and vertical alignment via{' '}
        <code>align</code> and <code>valign</code> respectively.
      </p>
      <p>
        <button
          className='arrow-button'
          onClick={() => setAlignment({ align: 'left', valign: 'top' })}
        >
          ↖️
        </button>
        <button
          className='arrow-button'
          onClick={() => setAlignment({ align: 'center', valign: 'top' })}
        >
          ⬆️
        </button>
        <button
          className='arrow-button'
          onClick={() => setAlignment({ align: 'right', valign: 'top' })}
        >
          ↗️
        </button>
        <br />
        <button
          className='arrow-button'
          onClick={() => setAlignment({ align: 'left', valign: 'center' })}
        >
          ⬅️
        </button>
        <button
          className='arrow-button'
          onClick={() => setAlignment({ align: 'center', valign: 'center' })}
        >
          ⏺
        </button>
        <button
          className='arrow-button'
          onClick={() => setAlignment({ align: 'right', valign: 'center' })}
        >
          ➡️
        </button>
        <br />
        <button
          className='arrow-button'
          onClick={() => setAlignment({ align: 'left', valign: 'bottom' })}
        >
          ↙️
        </button>
        <button
          className='arrow-button'
          onClick={() => setAlignment({ align: 'center', valign: 'bottom' })}
        >
          ⬇️
        </button>
        <button
          className='arrow-button'
          onClick={() => setAlignment({ align: 'right', valign: 'bottom' })}
        >
          ↘️
        </button>
      </p>

      <ResizableContainer>
        <PreserveRatio align={alignment.align} valign={alignment.valign}>
          <div
            style={{
              alignItems: 'center',
              backgroundColor: '#ffffdd',
              display: 'flex',
              height: `${contentResizeRect.height}px`,
              justifyContent: 'center',
              transition: 'width 200ms, height 200ms',
              width: `${contentResizeRect.width}px`
            }}
          >
            Hello, world!
          </div>
        </PreserveRatio>
      </ResizableContainer>

      <h2>Safe Mode Example</h2>
      <p>
        If elements are resized too quickly it can result in non-user-impacting
        errors. Where this could become a problem is if you're using a frontend
        error tracking service it could create a lot of noise.
      </p>
      <p>
        To help mitigate, there's a <code>safeMode</code> prop that introduces a
        small amount of user-visible latency but in an attempt to reduce these
        errors.
      </p>
      <p>
        See{' '}
        <a href='https://stackoverflow.com/questions/49384120/resizeobserver-loop-limit-exceeded'>
          this StackOverflow thread
        </a>{' '}
        for more detail.
      </p>
      <ResizableContainer>
        <PreserveRatio safeMode>
          <div
            style={{
              alignItems: 'center',
              backgroundColor: '#ffffdd',
              display: 'flex',
              height: '240px',
              justifyContent: 'center',
              width: '320px'
            }}
          >
            Hello, world!
          </div>
        </PreserveRatio>
      </ResizableContainer>

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
          height: 'calc(100vh - 2em)',
          width: '100%'
        }}
      >
        <PreserveRatio>
          <div
            style={{
              alignItems: 'center',
              backgroundColor: '#ffffdd',
              display: 'flex',
              height: '240px',
              justifyContent: 'center',
              width: '320px'
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
