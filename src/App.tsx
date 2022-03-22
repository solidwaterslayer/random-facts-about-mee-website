import {BrowserRouter, Route, Routes} from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Projects from './components/Projects'

export default function App() {
  return (
    <div className='bg-dark' style={{height: '100vh', fontFamily: 'Roboto Mono, monospace',}}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='projects' element={<Projects />} />
          <Route path='about' element={<About />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
