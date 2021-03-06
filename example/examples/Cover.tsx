import * as React from 'react';
import { Box, Code, Heading, Link, Text } from '@chakra-ui/layout';
import { ResizableBox } from 'react-resizable';
import { PreserveRatio } from '../../dist';
import {
  DefaultExampleContent,
  resizableHeight,
  resizableWidth,
  SourceLink,
} from '../Common';

export const CoverExample = () => (
  <Box as="section" id="cover-example">
    <Heading size="lg">
      Cover Example <SourceLink name="Cover" />
    </Heading>
    <Text>
      By default <Code>PreserveReactRatio</Code> sizes contents so that it's
      "contained" by the container, but can optionally have them "cover"
      instead.
    </Text>
    <Text>
      This is useful when the intention is to use contents like a background,
      and is similar to how{' '}
      <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/background-size">
        <Code>background-size</Code> handles "contain" vs. "cover" in CSS
      </Link>
      .
    </Text>
    <ResizableBox width={resizableWidth} height={resizableHeight}>
      <PreserveRatio cover>
        <DefaultExampleContent />
      </PreserveRatio>
    </ResizableBox>
  </Box>
);
