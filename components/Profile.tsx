import React from 'react'

const Profile = () => {
  return (
    <div className='h-[80vh] py-15 px-10 relative'
    style={{
        background:'linear-gradient(180deg, #1DB954 0%, #27272a 70%, #18181b 100%)'
    }}>
        <div className="flex gap-4 items-center">
            <div className="h-60 w-60 bg-zinc-900 flex justify-center items-center font-bold text-[120px] text-white">H</div>
            <div className="flex flex-col mt-5">
                <div className='uppercase font-bold'>profile</div>
                <h1 className='text-[70px] font-extrabold'>Himani</h1>
                <div className="flex gap-2 transform scale-y-110">
                    <span>Software Development Engineer</span>
                    <span>•</span>
                    <span>New Delhi, India</span>
                    <span>•</span>
                    <span>To The New</span>
                </div>
            </div>
        </div>
        <div className="text-zinc-300 absolute description w-3/4 bottom-20">
            Software Development Engineer with experience building scalable, SEO-optimized web applications using React.js and Next.js. Strong in performance optimization, complex UI systems, and delivering production-ready features with measurable impact.
        </div>

    </div>
  )
}

export default Profile