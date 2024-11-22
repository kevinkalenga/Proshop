import {Navbar, Nav, Container, NavDropdown, Badge, NavbarToggle} from 'react-bootstrap';
import {FaShoppingCart, FaUser} from 'react-icons/fa';
import {LinkContainer} from 'react-router-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import logo from '../assets/logo.png';
import {Link} from "react-router-dom"


const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);
  
  
  const logoutHandler = async () => {
     console.log("Out")
  };
  
  
  
  
  
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
                     
                        <Nav.Link href='/cart'>
                          <FaShoppingCart />Cart
                          {cartItems.length > 0 && (
                             <Badge pill bg='success' style={{ marginLeft: '5px' }}>
                                   {cartItems.reduce((a, c) => a + c.qty, 0)}
                             </Badge>
                            )}
                        </Nav.Link>
                             
                        {userInfo ? (
                <>
                  <NavDropdown title={userInfo.name} id='username'>
                    <NavDropdown.Item as={Link} to='/profile'>
                      Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <Nav.Link as={Link} to='/login'>
                  <FaUser /> Sign In
                </Nav.Link>
              )}
                      
                      
                     
                       
                    
                    
                    
                    
                    </Nav>

                </Navbar.Collapse>
            </Container>

        </Navbar>
    </header>
  )
}

export default Header