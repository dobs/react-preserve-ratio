import * as React from 'react';
import { ResizableBox } from 'react-resizable';
import { PreserveRatio } from '../../dist';
import { resizableHeight, resizableWidth, SourceLink } from '../Common';

interface Rect {
  height: number;
  width: number;
}

export const ContentResizeExample = () => {
  const [contentResizeRect, setContentResizeRect] = React.useState<Rect>({
    width: 320,
    height: 240,
  });

  return (
    <section id="content-resize-example">
      <h2>
        Content Resizing Example <SourceLink name="ContentResize" />
      </h2>
      <p>
        Content is also automatically scaled when content dimensions change.{' '}
      </p>
      <div style={{ display: 'flex', margin: '4px 0', maxWidth: '640px' }}>
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
        <div style={{ flex: 1 }}></div>
        <input
          type="number"
          value={contentResizeRect.width}
          onChange={e =>
            setContentResizeRect({
              width: parseInt(e.target.value),
              height: contentResizeRect.height,
            })
          }
          max="999"
          min="1"
        />
        x
        <input
          type="number"
          value={contentResizeRect.height}
          onChange={e =>
            setContentResizeRect({
              width: contentResizeRect.width,
              height: parseInt(e.target.value),
            })
          }
          max="999"
          min="1"
        />
      </div>
      <ResizableBox width={resizableWidth} height={resizableHeight}>
        <PreserveRatio>
          <div
            style={{
              alignItems: 'center',
              backgroundColor: '#ddffdd',
              display: 'flex',
              height: `${contentResizeRect.height}px`,
              justifyContent: 'center',
              transition: 'width 200ms, height 200ms',
              width: `${contentResizeRect.width}px`,
            }}
          >
            Hello, world!
          </div>
        </PreserveRatio>
      </ResizableBox>
    </section>
  );
};
