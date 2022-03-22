import {Container, Nav, Navbar} from 'react-bootstrap'
import {Link, useLocation} from 'react-router-dom'
import '../index.css'

export default function NavBar() {
	return (
		<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
			<Container>
				<Navbar.Brand className='text-danger'>{useLocation().pathname}</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='me-auto' />
					<Nav>
						<Nav.Link><Link to='/' className='nav-link'>home</Link></Nav.Link>
						<Nav.Link><Link to='projects' className='nav-link'>projects</Link></Nav.Link>
						<Nav.Link><Link to='about' className='nav-link'>about</Link></Nav.Link>
					</Nav>
					<Navbar.Brand className='text-danger'>L</Navbar.Brand>
					<Navbar.Brand className='text-danger'>G</Navbar.Brand>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}
