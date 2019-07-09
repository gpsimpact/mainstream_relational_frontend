import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap'

class Footer extends PureComponent {
  render() {
    return (
      <footer className="footer">
        <Container>
          <Row bsPrefix={'row justify-content-center align-items-center'}>
          <Col lg={6}>
              <img className="footer-logo" alt="Voter To Voter" src="/VotertoVoter_Logo_V_White.png"/>
            </Col>
            <Col lg={3}>
              <Nav className="flex-column">
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
                
  

                <Nav.Link target="_blank" rel="noopener noreferrer" href="https://www.mainstreamcoalition.org/donate_foundation" className="donate">Donate </Nav.Link>

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
                    <Nav.Link>Dashboard </Nav.Link>
                  </LinkContainer> 

                  <LinkContainer to="/u/settings">
                    <Nav.Link>Settings </Nav.Link>
                  </LinkContainer> 
        

              </React.Fragment>
            }

                <LinkContainer to="/results">
                    <Nav.Link>Results</Nav.Link>
                </LinkContainer>


              </Nav>
            </Col>

           
          </Row>
          <Row bsPrefix="row justify-content-center info">
            <Col lg={6}>
              <p>Voter to Voter is a project created by the MainStream Education Foundation. <br/> <Link to={'/about'}>About Voter to Voter.</Link> All content is (c) 2019.</p>
              <p>Get help or ask questions at <a href="mailto:contact@votertovoter.org">contact@votertovoter.org</a>.</p>
              <p>Find us on <a href="https://twitter.com/votertovoter" title="Twitter" target="_blank" rel="noopener noreferrer">Twitter</a>, <a rel="noopener noreferrer" href="https://www.facebook.com/votertovoter/" title="Facebook" target="_blank">Facebook</a>, and <a rel="noopener noreferrer" href="https://www.instagram.com/votertovoter/" title="Instagram" target="_blank">Instagram</a>.</p>
              <p><Link to={'/privacy'}>Privacy Statement</Link></p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
