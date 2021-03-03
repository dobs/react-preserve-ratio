import { useContext, useState } from 'react'
import { ResizableBox } from 'react-resizable'

import { PreserveRatio, PreserveRatioContext } from 'react-preserve-ratio'
import {
  Button,
  Code,
  Flex,
  Heading,
  Link,
  ListItem,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Radio,
  RadioGroup,
  Spacer,
  Table,
  Tbody,
  Td,
  Text,
  Thead,
  Tr,
  UnorderedList
} from '@chakra-ui/react'

interface Rect {
  height: number
  width: number
}

const DefaultContent = ({ children }: { children?: any }) => (
  <div
    style={{
      alignItems: 'center',
      backgroundColor: '#ddffdd',
      display: 'flex',
      height: '240px',
      justifyContent: 'center',
      width: '320px'
    }}
  >
    {children || 'Hello, world!'}
  </div>
)

const ContextContent = () => {
  const { scale } = useContext(PreserveRatioContext)

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
        transition: 'background 200ms'
      }}
    >
      {new Intl.NumberFormat('en-US', { maximumSignificantDigits: 2 }).format(
        scale
      )}
    </div>
  )
}

const App = () => {
  const [alignment, setAlignment] = useState('center center')
  const [contentResizeRect, setContentResizeRect] = useState<Rect>({
    width: 320,
    height: 240
  })

  return (
    <div
      style={{
        margin: '1em'
      }}
    >
      <Heading size='xl'>
        Examples:{' '}
        <Link href='https://github.com/dobs/react-preserve-ratio'>
          react-preserve-ratio
        </Link>
      </Heading>
      <Heading size='lg'>Basic Example</Heading>
      <Text fontSize='md'>
        Try resizing the box below and notice how content automatically scales
        while maintaining its ratio.
      </Text>
      <ResizableBox width={640} height={240}>
        <PreserveRatio>
          <DefaultContent />
        </PreserveRatio>
      </ResizableBox>

      <Heading size='lg'>Constraints Example</Heading>
      <Text>
        This time we pass in a <Code>maxScale</Code> prop to restrict the
        content's maximum size.
      </Text>
      <ResizableBox width={640} height={240}>
        <PreserveRatio maxScale={1}>
          <DefaultContent />
        </PreserveRatio>
      </ResizableBox>
      <Text>There are a few different constraint options:</Text>
      <UnorderedList>
        <ListItem>
          <Code>maxScale</Code>: A number indicating the maximum scale for
          content relative to their real size.
        </ListItem>
        <ListItem>
          <Code>maxHeight</Code>: A number indicating the maximum height of
          content, in pixels.
        </ListItem>
        <ListItem>
          <Code>maxWidth</Code>: A number indicating the maximum width of
          content, in pixels.
        </ListItem>
      </UnorderedList>
      <Text>
        Minimum constraints are more container-dependent an so aren't currently
        covered by the component in favour of letting users specify their own{' '}
        <Code>min-width</Code> and <Code>min-height</Code> on the container.
      </Text>

      <Heading size='lg'>Content Resizing Example</Heading>
      <Text>
        Content is also automatically scaled when content dimensions change.
      </Text>
      <Flex my={2} maxW='640px'>
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
          onChange={(v) =>
            setContentResizeRect({
              width: parseInt(v),
              height: contentResizeRect.height
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
          onChange={(v) =>
            setContentResizeRect({
              width: contentResizeRect.width,
              height: parseInt(v)
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
      <ResizableBox width={640} height={240}>
        <PreserveRatio>
          <div
            style={{
              alignItems: 'center',
              backgroundColor: '#ddffdd',
              display: 'flex',
              height: `${contentResizeRect.height}px`,
              justifyContent: 'center',
              transition: 'width 200ms, height 200ms',
              width: `${contentResizeRect.width}px`
            }}
          >
            Hello, world!
          </div>
        </PreserveRatio>
      </ResizableBox>

      <Heading size='lg'>Alignment Example</Heading>
      <Text>
        Components also support horizontal and vertical alignment via{' '}
        <Code>align</Code> and <Code>valign</Code> respectively.
      </Text>

      <RadioGroup
        my={2}
        onChange={(v) => setAlignment(v.toString())}
        value={alignment}
      >
        <Table w='320px'>
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
              <Td textAlign='right'>Top</Td>
              <Td>
                <Radio value='top left' />
              </Td>
              <Td>
                <Radio value='top center' />
              </Td>
              <Td>
                <Radio value='top right' />
              </Td>
            </Tr>
          </Tbody>
          <Tbody>
            <Tr>
              <Td textAlign='right'>Center</Td>
              <Td>
                <Radio value='center left' />
              </Td>
              <Td>
                <Radio value='center center' />
              </Td>
              <Td>
                <Radio value='center right' />
              </Td>
            </Tr>
          </Tbody>
          <Tbody>
            <Tr>
              <Td textAlign='right'>Bottom</Td>
              <Td>
                <Radio value='bottom left' />
              </Td>
              <Td>
                <Radio value='bottom center' />
              </Td>
              <Td>
                <Radio value='bottom right' />
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </RadioGroup>

      <ResizableBox width={640} height={240}>
        <PreserveRatio
          align={alignment.split(' ')[1]}
          valign={alignment.split(' ')[0]}
        >
          <DefaultContent />
        </PreserveRatio>
      </ResizableBox>

      <Heading size='lg'>Safe Mode Example</Heading>
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
        <Link href='https://stackoverflow.com/questions/49384120/resizeobserver-loop-limit-exceeded'>
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
              width: '320px'
            }}
          >
            Hello, world!
          </div>
        </PreserveRatio>
      </ResizableBox>

      <Heading size='lg'>Context Example</Heading>
      <Text>
        <Code>PreserveRatioContext</Code> for child components that care about
        the current scale.
      </Text>
      <ResizableBox width={640} height={240}>
        <PreserveRatio>
          <ContextContent />
        </PreserveRatio>
      </ResizableBox>

      <Heading size='lg'>Window Scaling Example</Heading>
      <Text>
        A typical use case is having content scale to fill the current window,
        for example when displaying a slide as part of a slide show.
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
          width: '100%'
        }}
      >
        <PreserveRatio>
          <DefaultContent />
        </PreserveRatio>
      </div>
    </div>
  )
}

export default App
