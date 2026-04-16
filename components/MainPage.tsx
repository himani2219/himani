import Experience from './Experience'
import Profile from './Profile'
import Projects from './Projects'
import Skills from './Skills'

const MainPage = () => {
  return (
    <div className='w-5/6 h-screen overflow-y-scroll [scrollbar-width:none]'>
        <Profile/>
        <Experience/>
        <Projects/>
        <Skills/>
    </div>
  )
}

export default MainPage