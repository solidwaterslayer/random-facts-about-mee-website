import { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Projects from './components/Projects'

export default function App() {
  let location = useLocation().pathname
  if (!['/projects', '/about'].includes(location)) { location = '/' }

  let [url, setURL] = useState(location)

  return (
    <div className='bg-dark' style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '1.1em', height: '100vh', }}>
      <NavBar url={ url } setURL={ setURL }/>
      <Routes>
        <Route path='projects' element={ <Projects /> } />
        <Route path='about' element={ <About /> } />
        <Route path='*' element={ <Home /> } />
      </Routes>
    </div>
  )
}
