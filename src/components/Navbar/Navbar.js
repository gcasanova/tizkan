import ReactDOM from 'react-dom';
import { I18n } from 'react-i18next';
import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Image } from 'react-bootstrap';

import './css/Navbar.css';
import tizkanImage from '../../images/tizkan.png';

// Import a pre-configured instance of i18next
import i18n from '../../i18n';

const CLASS_PREFIX = 'scroll-';

class myNavbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      class: `${CLASS_PREFIX}0`
    }

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e) {
    const y = e.pageY;

    const element = ReactDOM.findDOMNode(this).getElementsByClassName('container')[0];
    for (const prop in element) {
      console.log('prop: ' + prop);
    }
  
    if (y !== 0) {
      if (y <= 20 && this.state.class !== `${CLASS_PREFIX}1`) {
        this.setState({ class: `${CLASS_PREFIX}1` });
        
        const element = ReactDOM.findDOMNode(this).getElementsByClassName('container')[0];
        this.removeClass(element);

        element.classList.add(`${CLASS_PREFIX}1`);
      } else if (y > 20 && y <= 40 && this.state.class !== `${CLASS_PREFIX}2`) {
        this.setState({ class: `${CLASS_PREFIX}2` });

        const element = ReactDOM.findDOMNode(this).getElementsByClassName('container')[0];
        this.removeClass(element);

        element.classList.add(`${CLASS_PREFIX}2`);
      } else if (y > 40 && y <= 60 && this.state.class !== `${CLASS_PREFIX}3`) {
        this.setState({ class: `${CLASS_PREFIX}3` });

        const element = ReactDOM.findDOMNode(this).getElementsByClassName('container')[0];
        this.removeClass(element);

        element.classList.add(`${CLASS_PREFIX}3`);
      } else if (y > 60 && this.state.class !== `${CLASS_PREFIX}4`) {
        this.setState({ class: `${CLASS_PREFIX}4` });

        const element = ReactDOM.findDOMNode(this).getElementsByClassName('container')[0];
        this.removeClass(element);

        element.classList.add(`${CLASS_PREFIX}4`);
      }
    } else if (this.state.class !== `${CLASS_PREFIX}0`) {
      this.setState({ class: `${CLASS_PREFIX}0` });

      const element = ReactDOM.findDOMNode(this).getElementsByClassName('container')[0];
      this.removeClass(element);
    }
  }

  removeClass(element) {
    for (let className of element.classList) {
      if (className.startsWith(CLASS_PREFIX)) {
        element.classList.remove(className);
      }
    }
  }

  render() {
    return (
      <I18n>
        {
          (t, { i18n }) => (
            <Navbar ref="navbar" className={this.state.class} collapseOnSelect fixedTop>
              <Navbar.Header>
                <Image src={tizkanImage} responsive />
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav pullRight>
                  <NavItem eventKey={1} href="#">
                    PRODUCTS
                  </NavItem>
                  <NavItem eventKey={2} href="#">
                    ABOUT
                  </NavItem>
                  <NavItem eventKey={3} href="#">
                    CONTACT US
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
