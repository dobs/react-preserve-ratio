import * as React from 'react';
import { ResizableBox } from 'react-resizable';
import { PreserveRatio, PreserveScale } from '../../dist';
import { resizableHeight, resizableWidth, SourceLink } from '../Common';

export const PreserveScaleExample = () => (
  <section id="preserve-scale-example">
    <h2>
      Preserving Scale Example <SourceLink name="PreserveScale" />
    </h2>
    <p>
      <code>PreserveScale</code> reverses the effect of{' '}
      <code>PreserveRatio</code>, allowing child elements to maintain their size
      regardless of the scale of <code>PreserveRatio</code>. An example use case
      might be a watermark or disclaimer tucked into the corner of a
      presentation slide where you want it legible but discrete.
    </p>
    <ResizableBox width={resizableWidth} height={resizableHeight}>
      <PreserveRatio>
        <div
          style={{
            alignItems: 'center',
            backgroundColor: '#ddffdd',
            display: 'flex',
            height: '240px',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            width: '320px',
          }}
        >
          Hello, world!
          <div
            style={{
              bottom: 0,
              position: 'absolute',
              right: 0,
            }}
          >
            <PreserveScale align="right" valign="bottom">
              <div
                style={{
                  fontSize: '16px',
                  padding: '0 4px',
                }}
              >
                Bottom-Right
              </div>
            </PreserveScale>
          </div>
          <div
            style={{
              left: 0,
              position: 'absolute',
              top: 0,
            }}
          >
            <PreserveScale align="left" valign="top">
              <div
                style={{
                  fontSize: '16px',
                  padding: '0 4px',
                }}
              >
                Top-Left
              </div>
            </PreserveScale>
          </div>
        </div>
      </PreserveRatio>
    </ResizableBox>
  </section>
);
