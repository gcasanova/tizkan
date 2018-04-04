import { I18n } from 'react-i18next';
import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

// Import a pre-configured instance of i18next
import i18n from '../i18n';

class myNavbar extends Component {
  render() {
    return (
      <I18n>
        {
          (t, { i18n }) => (
            <Navbar collapseOnSelect>
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="#brand">{t('appName')}</a>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav>
                  <NavItem eventKey={1} href="#">
                    Link
            </NavItem>
                  <NavItem eventKey={2} href="#">
                    Link
            </NavItem>
                  <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>Action</MenuItem>
                    <MenuItem eventKey={3.2}>Another action</MenuItem>
                    <MenuItem eventKey={3.3}>Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.3}>Separated link</MenuItem>
                  </NavDropdown>
                </Nav>
                <Nav pullRight>
                  <NavItem eventKey={1} href="#">
                    Link Right
            </NavItem>
                  <NavItem eventKey={2} href="#">
                    Link Right
            </NavItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          )
        }
      </I18n>
    );
  }
}

export default myNavbar;
