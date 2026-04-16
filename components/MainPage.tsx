import Experience from './Experience'
import Profile from './Profile'
import ProjectsWithModal from './ProjectsWithModal'
import Skills from './Skills'

const MainPage = () => {
  return (
    <div className='w-5/6 h-screen overflow-y-scroll [scrollbar-width:none]'>
        <Profile/>
        <Experience/>
        <ProjectsWithModal/>
        <Skills/>
    </div>
  )
}

export default MainPage