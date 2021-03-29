import * as React from 'react';
import {
  createContext,
  FC,
  HTMLAttributes,
  ReactChild,
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

export const PreserveRatioContext = createContext<Context>({ scale: 1 });

export interface PreserveRatioProps extends HTMLAttributes<HTMLDivElement> {
  align?: Align;
  children: ReactChild;
  cover?: boolean;
  maxHeight?: number;
  maxScale?: number;
  maxWidth?: number;
  safeMode?: boolean;
  valign?: VAlign;
}

export const PreserveRatio: FC<PreserveRatioProps> = ({
  align,
  children,
  cover,
  maxHeight,
  maxScale,
  maxWidth,
  safeMode,
  valign,
}) => {
  const innerRef = useRef(null);
  const outerRef = useRef(null);

  const [innerRect, setInnerRect] = useState<Rect>({ width: 0, height: 0 });
  const [outerRect, setOuterRect] = useState<Rect>({ width: 0, height: 0 });

  const scale = useMemo(() => {
    const cmp = cover ? Math.max : Math.min;

    const dynamicScale = cmp(
      outerRect.width / innerRect.width,
      outerRect.height / innerRect.height
    );

    return Math.min(
      dynamicScale,
      maxScale || Number.MAX_VALUE,
      (maxHeight || Number.MAX_VALUE) / innerRect.height,
      (maxWidth || Number.MAX_VALUE) / innerRect.width
    );
  }, [cover, innerRect, maxScale, maxHeight, maxWidth, outerRect]);

  const applyResize = (entries: any) =>
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
    const observer = new ResizeObserver((entries: any) => {
      if (!Array.isArray(entries)) {
        return;
      }

      if (safeMode) {
        window.requestAnimationFrame(() => {
          applyResize(entries);
        });
      } else {
        applyResize(entries);
      }
    });

    observer.observe(innerRef.current!);
    observer.observe(outerRef.current!);

    return () => {
      observer.disconnect();
    };
  }, [safeMode]);

  const justifyContent = alignMap[align || ''] || 'space-around';
  const alignItems = valignMap[valign || ''] || 'center';

  return (
    <div
      ref={outerRef}
      style={{
        height: '100%',
        width: '100%',
        alignItems,
        border: 'none',
        display: 'flex',
        justifyContent,
        margin: 0,
        overflow: 'hidden',
        padding: 0,
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
};
