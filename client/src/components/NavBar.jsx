import React from 'react'
import { Navbar, Nav, Container, Image, NavDropdown } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { logoutUser } from '../actions/userAction'

const NavBar = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;

  return (

    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <LinkContainer to='/' >
            <Nav.Link >
              <Image
                src="images/logo.png"
                style={{ width: "20rem", height: "5rem" }}
              />
            </Nav.Link>
          </LinkContainer>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            {currentUser ? (
              <LinkContainer to="/">
                <NavDropdown title={currentUser.name} id="basic-nav-dropdown">
                  <LinkContainer to="/orders">
                    <NavDropdown.Item>order</NavDropdown.Item>
                  </LinkContainer>
                     <NavDropdown.Item onClick={() => { dispatch(logoutUser()) }}>Logout</NavDropdown.Item>
                  </NavDropdown>
              </LinkContainer>
            ) : (
              <>
                {" "}
                <LinkContainer to="/login">
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/register">
                  <Nav.Link>Register</Nav.Link>
                </LinkContainer>{" "}
              </>
            )}

            <LinkContainer to='/cart'>
              <Nav.Link>Cart {cartState.cartItems.length}</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


  )
}

export default NavBar
