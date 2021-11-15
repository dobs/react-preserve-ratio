import * as React from 'react';
import { ResizableBox } from 'react-resizable';
import { PreserveRatio, useScale } from '../../dist';
import { resizableHeight, resizableWidth, SourceLink } from '../Common';

const ContextContent = () => {
  const scale = useScale();

  return (
    <div
      style={{
        alignItems: 'center',
        backgroundColor: '#ddffdd',
        display: 'flex',
        fontSize: '4em',
        height: '240px',
        justifyContent: 'center',
        width: '320px',
        transition: 'background 200ms',
      }}
    >
      {new Intl.NumberFormat('en-US', { maximumSignificantDigits: 2 }).format(
        scale
      )}
    </div>
  );
};

export const ContextExample = () => (
  <section id="context-example">
    <h2>
      Context Example <SourceLink name="Context" />
    </h2>
    <p>
      <code>PreserveRatioContext</code> or the <code>useScale</code> hook are
      available for child components that care about the current scale.
    </p>
    <ResizableBox width={resizableWidth} height={resizableHeight}>
      <PreserveRatio>
        <ContextContent />
      </PreserveRatio>
    </ResizableBox>
  </section>
);
