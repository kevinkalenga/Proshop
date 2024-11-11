import {Navbar, Nav, Container, NavbarToggle, NavbarCollapse} from 'react-bootstrap';
import {FaShoppingCart, FaUser} from 'react-icons/fa';
import {LinkContainer} from 'react-router-bootstrap'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <header>
        <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
            <Container>
                <LinkContainer to='/'>
                <Navbar.Brand>
                    <img src={logo} alt="ProShop" />
                    ProShop
                </Navbar.Brand>
                </LinkContainer>
                <NavbarToggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className='ms-auto'>
                      <LinkContainer to='/cart' >
                        <Nav.Link href='/cart'><FaShoppingCart />Cart</Nav.Link>
                       </LinkContainer>
                       <LinkContainer to='/login' >
                         <Nav.Link ><FaUser />Sing In</Nav.Link>
                        </LinkContainer>
                    </Nav>

                </Navbar.Collapse>
            </Container>

        </Navbar>
    </header>
  )
}

export default Header