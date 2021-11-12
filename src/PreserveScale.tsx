import * as React from 'react';
import { HTMLAttributes, ReactChild } from 'react';
import { Align, VAlign } from './common';
import { PreserveRatioContext, useScale } from './PreserveRatio';

export interface PreserveScaleProps extends HTMLAttributes<HTMLDivElement> {
  align?: Align;
  children: ReactChild;
  valign?: VAlign;
}

export function PreserveScale({
  align,
  children,
  valign,
}: PreserveScaleProps): JSX.Element | null {
  let scale = useScale();

  if (isNaN(scale)) {
    return null;
  } else if (scale < 0) {
    console.warn(
      '[react-preserve-ratio] Component `PreserveScale` is being used without a parent `PreserveRatio`. This is probably unintentional. Did you mean to use `PreserveRatio` instead?'
    );
    scale = 1;
  }

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
}
