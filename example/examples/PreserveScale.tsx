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
              bottom: 0,
              position: 'absolute',
              right: 0,
            }}
          >
            <PreserveScale align="right" valign="bottom">
              <div
                style={{
                  fontSize: '16px',
                  padding: '0 4px',
                }}
              >
                Bottom-Right
              </div>
            </PreserveScale>
          </div>
          <div
            style={{
              left: 0,
              position: 'absolute',
              top: 0,
            }}
          >
            <PreserveScale align="left" valign="top">
              <div
                style={{
                  fontSize: '16px',
                  padding: '0 4px',
                }}
              >
                Top-Left
              </div>
            </PreserveScale>
          </div>
        </div>
      </PreserveRatio>
    </ResizableBox>
  </Box>
);
