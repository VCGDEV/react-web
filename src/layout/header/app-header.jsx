import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

class AppHeader extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <NavDropdown
              size="sm"
              alignRight
              title="vcgdev"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">
                <FontAwesomeIcon icon={faUser} />
                <span className="item-title">Action</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default AppHeader;
