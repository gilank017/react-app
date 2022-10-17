import './header.css'
import { Navbar } from 'react-bootstrap'
import Logo from '../../assets/img/logoATI.png'
import NavbarMenuComponent from './NavbarMenuComponent'

const NavbarComponent = () => {
  return (
    <div fixed="top">
      <Navbar fixed="top" bg="white" className="header-nav">
        <Navbar.Brand className="mx-4">
          <img
            src={Logo}
            alt="Anak Teknik Indonesia"
            height="50"
          />
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end mx-4">
          <div className="d-flex">
            <div className="btn-login">Masuk</div>
            <div className="btn-signup">Daftar</div>
          </div>
        </Navbar.Collapse>
      </Navbar>
      <div className="nav-page-list">
        <NavbarMenuComponent/>
      </div>
    </div>
  )
}

export default NavbarComponent