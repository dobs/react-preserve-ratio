import React, {useEffect, useMemo, useRef, useState} from 'react';
import * as PropTypes from 'prop-types';

interface Rect {
  height: number;
  width: number;
}

const baseStyles = {
  alignItems: 'center',
  border: 'none',
  display: 'flex',
  justifyContent: 'space-around',
  margin: 0,
  overflow: 'hidden',
  padding: 0,
};

export function PreserveRatio({
  children,
  maxHeight,
  maxScale,
  maxWidth,
  safeMode,
}: PropTypes.InferProps<typeof PreserveRatio.propTypes>) {
  const innerRef = useRef(null);
  const outerRef = useRef(null);

  const [innerRect, setInnerRect] = useState<Rect>({width: 0, height: 0});
  const [outerRect, setOuterRect] = useState<Rect>({width: 0, height: 0});

  const scale = useMemo(() => {
    let dynamicScale = Math.min(
      outerRect.width / innerRect.width,
      outerRect.height / innerRect.height
    );

    return Math.min(
      dynamicScale,
      maxScale || Number.MAX_VALUE,
      (maxHeight || Number.MAX_VALUE) / innerRect.height,
      (maxWidth || Number.MAX_VALUE)/ innerRect.width
    );
  }, [innerRect, maxScale, maxHeight, maxWidth, outerRect]);

  const applyResize = (entries: any) => entries.forEach((entry: any) => {
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

  return (
    <div
      ref={outerRef}
      style={{
        height: '100%',
        width: '100%',
        ...baseStyles,
      }}
    >
      <div
        ref={innerRef}
        style={{
          transform: `scale(${scale})`,
        }}
      >
        {children}
      </div>
    </div>
  );
}

PreserveRatio.propTypes = {
  children: PropTypes.node.isRequired,
  maxHeight: PropTypes.number,
  maxScale: PropTypes.number,
  maxWidth: PropTypes.number,
  safeMode: PropTypes.bool,
};
