import * as React from 'react';
import { PreserveRatio } from '../../dist';
import { DefaultExampleContent, SourceLink } from '../Common';

export const WindowExample = () => (
  <section id="window-example">
    <h2>
      Window Scaling Example <SourceLink name="Window" />
    </h2>
    <p>
      A typical use case is having content scale to fill the current window, for
      example when displaying a slide as part of a slide show.
    </p>
    <p>
      The box below should scale to match the window size. Try resizing your
      window (or rotating your device) and see how the inner content scales to
      fit.
    </p>
    <div
      style={{
        border: '1px dotted rgba(0, 0, 0, 0.2)',
        fontSize: '2em',
        height: 'calc(100vh - 32px)',
        width: '100%',
      }}
    >
      <PreserveRatio>
        <DefaultExampleContent />
      </PreserveRatio>
    </div>
  </section>
);
