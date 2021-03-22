import * as React from 'react';
import { Box, Heading, Text } from '@chakra-ui/layout';
import { ResizableBox } from 'react-resizable';
import { PreserveRatio } from '../../dist';
import { DefaultContent } from '../Common';

export const BasicExample = () => (
  <Box as="section" id="basic-example">
    <Heading size="lg">Basic Example</Heading>
    <Text fontSize="md">
      Try resizing the box below and notice how content automatically scales
      while maintaining its ratio.
    </Text>
    <ResizableBox width={640} height={242}>
      <PreserveRatio>
        <DefaultContent />
      </PreserveRatio>
    </ResizableBox>
  </Box>
);
