import * as React from 'react';
import { ResizableBox } from 'react-resizable';
import { Align, PreserveRatio, VAlign } from '../../dist';
import {
  DefaultExampleContent,
  resizableHeight,
  resizableWidth,
  SourceLink,
} from '../Common';

export const AlignmentExample = () => {
  const [alignment, setAlignment] = React.useState('center center');

  return (
    <section id="alignment-example">
      <h2>
        Alignment Example <SourceLink name="Alignment" />
      </h2>
      <p>
        Components also support horizontal and vertical alignment via{' '}
        <code>align</code> and <code>valign</code> respectively.
      </p>

      <table style={{ width: '320px' }}>
        <thead>
          <tr>
            <td></td>
            <td style={{ textAlign: 'center' }}>Left</td>
            <td style={{ textAlign: 'center' }}>Center</td>
            <td style={{ textAlign: 'center' }}>Right</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ textAlign: 'right' }}>Top</td>
            <td style={{ textAlign: 'center' }}>
              <input
                type="radio"
                name="alignment"
                value="top left"
                onChange={e => { console.log(e); setAlignment(e.target.value) }}
              />
            </td>
            <td style={{ textAlign: 'center' }}>
              <input
                type="radio"
                name="alignment"
                value="top center"
                onChange={e => { console.log(e); setAlignment(e.target.value) }}
              />
            </td>
            <td style={{ textAlign: 'center' }}>
              <input
                type="radio"
                name="alignment"
                value="top right"
                onChange={e => { console.log(e); setAlignment(e.target.value) }}
              />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td style={{ textAlign: 'right' }}>Center</td>
            <td style={{ textAlign: 'center' }}>
              <input
                type="radio"
                name="alignment"
                value="center left"
                onChange={e => { console.log(e); setAlignment(e.target.value) }}
              />
            </td>
            <td style={{ textAlign: 'center' }}>
              <input
                type="radio"
                name="alignment"
                value="center center"
                onChange={e => { console.log(e); setAlignment(e.target.value) }}
              />
            </td>
            <td style={{ textAlign: 'center' }}>
              <input
                type="radio"
                name="alignment"
                value="center right"
                onChange={e => { console.log(e); setAlignment(e.target.value) }}
              />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td style={{ textAlign: 'right' }}>Bottom</td>
            <td style={{ textAlign: 'center' }}>
              <input
                type="radio"
                name="alignment"
                value="bottom left"
                onChange={e => { console.log(e); setAlignment(e.target.value) }}
              />
            </td>
            <td style={{ textAlign: 'center' }}>
              <input
                type="radio"
                name="alignment"
                value="bottom center"
                onChange={e => { console.log(e); setAlignment(e.target.value) }}
              />
            </td>
            <td style={{ textAlign: 'center' }}>
              <input
                type="radio"
                name="alignment"
                value="bottom right"
                onChange={e => { console.log(e); setAlignment(e.target.value) }}
              />
            </td>
          </tr>
        </tbody>
      </table>

      <ResizableBox width={resizableWidth} height={resizableHeight}>
        <PreserveRatio
          align={alignment.split(' ')[1] as Align}
          valign={alignment.split(' ')[0] as VAlign}
        >
          <DefaultExampleContent />
        </PreserveRatio>
      </ResizableBox>
    </section>
  );
};
