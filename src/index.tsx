import React, {
  createContext,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'
import * as PropTypes from 'prop-types'

interface Context {
  scale: number
}

interface Rect {
  height: number
  width: number
}

const alignMap = {
  left: 'flex-start',
  center: 'space-around',
  right: 'flex-end'
}

const valignMap = {
  top: 'flex-start',
  center: 'center',
  bottom: 'flex-end'
}

export const PreserveRatioContext = createContext<Context>({ scale: 1 })
export function PreserveRatio({
  align,
  children,
  maxHeight,
  maxScale,
  maxWidth,
  safeMode,
  valign
}: PropTypes.InferProps<typeof PreserveRatio.propTypes>) {
  const innerRef = useRef(null)
  const outerRef = useRef(null)

  const [innerRect, setInnerRect] = useState<Rect>({ width: 0, height: 0 })
  const [outerRect, setOuterRect] = useState<Rect>({ width: 0, height: 0 })

  const scale = useMemo(() => {
    let dynamicScale = Math.min(
      outerRect.width / innerRect.width,
      outerRect.height / innerRect.height
    )

    return Math.min(
      dynamicScale,
      maxScale || Number.MAX_VALUE,
      (maxHeight || Number.MAX_VALUE) / innerRect.height,
      (maxWidth || Number.MAX_VALUE) / innerRect.width
    )
  }, [innerRect, maxScale, maxHeight, maxWidth, outerRect])

  const applyResize = (entries: any) =>
    entries.forEach((entry: any) => {
      switch (entry.target) {
        case innerRef.current:
          setInnerRect(entry.contentRect)
          break
        case outerRef.current:
          setOuterRect(entry.contentRect)
          break
      }
    })

  useEffect(() => {
    const observer = new ResizeObserver((entries: any) => {
      if (!Array.isArray(entries)) {
        return
      }

      if (safeMode) {
        window.requestAnimationFrame(() => {
          applyResize(entries)
        })
      } else {
        applyResize(entries)
      }
    })

    observer.observe(innerRef.current!)
    observer.observe(outerRef.current!)

    return () => {
      observer.disconnect()
    }
  }, [safeMode])

  const justifyContent = alignMap[align || ''] || 'space-around'
  const alignItems = valignMap[valign || ''] || 'center'

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
        padding: 0
      }}
    >
      <div
        ref={innerRef}
        style={{
          transform: `scale(${scale})`,
          transformOrigin: `${valign || 'center'} ${align || 'center'}`
        }}
      >
        <PreserveRatioContext.Provider value={{ scale }}>
          {children}
        </PreserveRatioContext.Provider>
      </div>
    </div>
  )
}

PreserveRatio.propTypes = {
  align: PropTypes.oneOf(['left', 'center', 'right']),
  children: PropTypes.node.isRequired,
  maxHeight: PropTypes.number,
  maxScale: PropTypes.number,
  maxWidth: PropTypes.number,
  safeMode: PropTypes.bool,
  valign: PropTypes.oneOf(['top', 'center', 'bottom'])
}
