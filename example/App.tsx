import * as React from 'react';
import { Box, Heading, Link } from '@chakra-ui/react';
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
    <Box m={4}>
      <Heading size="xl">
        Examples:{' '}
        <Link href="https://github.com/dobs/react-preserve-ratio">
          react-preserve-ratio
        </Link>
      </Heading>
      <BasicExample />
      <ConstraintsExample />
      <ContentResizeExample />
      <AlignmentExample />
      <CoverExample />
      <SafeModeExample />
      <ContextExample />
      <PreserveScaleExample />
      <WindowExample />
    </Box>
  );
};

export default App;
