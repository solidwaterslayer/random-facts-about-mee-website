import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Route, Routes } from 'react-router-dom'
import About from './components/about/About'
import Home from './components/home/Home'
import NavBar from './components/NavBar'
import Projects from './components/projects/Projects'

export default function App() {
  gsap.registerPlugin(ScrollTrigger)
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='projects' element={ <Projects /> } />
        <Route path='about' element={ <About /> } />
        <Route path='*' element={ <Home /> } />
      </Routes>
    </>
  )
}
