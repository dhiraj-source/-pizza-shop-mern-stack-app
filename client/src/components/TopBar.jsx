import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap"
import { LinkContainer } from 'react-router-bootstrap'
import { MdLocalOffer } from 'react-icons/md'


const TopBar = () => {
  return (
    <>
      <Navbar bg='warning' varient='dark' expand='lg'>
        <Container fluid>
          <h6><MdLocalOffer className='text-Light' /> &nbsp; &nbsp; Free Home Delivery on Order Above 499/- Rupees</h6>
          <Nav className='ms-auto'>
            <LinkContainer to="/" activeClassName=''>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about" activeClassName=''>
              <Nav.Link>
                About Us
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact" activeClassName=''>
              <Nav.Link>
                Contact
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/policy" activeClassName=''>
              <Nav.Link>
                terms & policy
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default TopBar
