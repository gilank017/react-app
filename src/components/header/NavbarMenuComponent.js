import { Nav } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const NavbarMenuComponent = () => {
  return (
    <Nav className='d-flex justify-content-center'>
      <Nav.Item>
        <Nav.Link as={Link} to="/">
          <div className="nav-route">
            Semua
          </div>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/blog">
          <div className="nav-route">
            Blog
          </div>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default NavbarMenuComponent