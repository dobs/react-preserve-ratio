import * as React from 'react';
import { ResizableBox } from 'react-resizable';
import { PreserveRatio } from '../../dist';
import { resizableHeight, resizableWidth, SourceLink } from '../Common';

export const SafeModeExample = () => (
  <section id="safe-mode-example">
    <h2>
      Safe Mode Example <SourceLink name="SafeMode" />
    </h2>
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
      <a href="https://stackoverflow.com/questions/49384120/resizeobserver-loop-limit-exceeded">
        this StackOverflow thread
      </a>{' '}
      for more detail.
    </p>
    <ResizableBox width={resizableWidth} height={resizableHeight}>
      <PreserveRatio safeMode>
        <div
          style={{
            alignItems: 'center',
            backgroundColor: '#ddffdd',
            display: 'flex',
            height: '240px',
            justifyContent: 'center',
            width: '320px',
          }}
        >
          Hello, world!
        </div>
      </PreserveRatio>
    </ResizableBox>
  </section>
);
