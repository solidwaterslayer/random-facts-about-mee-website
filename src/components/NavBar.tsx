import {Container, Nav, Navbar} from 'react-bootstrap'
import {Link, useLocation} from 'react-router-dom'
import '../index.css'

export default function NavBar() {
	return (
		<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
			<Container>
				<Navbar.Brand className='text-danger'>{useLocation().pathname.substring(0, 10)}</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='me-auto' />
					<Nav>
						<Nav.Link as={Link} to='/' className='nav-link'>home</Nav.Link>
						<Nav.Link as={Link} to='projects' className='nav-link'>projects</Nav.Link>
						<Nav.Link as={Link} to='about' className='nav-link'>about</Nav.Link>
					</Nav>
					<Navbar.Brand className='text-danger'>L</Navbar.Brand>
					<Navbar.Brand className='text-danger'>G</Navbar.Brand>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}
