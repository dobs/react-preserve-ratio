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
  let { scale } = React.useContext(PreserveRatioContext);

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
};
