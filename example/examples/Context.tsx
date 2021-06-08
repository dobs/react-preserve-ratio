import * as React from 'react';
import { Box, Code, Heading, Text } from '@chakra-ui/layout';
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
  <Box as="section" id="context-example">
    <Heading size="lg">
      Context Example <SourceLink name="Context" />
    </Heading>
    <Text>
      <Code>PreserveRatioContext</Code> or the <Code>useScale</Code> hook are
      available for child components that care about the current scale.
    </Text>
    <ResizableBox width={resizableWidth} height={resizableHeight}>
      <PreserveRatio>
        <ContextContent />
      </PreserveRatio>
    </ResizableBox>
  </Box>
);
