import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../index.css'

export default function NavBar({ url, setURL }: any) {
	function changeURL(event: any) {
		let location = event.target.textContent
		if (location === 'home') { location = '' }

		setURL('/' + location)
	}

	return (
		<Navbar bg='dark' collapseOnSelect expand='lg' variant='dark'>
			<Container>
				<Navbar.Brand className='text-danger'>{url}</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='me-auto' />
					<Nav>
						<Nav.Link as={Link} className={ url === '/' ? 'nav-link active' : 'nav-link' } to='' onClick={ changeURL }>home</Nav.Link>
						<Nav.Link as={Link} className={ url === '/projects' ? 'nav-link active' : 'nav-link' } to='projects' onClick={ changeURL }>projects</Nav.Link>
						<Nav.Link as={Link} className={ url === '/about' ? 'nav-link active' : 'nav-link' } to='about' onClick={ changeURL }>about</Nav.Link>
					</Nav>
					<Navbar.Brand className='text-danger'>L</Navbar.Brand>
					<Navbar.Brand className='text-danger'>G</Navbar.Brand>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}
