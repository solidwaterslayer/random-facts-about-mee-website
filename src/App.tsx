import { Route, Routes } from 'react-router-dom'
import About from './components/about/About'
import Home from './components/home/Home'
import NavBar from './components/NavBar'
import Projects from './components/Projects'

export default function App() {
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
