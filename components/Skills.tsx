interface SkillCategory {
  title: string
  items: string[]
}

const Skills = () => {
  const categories: SkillCategory[] = [
    { title: 'Languages', items: ['JavaScript', 'SQL'] },
    { title: 'Frontend', items: ['React.js', 'Next.js', 'HTML', 'CSS'] },
    { title: 'Backend', items: ['Node.js', 'Express.js'] },
    { title: 'Databases', items: ['PostgreSQL', 'MySQL'] },
    { title: 'Tools', items: ['Git', 'Postman', 'Redux'] },
    {
      title: 'Core strengths',
      items: [
        'SEO Optimization',
        'Performance Tuning',
        'Scalable UI Architecture',
      ],
    },
  ]

  return (
    <div id="skills" className="w-full px-4 pb-10 sm:px-6 md:px-10">
      <h3 className="text-2xl font-bold text-white sm:text-[30px]">Skills</h3>
      <div className="flex gap-4 overflow-x-auto py-5 [scrollbar-width:none] sm:gap-5">
        {categories.map((category) => (
          <div
            key={category.title}
            className="min-w-[220px] max-w-[280px] shrink-0 rounded-md border border-zinc-800 bg-zinc-900/90 p-4 opacity-90 backdrop-blur-sm transition-colors duration-200 hover:bg-zinc-800/90"
          >
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#1DB954]">
              {category.title}
            </h4>
            <ul className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-zinc-700 px-2.5 py-1 text-xs text-zinc-300 transition-colors hover:border-[#1DB954]/60 hover:text-white"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
