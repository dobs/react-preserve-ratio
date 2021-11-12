import * as React from 'react';
import { ResizableBox } from 'react-resizable';
import { PreserveRatio } from '../../dist';
import {
  DefaultExampleContent,
  resizableHeight,
  resizableWidth,
  SourceLink,
} from '../Common';

export const ConstraintsExample = () => (
  <section id="constraints-example">
    <h2>
      Constraints Example <SourceLink name="Constraints" />
    </h2>
    <p>
      This time we pass in a <code>maxScale</code> prop to restrict the
      content's maximum size.{' '}
    </p>
    <ResizableBox width={resizableWidth} height={resizableHeight}>
      <PreserveRatio maxScale={1}>
        <DefaultExampleContent />
      </PreserveRatio>
    </ResizableBox>
    <p>There are a few different constraint options:</p>
    <ul>
      <li>
        <code>maxScale</code>: A number indicating the maximum scale for content
        relative to their real size.
      </li>
      <li>
        <code>maxHeight</code>: A number indicating the maximum height of
        content, in pixels.
      </li>
      <li>
        <code>maxWidth</code>: A number indicating the maximum width of content,
        in pixels.
      </li>
    </ul>
    <p>
      Minimum constraints are more container-dependent an so aren't currently
      covered by the component in favour of letting users specify their own{' '}
      <code>min-width</code> and <code>min-height</code> on the container.
    </p>
  </section>
);
