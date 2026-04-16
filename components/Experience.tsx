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
            <div className="w-full shrink-0 rounded-md border border-zinc-800 bg-zinc-900/90 p-4 opacity-90 backdrop-blur-sm transition-colors duration-200 hover:bg-zinc-800">
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
        <div className="flex w-full flex-col gap-4 py-5 md:grid md:grid-cols-2 md:gap-5">
        {experiences.map((experience, index)=>(
            <ExperienceCard key={index} experience={experience}/>
        ))}
        </div>

    </div>
  )
}

export default Experience