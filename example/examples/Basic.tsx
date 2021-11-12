import * as React from 'react';
import { ResizableBox } from 'react-resizable';
import { PreserveRatio } from '../../dist';
import {
  DefaultExampleContent,
  resizableHeight,
  resizableWidth,
  SourceLink,
} from '../Common';

export const BasicExample = () => (
  <section id="basic-example">
    <h2>
      Basic Example <SourceLink name="Basic" />
    </h2>
    <p>
      Try resizing the box below and notice how content automatically scales
      while maintaining its ratio.{' '}
    </p>
    <ResizableBox width={resizableWidth} height={resizableHeight}>
      <PreserveRatio>
        <DefaultExampleContent />
      </PreserveRatio>
    </ResizableBox>
  </section>
);
