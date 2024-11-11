import {Navbar, Nav, Container, NavbarToggle, NavbarCollapse} from 'react-bootstrap';
import {FaShoppingCart, FaUser} from 'react-icons/fa';

const Header = () => {
  return (
    <header>
        <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
            <Container>
                <Navbar.Brand href='/'>ProShop</Navbar.Brand>
                <NavbarToggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className='ms-auto'>
                       <Nav.Link href='/cart'><FaShoppingCart />Cart</Nav.Link>
                       <Nav.Link href='/login'><FaUser />Sing In</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>

        </Navbar>
    </header>
  )
}

export default Header