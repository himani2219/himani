'use client'

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react'

type ViewportGateProps = {
  children: ReactNode
  className?: string
  /** Shown until enough of the section is visible (see 20vh rule). */
  fallback?: ReactNode
  /** Extra margin passed to IntersectionObserver (does not change the 20vh rule). */
  rootMargin?: string
  /** If true, stop observing after the section has been revealed. */
  once?: boolean
}

const defaultFallback = (
  <div
    className="min-h-[min(40vh,24rem)] w-full animate-pulse rounded-lg"
    aria-hidden
  />
)

function visibleHeightMeetsThreshold(entry: IntersectionObserverEntry): boolean {
  if (!entry.isIntersecting) return false
  const visibleH = entry.intersectionRect.height
  const vh20 = typeof window !== 'undefined' ? window.innerHeight * 0.2 : 0
  const el = entry.target as HTMLElement
  const sectionH = Math.max(
    el.clientHeight,
    el.getBoundingClientRect().height,
    1
  )
  const required = Math.min(vh20, sectionH)
  return visibleH + 0.5 >= required
}

/**
 * Renders children only after at least 20vh of the gate (or the whole gate if shorter)
 * intersects the scroll root. Children should be lazy-loaded via next/dynamic for best effect.
 */
export default function ViewportGate({
  children,
  className,
  fallback = defaultFallback,
  rootMargin = '0px',
  once = true,
}: ViewportGateProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    /**
     * Use the viewport as root so intersection updates correctly on mobile when the
     * page scrolls on the document/body. (#main-content is only a scroll container on md+.)
     */
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (visibleHeightMeetsThreshold(entry)) {
            setVisible(true)
            if (once) {
              observer.disconnect()
            }
            break
          }
        }
      },
      {
        root: null,
        rootMargin,
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
      }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [once, rootMargin])

  return (
    <div ref={ref} className={className}>
      {visible ? (
        <div className="reveal-section">{children}</div>
      ) : (
        fallback
      )}
    </div>
  )
}
