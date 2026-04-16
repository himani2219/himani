import React from 'react'

const Sidebar = () => {
    const links = [
        {
            label:'Home',
            icon:'$',
            linkto: '#'
        },
        {
            label:'Experience',
            icon:'$',
            linkto: '#experience'
        },
        {
            label:'Education',
            icon:'$',
            linkto: '#education'
        },
        {
            label:'Projects',
            icon:'$',
            linkto: '#projects'
        },
        {
            label:'Skills',
            icon:'$',
            linkto: '#skills'
        }
    ]
    const socials = [
        {
            label:'Email',
            icon:'$',
            linkto: '#'
        },
        {
            label:'Github',
            icon:'$',
            linkto: '#'
        },
        {
            label:'LinkedIn',
            icon:'$',
            linkto: '#'
        },
    ]
  return (
    <aside className='w-1/6 bg-black h-screen'>
        <div className="flex flex-col justify-between h-full px-5 py-8">
            <div className="flex flex-col gap-2">
                <h2 className='text-2xl tracking-wide font-extrabold text-white'>Himani Panchal</h2>
                <p className='text-zinc-500 text-sm'>Software Development Engineer</p>
                <div className="flex flex-col w-full gap-1 mt-5">
                    {links.map((link, i)=>(
                        <a key={i} href={link.linkto} className='flex gap-2 p-2 active:bg-zinc-700 rounded-sm hover:ml-2 transition-all duration-200'>
                            <span>{link.icon}</span>
                            <span>{link.label}</span>
                        </a>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-2 text-zinc-500 text-sm">
                {socials.map((link, i)=>(
                        <a key={i} href={link.linkto} className='flex gap-2'>
                            <span>{link.icon}</span>
                            <span>{link.label}</span>
                        </a>
                    ))}
            </div>
        </div>
    </aside>
  )
}

export default Sidebar