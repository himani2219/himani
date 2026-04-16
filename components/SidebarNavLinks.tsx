'use client'

import { NAV_SECTIONS, type NavSectionId } from '@/lib/navSections'
import type { IconType } from 'react-icons'
import {
  HiAcademicCap,
  HiBriefcase,
  HiFolderOpen,
  HiHome,
  HiSparkles,
} from 'react-icons/hi2'
import { useCallback, useEffect, useState } from 'react'

const ICONS: Record<NavSectionId, IconType> = {
  home: HiHome,
  experience: HiBriefcase,
  education: HiAcademicCap,
  projects: HiFolderOpen,
  skills: HiSparkles,
}

/** Distance from top of viewport; section is "passed" when its top is at or above this line. */
function getTriggerPx() {
  if (typeof window === 'undefined') return 120
  return Math.min(140, Math.max(72, window.innerHeight * 0.12))
}

function pickActiveSection(): NavSectionId {
  const trigger = getTriggerPx()
  let current: NavSectionId = 'home'
  for (const { id } of NAV_SECTIONS) {
    const el = document.getElementById(id)
    if (!el) continue
    const top = el.getBoundingClientRect().top
    if (top <= trigger) {
      current = id
    }
  }
  return current
}

export default function SidebarNavLinks() {
  const [activeId, setActiveId] = useState<NavSectionId>('home')

  const updateActive = useCallback(() => {
    setActiveId(pickActiveSection())
  }, [])

  useEffect(() => {
    const raf = requestAnimationFrame(() => updateActive())

    const main = document.getElementById('main-content')
    const opts: AddEventListenerOptions = { passive: true }

    window.addEventListener('scroll', updateActive, opts)
    window.addEventListener('resize', updateActive, opts)
    main?.addEventListener('scroll', updateActive, opts)

    // Lazy-loaded sections mount later; subtree changes refresh active state
    const mo =
      main &&
      new MutationObserver(() => {
        requestAnimationFrame(updateActive)
      })
    if (main && mo) {
      mo.observe(main, { childList: true, subtree: true })
    }

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', updateActive)
      window.removeEventListener('resize', updateActive)
      main?.removeEventListener('scroll', updateActive)
      mo?.disconnect()
    }
  }, [updateActive])

  return (
    <>
      {NAV_SECTIONS.map(({ id, label }) => {
        const Icon = ICONS[id]
        const isActive = activeId === id
        return (
          <a
            key={id}
            href={`#${id}`}
            className={`group flex shrink-0 items-center gap-2 rounded-full px-3 py-2.5 text-sm transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1DB954] md:gap-3 ${
              isActive
                ? 'bg-white/10 text-white'
                : 'text-[#b3b3b3] hover:bg-white/10 hover:text-white'
            }`}
            aria-current={isActive ? 'page' : undefined}
          >
            <Icon
              className={`h-5 w-5 shrink-0 transition-colors ${
                isActive
                  ? 'text-[#1DB954]'
                  : 'text-[#b3b3b3] group-hover:text-[#1DB954]'
              }`}
              aria-hidden
            />
            <span>{label}</span>
          </a>
        )
      })}
    </>
  )
}
