import React from 'react'
import './header.css'
import { Navbar } from 'react-bootstrap'
import LogoATI from '../static/img/logo.png'


const NavbarComponent = () => {
  return (
    <Navbar fixed="top" bg="white" className="header-nav">
      <Navbar.Brand className="mx-4">
        <img
          src={LogoATI}
          alt="Anak Teknik Indonesia"
          height="50"
        />
      </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end mx-4">
        <div class="d-flex">
          <div className="btn-login">Masuk</div>
          <div className="btn-signup">Daftar</div>
        </div>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarComponent