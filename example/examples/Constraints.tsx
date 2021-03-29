import * as React from 'react';
import {
  Box,
  Code,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/layout';
import { ResizableBox } from 'react-resizable';
import { PreserveRatio } from '../../dist';
import { DefaultExampleContent, SourceLink } from '../Common';

export const ConstraintsExample = () => (
  <Box as="section" id="constraints-example">
    <Heading size="lg">
      Constraints Example <SourceLink name="Constraints" />
    </Heading>
    <Text>
      This time we pass in a <Code>maxScale</Code> prop to restrict the
      content's maximum size.{' '}
    </Text>
    <ResizableBox width={640} height={242}>
      <PreserveRatio maxScale={1}>
        <DefaultExampleContent />
      </PreserveRatio>
    </ResizableBox>
    <Text>There are a few different constraint options:</Text>
    <UnorderedList>
      <ListItem>
        <Code>maxScale</Code>: A number indicating the maximum scale for content
        relative to their real size.
      </ListItem>
      <ListItem>
        <Code>maxHeight</Code>: A number indicating the maximum height of
        content, in pixels.
      </ListItem>
      <ListItem>
        <Code>maxWidth</Code>: A number indicating the maximum width of content,
        in pixels.
      </ListItem>
    </UnorderedList>
    <Text>
      Minimum constraints are more container-dependent an so aren't currently
      covered by the component in favour of letting users specify their own{' '}
      <Code>min-width</Code> and <Code>min-height</Code> on the container.
    </Text>
  </Box>
);
