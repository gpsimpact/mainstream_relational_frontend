import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { logout } from "../utils/auth";
import { withRouter } from "react-router-dom";
import ReactRouterPropTypes from "react-router-prop-types";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

import { LinkContainer } from 'react-router-bootstrap'

class MainNav extends PureComponent {
  state = {
    hamburgerOpen: false
  };
  render() {
    return (
      <Navbar bg="light" expand="lg" collapseOnSelect>
        <Container bsPrefix={'container d-flex'}>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img
              className="logo"
              src="/VotertoVoter_Logo_H_FullColor.png"
              alt="Voter to Voter. Personal. Powerful."
            />
          </Navbar.Brand>
        </LinkContainer>
      

        <Navbar.Toggle aria-controls="main-nav" bsPrefix="navbar-toggler ml-auto"> Menu </Navbar.Toggle>
        <Navbar.Collapse id="main-nav">
          <Nav className="ml-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/learn-more">
              <Nav.Link>Learn More</Nav.Link>
            </LinkContainer> 

            <LinkContainer to="/resources">
              <Nav.Link>Resources </Nav.Link>
            </LinkContainer> 

            <LinkContainer to="/about">
              <Nav.Link>About </Nav.Link>
            </LinkContainer> 

              <Nav.Link target="_blank" rel="noopener noreferrer" href="https://www.mainstreamcoalition.org/donate_foundation">Donate </Nav.Link>

            {!this.props.isLoggedIn &&
              <React.Fragment>
                <LinkContainer to="/join">
                  <Nav.Link className="right-nav">Join </Nav.Link>
                </LinkContainer> 

                <LinkContainer to="/auth/login">
                  <Nav.Link className="right-nav">Login </Nav.Link>
                </LinkContainer> 
              </React.Fragment>
            }
            {
              this.props.isLoggedIn &&
              <React.Fragment>
                  <LinkContainer to="/u/">
                    <Nav.Link className="right-nav">Dashboard </Nav.Link>
                  </LinkContainer> 
                      <NavDropdown className="right-nav" title="Account" id="account">
                        <LinkContainer to="/u/settings">
                            <NavDropdown.Item>Settings</NavDropdown.Item>
                        </LinkContainer>
                        <NavDropdown.Item
                          onClick={() => {
                            logout();
                            this.props.history.push("/")
                          }}
                        >Sign Out</NavDropdown.Item>

                      
                      </NavDropdown>

              </React.Fragment>
            }
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

MainNav.propTypes = {
  isLoggedIn: PropTypes.bool,
  email: PropTypes.string,
  history: ReactRouterPropTypes.history.isRequired
};

export default withRouter(MainNav);
