interface EducationEntry {
  degree: string
  school: string
  period: string
}

const Education = () => {
  const entries: EducationEntry[] = [
    {
      degree: 'Master of Computer Applications (MCA)',
      school:
        'Banarsidas Chandiwala Institute of Information Technology, IP University',
      period: '2023 – 2025',
    },
    {
      degree: 'B.Sc. Computer Science (CGPA: 8.7)',
      school:
        'Sri Guru Gobind Singh College of Commerce, University of Delhi',
      period: '2020 – 2023',
    },
  ]

  return (
    <div id="education" className="w-full px-4 pb-10 sm:px-6 md:px-10">
      <h3 className="text-2xl font-bold text-white sm:text-[30px]">Education</h3>
      <div className="flex w-full flex-row gap-4 overflow-x-auto scroll-smooth py-5 [scrollbar-width:none] snap-x snap-mandatory md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:snap-none">
        {entries.map((entry) => (
          <article
            key={entry.degree}
            className="min-w-full shrink-0 snap-center rounded-md border border-zinc-800 bg-zinc-900/90 p-4 opacity-90 backdrop-blur-sm transition-colors duration-200 hover:bg-zinc-800/90 md:min-w-0 md:w-full md:snap-none md:shrink"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-[#1DB954]">
              {entry.period}
            </p>
            <h4 className="mt-2 text-lg font-semibold leading-snug text-white sm:text-[20px]">
              {entry.degree}
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">{entry.school}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Education
