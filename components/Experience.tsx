interface Experience {
    role: string;
    company: string;
    duration: string;
    image: string;
    description: string[];
}
const Experience = () => {

    const experiences = [
        {
            role:'Software Development Engineer',
            company:'To The New',
            duration:'Jul 2025 - Present',
            image:'',
            description: [
                'Designed complex UI systems (tournament brackets) using Redux, ensuring scalable state management and high performance',
                'Developed frontend-heavy applications using React.js and Next.js, improving SEO and accessibility scores'
            ]
        },
        {
            role:'Software Development Engineer Trainee',
            company:'To The New',
            duration:'Jan 2025 -Jul 2025',
            image:'',
            description: [
                'Built a full-stack doctor appointment platform with real-time booking and secure authentication',
                'Participated in code reviews and improved code quality standards'
            ]
        },

    ]

    const ExperienceCard = ({experience}: {experience: Experience})=>{
        return (
            <div className="min-w-full shrink-0 snap-center border border-zinc-800 opacity-90 bg-zinc-900 backdrop-blur-sm p-4 rounded-md transition-colors duration-200 hover:bg-zinc-800 md:min-w-0 md:w-full md:snap-none md:shrink">
                <h4 className='text-[20px] font-semibold mb-2 text-white'>{experience.role}</h4>
                <p className='text-sm tracking-tight text-zinc-400'>{experience.company}</p>
                <p className='text-sm tracking-tight text-zinc-400'>{experience.duration}</p>
                <ul className='list-disc list-inside text-[12px] text-zinc-400 mt-2'>
                    {experience.description.slice(0,2).map((desc, index) => (
                        <li key={index} className="text-pretty">{desc}</li>
                    ))}
                </ul>
            </div>
        )
    }
  return (
    <div id="experience" className='w-full px-4 pb-10 sm:px-6 md:px-10'>
        <h3 className='text-2xl font-bold text-white sm:text-[30px]'>Experience</h3>
        <div className="flex w-full flex-row gap-4 overflow-x-auto scroll-smooth py-5 [scrollbar-width:none] snap-x snap-mandatory md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:snap-none">
        {experiences.map((experience, index)=>(
            <ExperienceCard key={index} experience={experience}/>
        ))}
        </div>

    </div>
  )
}

export default Experience