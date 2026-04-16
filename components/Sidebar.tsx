import type { IconType } from 'react-icons'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiEnvelope } from 'react-icons/hi2'
import SidebarNavLinks from './SidebarNavLinks'

type SocialLink = {
  label: string
  linkto: string
  Icon: IconType
  external?: boolean
}

const Sidebar = () => {
  const socials: SocialLink[] = [
    {
      label: 'Email',
      linkto: 'mailto:himanipanchal3915@gmail.com',
      Icon: HiEnvelope,
    },
    {
      label: 'Github',
      linkto: 'https://github.com/himani2219',
      Icon: FaGithub,
      external: true,
    },
    {
      label: 'LinkedIn',
      linkto: 'https://www.linkedin.com/in/himani-7197ba203',
      Icon: FaLinkedin,
      external: true,
    },
  ]

  return (
    <aside className="flex w-full shrink-0 flex-col border-b border-white/10 bg-black md:h-screen md:w-[260px] md:border-r md:border-b-0">
      <div className="flex flex-col justify-between gap-6 px-4 py-5 md:h-full md:py-8">
        <div className="flex min-w-0 flex-col gap-1">
          <h2 className="text-xl font-extrabold tracking-tight text-white md:text-2xl">
            Himani Panchal
          </h2>
          <p className="text-sm text-[#b3b3b3]">Software Development Engineer</p>
          <nav
            className="mt-4 flex flex-row gap-1 overflow-x-auto [scrollbar-width:none] pb-1 md:mt-8 md:flex-col md:overflow-visible md:pb-0"
            aria-label="Primary"
          >
            <SidebarNavLinks />
          </nav>
        </div>
        <div className="hidden flex-col gap-1 text-sm text-[#b3b3b3] md:flex">
          {socials.map(({ label, linkto, Icon, external }) => (
            <a
              key={label}
              href={linkto}
              {...(external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className="group flex items-center gap-3 rounded-full px-3 py-2 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1DB954]"
            >
              <Icon
                className="h-5 w-5 shrink-0 text-[#b3b3b3] transition-colors group-hover:text-[#1DB954]"
                aria-hidden
              />
              <span>{label}</span>
            </a>
          ))}
        </div>
        <div className="flex flex-row flex-wrap gap-2 border-t border-white/10 pt-4 md:hidden">
          {socials.map(({ label, linkto, external }) => (
            <a
              key={label}
              href={linkto}
              {...(external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-[#b3b3b3] transition-colors hover:border-[#1DB954]/50 hover:text-white"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
