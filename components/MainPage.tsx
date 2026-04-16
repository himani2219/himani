import dynamic from 'next/dynamic'
import Profile from './Profile'
import ViewportGate from './ViewportGate'

const chunkLoading = (
  <div className="flex min-h-24 w-full items-center justify-center" aria-hidden>
    <div className="h-6 w-6 animate-spin rounded-full border-2 border-zinc-600 border-t-[#1DB954]" />
  </div>
)

const Experience = dynamic(() => import('./Experience'), { loading: () => chunkLoading })
const Education = dynamic(() => import('./Education'), { loading: () => chunkLoading })
const ProjectsWithModal = dynamic(() => import('./ProjectsWithModal'), {
  loading: () => chunkLoading,
})
const Skills = dynamic(() => import('./Skills'), { loading: () => chunkLoading })

const MainPage = () => {
  return (
    <div
      id="main-content"
      className="min-h-0 min-w-0 flex-1 overflow-y-scroll scroll-smooth [scrollbar-width:none] motion-reduce:scroll-auto md:h-screen"
    >
      <Profile />
      <ViewportGate>
        <Experience />
      </ViewportGate>
      <ViewportGate>
        <Education />
      </ViewportGate>
      <ViewportGate>
        <ProjectsWithModal />
      </ViewportGate>
      <ViewportGate>
        <Skills />
      </ViewportGate>
    </div>
  )
}

export default MainPage
