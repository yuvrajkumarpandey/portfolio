import './App.css'
import Blogs from './components/Blogs'
import Certification from './components/Certification'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Topbar from './components/Topbar'

function App() {
  return (
    <div className='w-full h-full max-w-full flex justify-center'>
      <div className='w-full md:w-2xl border-x border-[#1D1F29] flex flex-col'>

        <Topbar />

        <Profile />

        <Projects />

        <Certification />

        <Blogs />

      </div>
    </div>
  )
}

export default App
