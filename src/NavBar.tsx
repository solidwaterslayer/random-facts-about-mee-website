import { Container, Nav, Navbar } from 'react-bootstrap';

function NavBar() { return (
	<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
		<Container>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="me-auto"></Nav>
				<Nav>
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#features">Features</Nav.Link>
					<Nav.Link href="#pricing">Pricing</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Container>
	</Navbar>
)}

export default NavBar
