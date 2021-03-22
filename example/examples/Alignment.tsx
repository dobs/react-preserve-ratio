import * as React from 'react';
import {
  Box,
  Code,
  Heading,
  Text,
} from '@chakra-ui/layout';
import { ResizableBox } from 'react-resizable';
import { Align, PreserveRatio, VAlign } from '../../dist';
import { Radio, RadioGroup } from '@chakra-ui/radio';
import { Table, Tbody, Td, Thead, Tr } from '@chakra-ui/table';
import { DefaultContent } from '../Common';

export const AlignmentExample = () => {
  const [alignment, setAlignment] = React.useState('center center');

  return (
    <Box as="section" id="alignment-example">
      <Heading size="lg">Alignment Example</Heading>
      <Text>
        Components also support horizontal and vertical alignment via{' '}
        <Code>align</Code> and <Code>valign</Code> respectively.
      </Text>

      <RadioGroup
        my={2}
        onChange={v => setAlignment(v.toString())}
        value={alignment}
      >
        <Table w="320px">
          <Thead>
            <Tr>
              <Td></Td>
              <Td>Left</Td>
              <Td>Center</Td>
              <Td>Right</Td>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td textAlign="right">Top</Td>
              <Td>
                <Radio value="top left" />
              </Td>
              <Td>
                <Radio value="top center" />
              </Td>
              <Td>
                <Radio value="top right" />
              </Td>
            </Tr>
          </Tbody>
          <Tbody>
            <Tr>
              <Td textAlign="right">Center</Td>
              <Td>
                <Radio value="center left" />
              </Td>
              <Td>
                <Radio value="center center" />
              </Td>
              <Td>
                <Radio value="center right" />
              </Td>
            </Tr>
          </Tbody>
          <Tbody>
            <Tr>
              <Td textAlign="right">Bottom</Td>
              <Td>
                <Radio value="bottom left" />
              </Td>
              <Td>
                <Radio value="bottom center" />
              </Td>
              <Td>
                <Radio value="bottom right" />
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </RadioGroup>
      <ResizableBox width={640} height={242}>
        <PreserveRatio
          align={alignment.split(' ')[1] as Align}
          valign={alignment.split(' ')[0] as VAlign}
        >
          <DefaultContent />
        </PreserveRatio>
      </ResizableBox>
    </Box>
  );
};
