const Profile = () => {
  return (
    <div
      id="home"
      className="relative min-h-[80vh] px-4 py-12 sm:px-6 md:px-10"
      style={{
        background:
          'linear-gradient(180deg, #1DB954 0%, #27272a 70%, #121212 100%)',
      }}
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-8">
        <div className="flex h-48 w-48 shrink-0 items-center justify-center bg-zinc-900 text-7xl font-bold text-white sm:h-60 sm:w-60 sm:text-[120px]">
          H
        </div>
        <div className="flex min-w-0 flex-col gap-2">
          <p className="text-sm font-medium text-white/90">Hey, I&apos;m</p>
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-[70px]">
            Himani
          </h1>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-zinc-200 sm:text-base">
            <span>Software Development Engineer</span>
            <span className="text-zinc-500">•</span>
            <span>New Delhi, India</span>
            <span className="text-zinc-500">•</span>
            <span>To The New</span>
          </div>
        </div>
      </div>
      <div className="mt-10 max-w-3xl text-pretty text-base leading-relaxed text-zinc-200 md:mt-12">
                    Software Development Engineer with experience building scalable, SEO-optimized web applications using React.js and Next.js. Strong in performance optimization, complex UI systems, and delivering production-ready features with measurable impact.

      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="mailto:himanipanchal3915@gmail.com"
          className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Email me
        </a>
        <a
          href="https://github.com/himani2219"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1DB954]"
        >
          GitHub
        </a>
      </div>
    </div>
  )
}

export default Profile
