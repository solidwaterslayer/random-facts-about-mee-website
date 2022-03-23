import { useEffect, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import '../index.css'

export default function NavBar() {
	let location = useLocation().pathname
  let [url, setURL] = useState(location)
  useEffect(() => { setURL(location) }, [location])

	return (
		<Navbar bg='dark' collapseOnSelect expand='lg' variant='dark'>
			<Container>
				<Navbar.Brand className='text-danger'>{ ['/projects', '/about'].includes(url) ? url : '/' }</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='me-auto' />
					<Nav>
						<Nav.Link as={Link} className={ !['/projects', '/about'].includes(url) ? 'nav-link active' : 'nav-link' } to=''>home</Nav.Link>
						<Nav.Link as={Link} className={ url === '/projects' ? 'nav-link active' : 'nav-link' } to='projects'>projects</Nav.Link>
						<Nav.Link as={Link} className={ url === '/about' ? 'nav-link active' : 'nav-link' } to='about'>about</Nav.Link>
					</Nav>
					<Navbar.Brand className='text-danger'>L</Navbar.Brand>
					<Navbar.Brand className='text-danger'>G</Navbar.Brand>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}
