import NavBar from './components/NavBar'
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'

export default function App() {
  return (
    <div className='bg-dark' style={{height: '100vh'}}>
      <NavBar />
      <Home />
      <Projects />
      <About />
    </div>
  )
}
