import * as React from 'react';
import { ResizableBox } from 'react-resizable';
import { PreserveRatio } from '../../dist';
import {
  DefaultExampleContent,
  resizableHeight,
  resizableWidth,
  SourceLink,
} from '../Common';

export const CoverExample = () => (
  <section id="cover-example">
    <h2>
      Cover Example <SourceLink name="Cover" />
    </h2>
    <p>
      By default <code>PreserveReactRatio</code> sizes contents so that it's
      "contained" by the container, but can optionally have them "cover"
      instead.
    </p>
    <p>
      This is useful when the intention is to use contents like a background,
      and is similar to how{' '}
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/background-size">
        <code>background-size</code> handles "contain" vs. "cover" in CSS
      </a>
      .
    </p>
    <ResizableBox width={resizableWidth} height={resizableHeight}>
      <PreserveRatio cover>
        <DefaultExampleContent />
      </PreserveRatio>
    </ResizableBox>
  </section>
);
