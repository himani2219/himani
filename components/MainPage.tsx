import Education from './Education'
import Experience from './Experience'
import Profile from './Profile'
import ProjectsWithModal from './ProjectsWithModal'
import Skills from './Skills'

const MainPage = () => {
  return (
    <div
      id="main-content"
      className="min-h-0 min-w-0 flex-1 overflow-y-scroll scroll-smooth [scrollbar-width:none] motion-reduce:scroll-auto md:h-screen"
    >
      <Profile />
      <Experience />
      <Education />
      <ProjectsWithModal />
      <Skills />
    </div>
  )
}

export default MainPage
