import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'

export default function NavBar() {
	let location = useLocation().pathname
  let [url, setURL] = useState(location)
	let urlRef = useRef(null)

  useEffect(() => {
		setURL(location)
		gsap.from(urlRef.current, { duration: 1, ease: 'bounce', opacity: 0, x: 100, })
	}, [location])

	return (
		<Navbar bg='dark' className='sticky-top' collapseOnSelect expand='lg' variant='dark'>
			<Container>
				<Navbar.Brand className='text-danger' ref={ urlRef }>{ ['/projects', '/about'].includes(url) ? url : '/' }</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='me-auto' />
					<Nav className='me-2'>
						<Nav.Link as={ Link } className={ !['/projects', '/about'].includes(url) ? 'nav-link active' : 'nav-link' } eventKey={ 0 } to=''>home</Nav.Link>
						<Nav.Link as={ Link } className={ url === '/projects' ? 'nav-link active' : 'nav-link' } eventKey={ 1 } to='projects'>projects</Nav.Link>
						<Nav.Link as={ Link } className={ url === '/about' ? 'nav-link active' : 'nav-link' } eventKey={ 2 } to='about'>about</Nav.Link>
					</Nav>
					<div className='my-2'>
						<Navbar.Brand>
							<a className='text-danger' href='https://www.linkedin.com/in/michael-tran-012345679/' rel='noreferrer noopener' target='_blank'>
								<FontAwesomeIcon icon={ faLinkedin } />
							</a>
						</Navbar.Brand>
						<Navbar.Brand>
							<a className='text-danger' href='https://github.com/solidwaterslayer' rel='noreferrer noopener' target='_blank'>
								<FontAwesomeIcon icon={ faGithub } />
							</a>
						</Navbar.Brand>
					</div>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}
