import { CSSProperties } from 'react';
import {
  createContext,
  HTMLAttributes,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Align, alignMap, VAlign, valignMap } from './common';

interface Context {
  scale: number;
}

interface Rect {
  height: number;
  width: number;
}

export const PreserveRatioContext = createContext<Context>({ scale: -1 });

export const useScale = () => useContext(PreserveRatioContext).scale;

/* Calculate scale based on some inner value and outer value.
 *
 * Includes support for hinting, attempting to accommodate for an extra pixel
 * as appropriate. */
const calcScale = (i: number, o: number, hint: boolean) =>
  o / i + (hint && (o + i) % 2 ? 1 / i : 0);

/* Instantiate a ResizeObserver with a callback to apply on resize.
 *
 * Includes a `safeMode` option to defer applying until the next animation
 * frame. */
const createObserver = (
  apply: (entries: ResizeObserverEntry[]) => void,
  safeMode: boolean
) =>
  new ResizeObserver((entries: ResizeObserverEntry[]) => {
    if (!Array.isArray(entries)) return;

    if (safeMode) {
      window.requestAnimationFrame(() => {
        apply(entries);
      });
    } else {
      apply(entries);
    }
  });

export interface PreserveRatioProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Horizontal alignment, one of "center", "left" or "right." (default:
   * center)
   */
  align?: Align;
  children: ReactNode;

  /**
   * Whether to "cover" the container instead of "contain." (default: false)
   */
  cover?: boolean;

  /**
   * Optional className to apply to PreserveRatio's container element (default:
   * none)
   */
  className?: string;

  /**
   * Adjust resizing to ensure contained elements fully cover edges of their
   * container. (default: false)
   *
   * Effectively handled by rounding up by one pixel.
   */
  hint?: boolean;

  /**
   * The maximum height of the contained elements, in pixels (default: none).
   */
  maxHeight?: number;

  /**
   * The maximum relative scale of contained elements.
   */
  maxScale?: number;

  /**
   * The maximum width of the contained elements, in pixels (default: none).
   */
  maxWidth?: number;

  /**
   * Throttles scale updates to reduce performance overhead at the cost of
   * less-responsive updates. (default: false)
   */
  safeMode?: boolean;

  /**
   * Optional style overrides for PreserveRatio's container element. (default:
   * none)
   */
  style?: CSSProperties;

  /**
   * Vertical alignment, one of "center," "bottom" or "top." (default: center)
   */
  valign?: VAlign;
}

/**
 * PreserveRatio is a React component that attempts to scale to the size of its
 * container and do the same for its contents.
 *
 * Basic example:
 *
 *     <div>
 *       <PreserveRatio>
 *         <h1>Hello,</h1>
 *         <p>World!</p>
 *       </PreserveRatio>
 *     </div>
 *
 * @param params
 * @returns JSX.Element
 */
export function PreserveRatio({
  align,
  children,
  className,
  cover,
  hint,
  maxHeight,
  maxScale,
  maxWidth,
  safeMode,
  style = {},
  valign,
}: PreserveRatioProps): JSX.Element {
  const innerRef = useRef(null);
  const outerRef = useRef(null);

  const [innerRect, setInnerRect] = useState<Rect>({ width: 0, height: 0 });
  const [outerRect, setOuterRect] = useState<Rect>({ width: 0, height: 0 });

  const scale = useMemo(() => {
    const cmp = cover ? Math.max : Math.min;

    const dynamicScale = cmp(
      calcScale(innerRect.width, outerRect.width, hint || false),
      calcScale(innerRect.height, outerRect.height, hint || false)
    );

    return Math.min(
      dynamicScale,
      maxScale || Number.MAX_VALUE,
      (maxHeight || Number.MAX_VALUE) / innerRect.height,
      (maxWidth || Number.MAX_VALUE) / innerRect.width
    );
  }, [cover, hint, innerRect, maxScale, maxHeight, maxWidth, outerRect]);

  const applyResize = (entries: ResizeObserverEntry[]) =>
    entries.forEach((entry: any) => {
      switch (entry.target) {
        case innerRef.current:
          setInnerRect(entry.contentRect);
          break;
        case outerRef.current:
          setOuterRect(entry.contentRect);
          break;
      }
    });

  useEffect(() => {
    const observer = createObserver(applyResize, !!safeMode);

    observer.observe(innerRef.current!);
    observer.observe(outerRef.current!);

    return () => {
      observer.disconnect();
    };
  }, [safeMode]);

  return (
    <div
      className={className}
      ref={outerRef}
      style={{
        height: '100%',
        width: '100%',
        alignItems: valignMap[valign || ''] || 'center',
        border: 'none',
        display: 'flex',
        justifyContent: alignMap[align || ''] || 'space-around',
        margin: 0,
        overflow: 'hidden',
        padding: 0,
        ...style,
      }}
    >
      <div
        ref={innerRef}
        style={{
          transform: `scale(${scale})`,
          transformOrigin: `${valign || 'center'} ${align || 'center'}`,
        }}
      >
        <PreserveRatioContext.Provider value={{ scale }}>
          {children}
        </PreserveRatioContext.Provider>
      </div>
    </div>
  );
}
