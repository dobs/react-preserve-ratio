import * as React from 'react';
import { Box, Flex, Heading, Link, Spacer, Text } from '@chakra-ui/layout';
import { ResizableBox } from 'react-resizable';
import { PreserveRatio } from '../../dist';
import { Button } from '@chakra-ui/button';
import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from '@chakra-ui/number-input';
import { SourceLink } from '../Common';

interface Rect {
  height: number;
  width: number;
}

export const ContentResizeExample = () => {
  const [contentResizeRect, setContentResizeRect] = React.useState<Rect>({
    width: 320,
    height: 240,
  });

  return (
    <Box as="section" id="content-resize-example">
      <Heading size="lg">
        Content Resizing Example <SourceLink name="ContentResize" />
      </Heading>
      <Text>
        Content is also automatically scaled when content dimensions change.{' '}
      </Text>
      <Flex my={2} maxW="640px">
        <Button
          onClick={() => setContentResizeRect({ width: 480, height: 240 })}
        >
          Wide
        </Button>
        <Button
          onClick={() => setContentResizeRect({ width: 240, height: 320 })}
        >
          Tall
        </Button>
        <Spacer />
        <NumberInput
          w={20}
          mr={2}
          min={1}
          max={999}
          value={contentResizeRect.width}
          onChange={v =>
            setContentResizeRect({
              width: parseInt(v),
              height: contentResizeRect.height,
            })
          }
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <NumberInput
          w={20}
          min={1}
          max={999}
          value={contentResizeRect.height}
          onChange={v =>
            setContentResizeRect({
              width: contentResizeRect.width,
              height: parseInt(v),
            })
          }
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Flex>
      <ResizableBox width={640} height={242}>
        <PreserveRatio>
          <div
            style={{
              alignItems: 'center',
              backgroundColor: '#ddffdd',
              display: 'flex',
              height: `${contentResizeRect.height}px`,
              justifyContent: 'center',
              transition: 'width 200ms, height 200ms',
              width: `${contentResizeRect.width}px`,
            }}
          >
            Hello, world!
          </div>
        </PreserveRatio>
      </ResizableBox>
    </Box>
  );
};
