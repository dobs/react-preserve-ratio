import { HTMLAttributes, ReactNode } from 'react';
import { Align, VAlign } from './common';
import { PreserveRatioContext, useScale } from './PreserveRatio';

export interface PreserveScaleProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Horizontal alignment, one of "center", "left" or "right." (default:
   * center)
   */
  align?: Align;
  children: ReactNode;

  /**
   * Vertical alignment, one of "center," "bottom" or "top." (default: center)
   */
  valign?: VAlign;
}

/**
 * When contained with a PreserveScale component, effectively reverses the
 * effect, ensuring that contents aren't scaled.
 *
 *     <div>
 *       <PreserveRatio>
 *         <h1>Hello,</h1>
 *         <p>World!</p>
 *         <PreserveScale>Some Watermark</PreserveScale>
 *       </PreserveRatio>
 *     </div>
 *
 * @param params
 * @returns
 */
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
