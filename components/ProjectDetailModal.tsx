'use client'

export interface ProjectDetail {
  name: string
  techstack: string[]
  gitLink: string
  image: string
  highlights: string[]
}

type ProjectDetailModalProps = {
  project: ProjectDetail
  onClose: () => void
}

/**
 * Responsive project details overlay: bottom sheet on small viewports,
 * centered dialog from md and up. Does not manage open state or body scroll.
 */
const ProjectDetailModal = ({ project, onClose }: ProjectDetailModalProps) => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[200] flex justify-center pointer-events-none">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-detail-modal-title"
        className="modal-sheet-enter pointer-events-auto relative bottom-0 z-10 flex h-[80vh] w-full flex-col overflow-hidden rounded-t-2xl border border-zinc-800 border-b-0 bg-zinc-900 shadow-xl md:max-w-2xl"
      >
        <div className="relative top-0 z-20 shrink-0 border-b border-zinc-800 bg-zinc-900/95 px-3 py-2 backdrop-blur-sm sm:px-6 sm:py-5">
          <div className="flex justify-center pt-1 sm:pt-0">
            <span
              className="h-1 w-10 rounded-full bg-zinc-700 sm:hidden"
              aria-hidden
            />
          </div>
          <button
            type="button"
            onClick={onClose}
            className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center text-zinc-300 transition-colors hover:border-[#1DB954] hover:text-white sm:right-4 sm:h-9 sm:w-9"
            aria-label="Close"
          >
            <span className="text-xl leading-none" aria-hidden>
              ×
            </span>
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-2 sm:px-6 sm:pb-6 sm:pt-0 [scrollbar-width:thin]">
          <div className="relative mb-4 w-full overflow-hidden rounded-lg bg-zinc-800 sm:aspect-auto sm:mb-6">
            <img
            src={project.image}
            alt={project.name}
            className="w-full h-40 rounded-md"
          />
          </div>

          <h4
            id="project-detail-modal-title"
            className="pr-12 text-xl font-semibold leading-tight text-white sm:pr-10 sm:text-2xl md:text-3xl"
          >
            {project.name}
          </h4>
          <p className="mt-2 text-sm text-zinc-500">{project.gitLink}</p>

          <div className="mt-5 sm:mt-6">
            <h5 className="text-xs font-semibold uppercase tracking-wider text-[#1DB954]">
              Tech stack
            </h5>
            <ul className="mt-2 flex flex-wrap gap-2">
              {project.techstack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-zinc-700 px-2.5 py-1 text-xs text-zinc-300"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 pb-2 sm:mt-8">
            <h5 className="text-xs font-semibold uppercase tracking-wider text-[#1DB954]">
              Highlights
            </h5>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-300 sm:text-[15px]">
              {project.highlights.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetailModal
