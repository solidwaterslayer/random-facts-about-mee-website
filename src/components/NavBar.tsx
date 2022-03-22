import { Container, Nav, Navbar } from 'react-bootstrap';

export default function NavBar() { return (
	<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
		<Container>
	    <Navbar.Brand className='text-danger'>useLocation().pathname</Navbar.Brand>
			<Navbar.Toggle aria-controls='responsive-navbar-nav' />
			<Navbar.Collapse id='responsive-navbar-nav'>
				<Nav className='me-auto'></Nav>
				<Nav>
					<Nav.Link href='#'>home</Nav.Link>
					<Nav.Link href='#features'>projects</Nav.Link>
					<Nav.Link href='#pricing'>about</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Container>
	</Navbar>
)}
