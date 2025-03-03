import { ReactNode, useEffect, useRef, useState } from 'react'

type Horizontal = 'left' | 'right' | 'center'
type Vertical = 'top' | 'bottom' | 'center'

type Axis = {
  vertical: Vertical
  horizontal: Horizontal
}

interface PopperProps {
  anchorEl?: HTMLElement | null
  open: boolean // need to consider to remove
  anchorOrigin?: Axis
  transformOrigin?: Axis
  children: ReactNode
  className: string
}

export const Popper = (props: PopperProps) => {
  const { anchorOrigin, transformOrigin, anchorEl, className = '' } = props
  const currentElmRef = useRef<HTMLDivElement | null>(null)
  const [position, setPosition] = useState({
    top: 0,
    left: 0,
  })

  useEffect(() => {
    if (!currentElmRef?.current || !anchorEl) {
      return
    }

    const anchorElBound = anchorEl.getBoundingClientRect()
    const currentElBound = currentElmRef.current.getBoundingClientRect()
    let top = 0
    let left = 0

    const handleVertical = () => {
      switch (anchorOrigin?.vertical) {
        case 'top':
          switch (transformOrigin?.vertical) {
            case 'top':
              top = anchorElBound.top
              break
            case 'bottom':
              top = anchorElBound.top - currentElBound.height
              break
            case 'center':
              top = anchorElBound.top - currentElBound.height / 2
              break
            default:
              top = anchorElBound.top
              break
          }
          break
        case 'bottom':
          switch (transformOrigin?.vertical) {
            case 'top':
              top = anchorElBound.bottom
              break
            case 'bottom':
              top = anchorElBound.bottom - currentElBound.height
              break
            case 'center':
              top = anchorElBound.bottom - currentElBound.height / 2
            default:
              top = anchorElBound.bottom
              break
          }
          break
        case 'center':
          switch (transformOrigin?.vertical) {
            case 'top':
              top = anchorElBound.top + anchorElBound.height / 2
              break
            case 'bottom':
              top =
                anchorElBound.top +
                anchorElBound.height / 2 -
                currentElBound.height
              break
            case 'center':
              top =
                anchorElBound.top +
                anchorElBound.height / 2 -
                currentElBound.height / 2
              break
            default:
              top = anchorElBound.top + anchorElBound.height / 2
              break
          }
          break
        default: // top
          switch (transformOrigin?.vertical) {
            case 'top':
              top = anchorElBound.top
              break
            case 'bottom':
              top = anchorElBound.top - currentElBound.height
              break
            case 'center':
              top = anchorElBound.top - currentElBound.height / 2
              break
            default:
              top = anchorElBound.top
              break
          }
      }
    }

    const handleHorizontal = () => {
      switch (anchorOrigin?.horizontal) {
        case 'left':
          switch (transformOrigin?.horizontal) {
            case 'left':
              left = anchorElBound.left
              break
            case 'right':
              left = anchorElBound.left - currentElBound.width
              break
            case 'center':
              left = anchorElBound.left - currentElBound.width / 2
              break
            default: // left
              left = anchorElBound.left
              break
          }
          break
        case 'right':
          switch (transformOrigin?.horizontal) {
            case 'left':
              left = anchorElBound.right
              break
            case 'right':
              left = anchorElBound.right - currentElBound.width
              break
            case 'center':
              left = anchorElBound.right - currentElBound.width / 2
            default: // left
              left = anchorElBound.right
              break
          }
          break
        case 'center':
          switch (transformOrigin?.horizontal) {
            case 'left':
              left = anchorElBound.left + anchorElBound.width / 2
              break
            case 'right':
              left =
                anchorElBound.left +
                anchorElBound.width / 2 -
                currentElBound.width
              break
            case 'center':
              left =
                anchorElBound.left +
                anchorElBound.width / 2 -
                currentElBound.width / 2
              break
            default: // left
              left = anchorElBound.top + anchorElBound.height / 2
              break
          }
          break
        default: // left
          switch (transformOrigin?.horizontal) {
            case 'left':
              left = anchorElBound.left
              break
            case 'right':
              left = anchorElBound.left - currentElBound.width
              break
            case 'center':
              left = anchorElBound.left - currentElBound.width / 2
              break
            default: // left
              left = anchorElBound.left
              break
          }
      }
    }

    handleVertical()
    handleHorizontal()

    setPosition({ top, left })
  }, [currentElmRef.current, anchorEl])

  useEffect(() => {
    if (!anchorEl) {
      return
    }

    const hideElement = () => {
      // click again to turn off
      anchorEl?.click()
    }

    document.addEventListener('click', hideElement)

    return () => {
      document.removeEventListener('click', hideElement)
    }
  }, [anchorEl])

  if (!anchorEl) {
    return null
  }

  return props.open ? (
    <div
      className={`bg-white p-3 min-w-[200px] rounded-md shadow-md z-10 ${className}`}
      ref={currentElmRef}
      style={{ position: 'fixed', ...position }}
    >
      {props.children}
    </div>
  ) : (
    <></>
  )
}
