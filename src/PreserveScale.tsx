import * as React from 'react';
import { FC, HTMLAttributes, ReactChild } from 'react';
import { Align, VAlign } from './common';
import { PreserveRatioContext } from './PreserveRatio';

export interface PreserveScaleProps extends HTMLAttributes<HTMLDivElement> {
  align?: Align;
  children: ReactChild;
  valign?: VAlign;
}

export const PreserveScale: FC<PreserveScaleProps> = ({
  align,
  children,
  valign,
}) => {
  const { scale } = React.useContext(PreserveRatioContext);

  return (
    <div
      style={{
        transform: `scale(${1 / scale})`,
        transformOrigin: `${valign || 'center'} ${align || 'center'}`,
      }}
    >
      <PreserveRatioContext.Provider value={{ scale: 1 }}>
        {children}
      </PreserveRatioContext.Provider>
    </div>
  );
};
