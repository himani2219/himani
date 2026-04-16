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
import { useEffect, useState } from 'react'

const ICONS: Record<NavSectionId, IconType> = {
  home: HiHome,
  experience: HiBriefcase,
  education: HiAcademicCap,
  projects: HiFolderOpen,
  skills: HiSparkles,
}

export default function SidebarNavLinks() {
  const [activeId, setActiveId] = useState<NavSectionId>('home')

  useEffect(() => {
    const root = document.getElementById('main-content')
    if (!root) return

    const updateActive = () => {
      const trigger = root.scrollTop + 120
      let current: NavSectionId = 'home'
      for (const { id } of NAV_SECTIONS) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= trigger) {
          current = id
        }
      }
      setActiveId(current)
    }

    updateActive()
    root.addEventListener('scroll', updateActive, { passive: true })
    return () => root.removeEventListener('scroll', updateActive)
  }, [])

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
