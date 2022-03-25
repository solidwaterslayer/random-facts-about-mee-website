import { Route, Routes } from 'react-router-dom'
import About from './components/about/About'
import Home from './components/home/Home'
import NavBar from './components/NavBar'
import Projects from './components/Projects'

export default function App() {
  return (
    <>
      <NavBar />
      <div className="row mx-0">
        <div className="col-md-3"></div>
        <div className="col-md-9 col-sm-12 border-start border-danger">
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
