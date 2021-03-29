import * as React from 'react';
import { Box, Heading, Link, Text } from '@chakra-ui/layout';
import { PreserveRatio } from '../../dist';
import { DefaultContent, SourceLink } from '../Common';

export const WindowExample = () => (
  <Box as="section" id="window-example">
    <Heading size="lg">
      Window Scaling Example <SourceLink name="Window" />
    </Heading>
    <Text>
      A typical use case is having content scale to fill the current window, for
      example when displaying a slide as part of a slide show.
    </Text>
    <Text>
      The box below should scale to match the window size. Try resizing your
      window (or rotating your device) and see how the inner content scales to
      fit.
    </Text>
    <div
      style={{
        border: '1px dotted rgba(0, 0, 0, 0.2)',
        height: 'calc(100vh - 2em)',
        width: '100%',
      }}
    >
      <PreserveRatio>
        <DefaultContent />
      </PreserveRatio>
    </div>
  </Box>
);
