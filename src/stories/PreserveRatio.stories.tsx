import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ResizableBox } from "react-resizable";
import { PreserveRatio, PreserveScale, useScale } from "..";
import { PreserveRatioProps } from "../PreserveRatio";
import "./PreserveRatio.css";

const DefaultExampleContent = ({ children }: { children?: any }) => (
  <div
    style={{
      alignItems: 'center',
      backgroundColor: '#ddffdd',
      display: 'flex',
      height: '240px',
      justifyContent: 'center',
      overflow: 'hidden',
      width: '320px',
    }}
  >
    {children || 'Hello, world!'}
  </div>
);

const resizableWidth = Math.min(640, window.innerWidth - 32);
const resizableHeight = 242;

export default {
  title: "PreserveRatio",
  component: PreserveRatio,
} as ComponentMeta<typeof PreserveRatio>;

const Template: ComponentStory<typeof PreserveRatio> = (args) => (
  <ResizableBox width={resizableWidth} height={resizableHeight}>
    <PreserveRatio {...args}>
      <DefaultExampleContent />
    </PreserveRatio>
  </ResizableBox>
);

export const GenericExample = Template.bind({});
GenericExample.decorators = [
  (Story) => (
    <section id="basic-example">
      <h2>Generic Example</h2>
      <p>
        Try resizing the box below and notice how content automatically scales
        while maintaining its ratio.{" "}
      </p>
      <Story />
    </section>
  ),
];

export const AlignmentExample = Template.bind({});
AlignmentExample.args = {
  align: "left",
  valign: "top",
};
AlignmentExample.parameters = {
  controls: { include: Object.keys(AlignmentExample.args) },
};
AlignmentExample.decorators = [
  (Story) => (
    <section id="alignment-example">
      <h2>Alignment Example</h2>
      <p>
        Components also support horizontal and vertical alignment via{" "}
        <code>align</code> and <code>valign</code> respectively.
      </p>

      <Story />
    </section>
  ),
];

export const ConstraintsExample = Template.bind({});
ConstraintsExample.args = {
  maxScale: 1,
  maxHeight: 400,
  maxWidth: 400,
};
ConstraintsExample.parameters = {
  controls: { include: Object.keys(ConstraintsExample.args) },
};
ConstraintsExample.decorators = [
  (Story) => (
    <section id="constraints-example">
      <h2>Constraints Example</h2>
      <p>
        This time we pass in a <code>maxScale</code> prop to restrict the
        content's maximum size.{" "}
      </p>
      <Story />
      <p>There are a few different constraint options:</p>
      <ul>
        <li>
          <code>maxScale</code>: A number indicating the maximum scale for
          content relative to their real size.
        </li>
        <li>
          <code>maxHeight</code>: A number indicating the maximum height of
          content, in pixels.
        </li>
        <li>
          <code>maxWidth</code>: A number indicating the maximum width of
          content, in pixels.
        </li>
      </ul>
      <p>
        Minimum constraints are more container-dependent an so aren't currently
        covered by the component in favour of letting users specify their own{" "}
        <code>min-width</code> and <code>min-height</code> on the container.
      </p>
    </section>
  ),
];

const ContextContent = () => {
  const scale = useScale();

  return (
    <div
      style={{
        alignItems: "center",
        backgroundColor: "#ddffdd",
        display: "flex",
        fontSize: "4em",
        height: "240px",
        justifyContent: "center",
        width: "320px",
        transition: "background 200ms",
      }}
    >
      {new Intl.NumberFormat("en-US", { maximumSignificantDigits: 2 }).format(
        scale
      )}
    </div>
  );
};

export const ContextExample = (args: PreserveRatioProps) => (
  <section id="context-example">
    <h2>Context Example</h2>
    <p>
      <code>PreserveRatioContext</code> or the <code>useScale</code> hook are
      available for child components that care about the current scale.
    </p>
    <ResizableBox width={resizableWidth} height={resizableHeight}>
      <PreserveRatio {...args}>
        <ContextContent />
      </PreserveRatio>
    </ResizableBox>
  </section>
);

export const CoverExample = Template.bind({});
CoverExample.args = {
  cover: true,
};
CoverExample.parameters = {
  controls: { include: Object.keys(CoverExample.args) },
};
CoverExample.decorators = [
  (Story) => (
    <section id="cover-example">
      <h2>Cover Example</h2>
      <p>
        By default <code>PreserveReactRatio</code> sizes contents so that it's
        "contained" by the container, but can optionally have them "cover"
        instead.
      </p>
      <p>
        This is useful when the intention is to use contents like a background,
        and is similar to how{" "}
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/background-size">
          <code>background-size</code> handles "contain" vs. "cover" in CSS
        </a>
        .
      </p>
      <Story />
    </section>
  ),
];

export const PreserveScaleExample = (args: PreserveRatioProps) => (
  <section id="preserve-scale-example">
    <h2>Preserving Scale Example</h2>
    <p>
      <code>PreserveScale</code> reverses the effect of{" "}
      <code>PreserveRatio</code>, allowing child elements to maintain their size
      regardless of the scale of <code>PreserveRatio</code>. An example use case
      might be a watermark or disclaimer tucked into the corner of a
      presentation slide where you want it legible but discrete.
    </p>
    <ResizableBox width={resizableWidth} height={resizableHeight}>
      <PreserveRatio {...args}>
        <div
          style={{
            alignItems: "center",
            backgroundColor: "#ddffdd",
            display: "flex",
            height: "240px",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
            width: "320px",
          }}
        >
          Hello, world!
          <div
            style={{
              bottom: 0,
              position: "absolute",
              right: 0,
            }}
          >
            <PreserveScale align="right" valign="bottom">
              <div
                style={{
                  fontSize: "16px",
                  padding: "0 4px",
                }}
              >
                Bottom-Right
              </div>
            </PreserveScale>
          </div>
          <div
            style={{
              left: 0,
              position: "absolute",
              top: 0,
            }}
          >
            <PreserveScale align="left" valign="top">
              <div
                style={{
                  fontSize: "16px",
                  padding: "0 4px",
                }}
              >
                Top-Left
              </div>
            </PreserveScale>
          </div>
        </div>
      </PreserveRatio>
    </ResizableBox>
  </section>
);

export const SafeModeExample = Template.bind({});
SafeModeExample.args = {
  safeMode: true,
};
SafeModeExample.parameters = {
  controls: { include: Object.keys(SafeModeExample.args) },
};
SafeModeExample.decorators = [
  (Story) => (
    <section id="safe-mode-example">
      <h2>Safe Mode Example</h2>
      <p>
        If elements are resized too quickly it can result in non-user-impacting
        errors. Where this could become a problem is if you're using a frontend
        error tracking service it could create a lot of noise.
      </p>
      <p>
        To help mitigate, there's a <code>safeMode</code> prop that introduces a
        small amount of user-visible latency but in an attempt to reduce these
        errors.
      </p>
      <p>
        See{" "}
        <a href="https://stackoverflow.com/questions/49384120/resizeobserver-loop-limit-exceeded">
          this StackOverflow thread
        </a>{" "}
        for more detail.
      </p>
      <Story />
    </section>
  ),
];
