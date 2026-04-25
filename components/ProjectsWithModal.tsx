'use client'

import { useEffect, useState } from 'react'
import ProjectDetailModal, { type ProjectDetail } from './ProjectDetailModal'

const ProjectsWithModal = () => {
  const [openProject, setOpenProject] = useState<ProjectDetail | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenProject(null)
    }
    if (openProject) {
      document.addEventListener('keydown', onKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [openProject])

  const projects: ProjectDetail[] = [
    {
      name: 'Worldplay',
      techstack: [
        'React',
        'TypeScript',
        'Redux Toolkit',
        'Tailwind CSS',
        'i18n',
      ],
      gitLink: 'World Cup bracket prediction platform',
      image: '/medical.jpeg',
      highlights: [
        'Built and maintained a scalable React + TypeScript application for World Cup bracket prediction workflows, including landing pages, dashboards, and bracket creation/editing.',
        'Designed a widget-driven UI architecture, normalizing server-defined blocks (wp.landing.*, wp.dashboard.*) via strongly-typed coercion utilities for extensible rendering.',
        'Managed state with Redux Toolkit, including async API integrations, bracket save flows, and robust loading/error handling.',
        'Developed reusable responsive components with Tailwind CSS and custom design tokens, including clamp() based fluid typography and cross-browser consistency.',
        'Implemented shared validation utilities for domain rules such as bracket naming constraints across modals and workflows.',
        'Integrated internationalization (i18n) across multiple locales with standardized translation keys.',
        'Enhanced dashboard and hero sections for richer BFF payloads (prize titles, subtitles, terms, feature toggles) with backward compatibility and strict type safety.',
      ],
    },
    {
      name: 'Bharti AXA Life Insurance - Platform Revamp',
      techstack: [
        'React.js',
        'Next.js',
        'SEO',
        'Accessibility',
        'API Integrations',
        'State Management',
      ],
      gitLink: 'Customer website and internal platform modernization',
      image: '/sunset.jpeg',
      highlights: [
        'Revamped customer-facing website and internal platforms using React.js + Next.js, improving SEO and accessibility (Lighthouse: 75 -> 90) and overall performance.',
        'Delivered features across website, customer service, and mCustomer tracks, optimizing journeys like policy purchase, servicing, and account management.',
        'Built a rider addition flow in customer service, enabling dynamic policy customization and improved user flexibility.',
        'Redesigned operations/admin panel with modular scalable UI components, improving configurability and internal usability.',
        'Integrated policy, claims, and payment APIs to ensure reliable end-to-end user workflows with optimized state handling.',
      ],
    },
  ]

  const ProjectCard = ({ project }: { project: ProjectDetail }) => (
    <button
      type="button"
      onClick={() => setOpenProject(project)}
      className="w-full cursor-pointer bg-zinc-900/80 p-4 text-left opacity-90 backdrop-blur-sm transition-colors duration-200 hover:bg-zinc-800 md:rounded-md md:border md:border-zinc-800"
    >
      <div className="relative mb-2 w-full overflow-hidden rounded-md bg-zinc-800">
        <img
            src={project.image}
            alt={project.name}
            className="w-full h-40 rounded-md"
          />
      </div>
      <h4 className="text-lg font-semibold text-white sm:text-[20px]">{project.name}</h4>
      <p className="mt-1 text-xs tracking-tight text-zinc-400 sm:text-sm">
        {project.techstack.join(', ')}
      </p>
      <ul className="mt-2 list-inside list-disc text-[11px] text-zinc-400 sm:text-[12px]">
        {project.highlights.slice(0, 2).map((desc, index) => (
          <li key={index} className="text-pretty">
            {desc}
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs font-medium text-[#1DB954]">View details</p>
    </button>
  )

  return (
    <div id="projects" className="w-full pb-10">
      <h3 className="px-4 text-2xl font-bold text-white sm:px-6 sm:text-[30px] md:px-10">
        Projects
      </h3>
      <div className="mt-5 flex w-full flex-col divide-y divide-zinc-800 border-y border-zinc-800 md:mt-5 md:grid md:grid-cols-2 md:gap-5 md:divide-y-0 md:border-0 md:px-10 md:py-5">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      {openProject && (
        <ProjectDetailModal project={openProject} onClose={() => setOpenProject(null)} />
      )}
    </div>
  )
}

export default ProjectsWithModal
