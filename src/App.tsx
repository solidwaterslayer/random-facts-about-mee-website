import { Route, Routes } from 'react-router-dom'
import About from './components/about/About'
import Home from './components/home/Home'
import NavBar from './components/NavBar'
import Projects from './components/Projects'

export default function App() {
  return (
    <>
      <NavBar />
      <div className='mx-0 row'>
        <div className='col-md-3'></div>
        <div className='border-danger border-start col-md-9 col-sm-12'>
          <Routes>
            <Route path='projects' element={ <Projects /> } />
            <Route path='about' element={ <About /> } />
            <Route path='*' element={ <Home /> } />
          </Routes>
        </div>
      </div>
    </>
  )
}
