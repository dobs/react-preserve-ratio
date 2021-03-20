import * as React from 'react';
import { Box, Code, Heading, Link, Text } from '@chakra-ui/layout';
import { ResizableBox } from 'react-resizable';
import { PreserveRatio } from '../../dist';
import { DefaultContent } from '../Common';

export const SafeModeExample = () => (
  <Box as="section" id="safe-mode-example">
    <Heading size="lg">Safe Mode Example</Heading>
    <Text>
      If elements are resized too quickly it can result in non-user-impacting
      errors. Where this could become a problem is if you're using a frontend
      error tracking service it could create a lot of noise.
    </Text>
    <Text>
      To help mitigate, there's a <Code>safeMode</Code> prop that introduces a
      small amount of user-visible latency but in an attempt to reduce these
      errors.
    </Text>
    <Text>
      See{' '}
      <Link href="https://stackoverflow.com/questions/49384120/resizeobserver-loop-limit-exceeded">
        this StackOverflow thread
      </Link>{' '}
      for more detail.
    </Text>
    <ResizableBox width={640} height={240}>
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
  </Box>
);
