import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

class AdminNavbar extends React.Component {
  constructor (props) {
    super(props)

    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.state = {
      collapsed: true
    }
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render () {
    return (
      <div className='admin-layout-navbar'>
        <Navbar light className={!this.state.collapsed ? 'custom' : null}>
          <NavbarBrand href="/" >Hello Dear USER</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar}  />
          <Collapse isOpen={!this.state.collapsed} navbar >
            <Nav navbar>
              <NavItem>
                <NavLink href="/">Option 1</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Option 2</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default AdminNavbar