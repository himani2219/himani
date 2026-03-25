import Experience from './Experience'
import Profile from './Profile'
import Projects from './Projects'

const MainPage = () => {
  return (
    <div className='w-5/6 h-screen overflow-y-scroll [scrollbar-width:none]'>
        <Profile/>
        <Experience/>
        <Projects/>
    </div>
  )
}

export default MainPage