import {Container, Nav, Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function NavBar() { return (
	<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
		<Container>
	    <Navbar.Brand className='text-danger'>useLocation().pathname</Navbar.Brand>
			<Navbar.Toggle aria-controls='responsive-navbar-nav' />
			<Navbar.Collapse id='responsive-navbar-nav'>
				<Nav className='me-auto' />
				<Nav>
					<Nav.Link><Link to='/' className='text-light text-decoration-none'>home</Link></Nav.Link>
					<Nav.Link><Link to='projects' className='text-light text-decoration-none'>projects</Link></Nav.Link>
					<Nav.Link><Link to='about' className='text-light text-decoration-none'>about</Link></Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Container>
	</Navbar>
)}
