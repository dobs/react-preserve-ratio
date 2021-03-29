import * as React from 'react';
import { Box, Code, Heading, Text } from '@chakra-ui/layout';
import { ResizableBox } from 'react-resizable';
import { PreserveRatio, PreserveScale } from '../../dist';
import { relative } from 'path';

export const PreserveScaleExample = () => (
  <Box as="section" id="basic-example">
    <Heading size="lg">Preserving Scale Example</Heading>
    <Text fontSize="md">
      <Code>PreserveScale</Code> reverses the effect of{' '}
      <Code>PreserveRatio</Code>, allowing child elements to maintain their size
      regardless of the scale of <Code>PreserveRatio</Code>. An example use case
      might be a watermark or disclaimer tucked into the corner of a
      presentation slide where you want it legible but discrete.
    </Text>
    <ResizableBox width={640} height={242}>
      <PreserveRatio>
        <div
          style={{
            alignItems: 'center',
            backgroundColor: '#ddffdd',
            display: 'flex',
            height: '240px',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            width: '320px',
          }}
        >
          Hello, world!
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              right: '4px',
              fontSize: '16px',
            }}
          >
            <PreserveScale align="right" valign="bottom">
              Bottom-Right
            </PreserveScale>
          </div>
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: '4px',
              fontSize: '16px',
            }}
          >
            <PreserveScale align="left" valign="top">
              Top-Left
            </PreserveScale>
          </div>
        </div>
      </PreserveRatio>
    </ResizableBox>
  </Box>
);
