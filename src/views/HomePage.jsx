import React, { PureComponent } from "react";
import { withRouter, Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class HomePage extends PureComponent {
  componentDidMount() {
    document.title = 'Voter to Voter';
  }
  render() {
    const iframeStyle = {
      backgroundColor: "transparent",
      border: "none",
      overflow: "hidden",
    }
    return (
      <React.Fragment>
        <section id="hero">
            <Container>
              <Row bsPrefix={'row justify-content-center'}>
                <Col lg={6}>
                    <h1 className="title">WHAT IF EVERYONE VOTED?</h1>
                    <p>
                    You know at least 10 people who don’t even know there’s an election this November! Make sure they vote by joining us in this non-partisan project that <strong>turned out 82% of participants in 2018!</strong>
                    </p>
                </Col>
              </Row>
            </Container>
        </section>
        <section id="voter-guide">
          <Container>
            <Row bsPrefix={'row justify-content-center align-items-center'}>
              <Col md={4}>
              <p><strong>Who Is On Your Ballot? </strong>Enter your home address to find out more about the candidates and issues on your ballot, get a voter guide, reminders, and more from ksballot.org</p>

              </Col>
              <Col md={4}>
              <iframe style={iframeStyle} 
              title="Who is on your ballot?"
              scrolling="no" src="https://mainstreamcoalition-vote.civicengine.com/widget/address_search" 
              width="100%" 
              height="125"><p>iframe not supported.</p>
              </iframe>
              </Col>
            </Row>
          </Container>
        </section>

        <section id="home-content">
        <Container>
              <Row bsPrefix={'row justify-content-center'}>
                <Col md={8}>
              <Row bsPrefix={'row justify-content-center'}>
                <Col lg={4}>
                    <Link className="btn-link btn-link-teal" to="/learn-more">
                        Learn More
                    </Link>
                    </Col>
                  <Col lg={4}>
                    <Link className="btn-link btn-link-blue" to="/join">
                        Join Now
                    </Link>
                </Col>
                </Row>
                <p>
                  Voter to Voter is a new get out the vote project in Kansas that works to increase voter turnout, with an emphasis on citizens who are underrepresented in the political process. We are innovative, non-partisan, and effective.
                </p>
                <p>
                  Turning out voters is the number one effort in every election. Many times, as much as half of the electorate doesn’t vote. Those people remain unrepresented by their governments, at the local and national levels. The old methods aren’t working anymore. Door knocking and phone banking barely move the needle. So we’ve started something new in Kansas with Voter to Voter.
                  </p>
                  <p><strong> Here’s the bottom line.</strong></p>
                  <p>
                   In the 2018 general election in Kansas, with record turnout, 56% of registered voters cast a ballot. Among the 5,500 Kansas voters connected to Voter to Voter, 82% of them turned out. It gets better. Infrequent voters in Kansas had just a 33% turnout rate. But infrequent voters connected to Voter to Voter turned out at 75%!
                  </p>
                  <p>
                  These next elections will determine so much! Your local government. Redistricting. School policy. Our next President. Help us make sure everyone is represented. You can be part of making a real difference in the local elections in 2019, and national elections in 2020.
                  </p>
                  <p>
                  Join us! If you live in Kansas, you can be a Voting Ambassador with Voter to Voter. Join now, or learn more with the links below. Be a part of making a real difference.
                  </p>

                       <p>  
                       <Link className="" to="/resources">
                           Learn more about being an Ambassador or a Team Leader
                       </Link>
                       </p>
                       <p>  
                       <Link className="" to="/join">
                           Join Voter to Voter Now!
                       </Link>
                       </p>
                       <p>  
                       <Link className="" to="/learn-more">
                        Find out more about the Voter to Voter project
                        </Link>
                       </p>


                </Col>
                
              </Row>
            </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default withRouter(HomePage);
