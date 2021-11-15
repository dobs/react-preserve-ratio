import * as React from 'react';
import './styles.css';
import { AlignmentExample } from './examples/Alignment';
import { BasicExample } from './examples/Basic';
import { ConstraintsExample } from './examples/Constraints';
import { ContentResizeExample } from './examples/ContentResize';
import { ContextExample } from './examples/Context';
import { CoverExample } from './examples/Cover';
import { PreserveScaleExample } from './examples/PreserveScale';
import { SafeModeExample } from './examples/SafeMode';
import { WindowExample } from './examples/Window';

const App = () => {
  return (
    <div>
      <h1>
        Examples:{' '}
        <a href="https://github.com/dobs/react-preserve-ratio">
          react-preserve-ratio
        </a>
      </h1>
      <BasicExample />
      <ConstraintsExample />
      <ContentResizeExample />
      <AlignmentExample />
      <CoverExample />
      <SafeModeExample />
      <ContextExample />
      <PreserveScaleExample />
      <WindowExample />
    </div>
  );
};

export default App;
