/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from 'popmotion'
import { images } from './image-data'

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
}

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity
}

export const Carousel = (): JSX.Element => {
  const [[page, direction], setPage] = useState([0, 0])
  const timeoutRef = useRef(-1)
  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, images.length, page)

  const paginate = useCallback(
    (newDirection: number) => {
      setPage([page + newDirection, newDirection])
    },
    [page]
  )

  const changeSlides = useCallback(() => {
    paginate(1)
  }, [paginate])

  useEffect(() => {
    // first time render or re-render if there is a depdendancy
    timeoutRef.current = setTimeout(changeSlides, 3000) as any // 1000ms = 1sec

    // run this code when the component destroys
    return () => {
      clearTimeout(timeoutRef.current)
    }
  }, [changeSlides])

  const handleDragging = (e: any, { offset, velocity }: any): void => {
    const swipe = swipePower(offset.x, velocity.x)
    clearTimeout(timeoutRef.current)
    if (swipe < -swipeConfidenceThreshold) {
      paginate(1)
    } else if (swipe > swipeConfidenceThreshold) {
      paginate(-1)
    }
  }
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: 470,
        overflow: 'hidden',
        bg: 'black',
      }}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
          }}
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 400, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={handleDragging}
        />
      </AnimatePresence>
    </Box>
  )
}
