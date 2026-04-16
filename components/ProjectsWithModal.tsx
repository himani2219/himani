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
      name: 'Doctor Appointment Booking System',
      techstack: [
        'Next.js',
        'Node.js',
        'Express.js',
        'PostgreSQL',
        'Passport.js',
        'Socket.io',
        'JWT',
      ],
      gitLink: 'Jul 2025 - Present',
      image: '/medical.jpeg',
      highlights: [
        'Developed a full-stack platform for booking and managing doctor appointments with real-time availability updates',
        'Implemented role-based authentication system supporting patients, doctors, and administrators',
        'Created admin workflows for managing appointments, doctor schedules, and patient records',
        'Enabled real-time updates using Socket.io for instant appointment confirmations and notifications',
        'Improved system efficiency through event-driven architecture and optimized database queries',
        'Built responsive UI ensuring seamless experience across all devices',
      ],
    },
    {
      name: 'Voice-Based Weather Application',
      techstack: [
        'React.js',
        'Node.js',
        'Express.js',
        'Web Speech API',
        'Geolocation API',
        'OpenWeather API',
      ],
      gitLink: 'Jan 2025 - Jul 2025',
      image: '/sunset.jpeg',
      highlights: [
        'Built voice-enabled weather application improving accessibility for visually impaired users',
        'Integrated Web Speech API for natural language voice command processing',
        'Implemented geolocation-based weather fetching for automatic location detection and real-time updates',
        'Created intuitive voice feedback system providing weather information audibly',
        'Designed responsive interface with high contrast mode for users with low vision',
        'Optimized API calls to reduce latency and improve user experience',
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
