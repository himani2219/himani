import type { IconType } from 'react-icons'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import {
  HiAcademicCap,
  HiBriefcase,
  HiEnvelope,
  HiFolderOpen,
  HiHome,
  HiSparkles,
} from 'react-icons/hi2'

type NavLink = {
  label: string
  linkto: string
  Icon: IconType
}

const Sidebar = () => {
  const links: NavLink[] = [
    { label: 'Home', linkto: '#', Icon: HiHome },
    { label: 'Experience', linkto: '#experience', Icon: HiBriefcase },
    { label: 'Education', linkto: '#education', Icon: HiAcademicCap },
    { label: 'Projects', linkto: '#projects', Icon: HiFolderOpen },
    { label: 'Skills', linkto: '#skills', Icon: HiSparkles },
  ]

  const socials = [
    {
      label: 'Email',
      linkto: '#',
      Icon: HiEnvelope,
    },
    {
      label: 'Github',
      linkto: '#',
      Icon: FaGithub,
    },
    {
      label: 'LinkedIn',
      linkto: '#',
      Icon: FaLinkedin,
    },
  ]

  return (
    <aside className="h-screen w-1/6 bg-black">
      <div className="flex h-full flex-col justify-between px-5 py-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-extrabold tracking-wide text-white">
            Himani Panchal
          </h2>
          <p className="text-sm text-zinc-500">Software Development Engineer</p>
          <nav className="mt-5 flex w-full flex-col gap-1" aria-label="Primary">
            {links.map(({ label, linkto, Icon }) => (
              <a
                key={label}
                href={linkto}
                className="group flex items-center gap-3 rounded-sm p-2 transition-all duration-200 hover:ml-2 hover:bg-zinc-800 active:bg-zinc-700"
              >
                <Icon
                  className="h-5 w-5 shrink-0 text-zinc-400 transition-colors group-hover:text-[#1DB954]"
                  aria-hidden
                />
                <span className="text-zinc-200">{label}</span>
              </a>
            ))}
          </nav>
        </div>
        <div className="flex flex-col gap-2 text-sm text-zinc-500">
          {socials.map(({ label, linkto, Icon }) => (
            <a
              key={label}
              href={linkto}
              className="group flex items-center gap-3 transition-colors hover:text-zinc-300"
            >
              <Icon
                className="h-5 w-5 shrink-0 text-zinc-500 transition-colors group-hover:text-[#1DB954]"
                aria-hidden
              />
              <span>{label}</span>
            </a>
          ))}
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
