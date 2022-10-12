import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import LogoATI from '../static/img/logo.png'

const NavpageComponent = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand className='mx-1'>
          <img
            src={LogoATI}
            alt="Anak Teknik Indonesia"
            height="50"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default NavpageComponent