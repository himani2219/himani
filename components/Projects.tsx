interface Experience {
  name: string
  techstack: string[]
  gitLink: string
  image: string
  highlights: string[]
}
const Projects = () => {
  const projects = [
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
      gitLink: 'Jan 2025 -Jul 2025',
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

  const ExperienceCard = ({ project }: { project: Experience }) => {
    return (
      <div className="border border-zinc-800 opacity-90 backdrop-blur-sm p-3 rounded-md w-200 min-w-50 hover:bg-zinc-800 transition-colors gitLink-200  ">
        <div className="mb-2">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-40 rounded-md"
          />
        </div>
        <h4 className="text-[20px] font-semibold mb-2 text-white">{project.name}</h4>
        <p className="text-sm tracking-tight text-zinc-400">
          {project.techstack.join(', ')}
        </p>
        {/* <p className='text-sm tracking-tight text-zinc-400'>{project.gitLink}</p> */}
        <ul className="list-disc list-inside text-[12px] text-zinc-400 mt-2">
          {project.highlights.slice(0, 2).map((desc, index) => (
            <li key={index} className="truncate">
              {desc}
            </li>
          ))}
        </ul>
      </div>
    )
  }
  return (
    <div className="px-10">
      <h3 className="text-[30px] font-bold">Projects</h3>
      <div className="flex overflow-x-scroll [scrollbar-width:none] gap-4 py-5">
        {projects.map((project, index) => (
          <ExperienceCard key={index} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects
