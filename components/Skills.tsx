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
    <div id="skills" className="px-10 pb-10">
      <h3 className="text-[30px] text-white font-bold">Skills</h3>
      <div className="flex overflow-x-scroll [scrollbar-width:none] gap-4 py-5">
        {categories.map((category) => (
          <div
            key={category.title}
            className="border border-zinc-800 opacity-90 bg-zinc-900 backdrop-blur-sm p-4 rounded-md min-w-[220px] max-w-[280px] shrink-0 hover:bg-zinc-800/90 transition-colors duration-200"
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#1DB954] mb-3">
              {category.title}
            </h4>
            <ul className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <li
                  key={item}
                  className="text-xs text-zinc-300 border border-zinc-700 rounded-full px-2.5 py-1 hover:border-[#1DB954]/60 hover:text-white transition-colors"
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
