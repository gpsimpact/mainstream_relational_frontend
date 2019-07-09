import React, { PureComponent } from "react";
import { withRouter, Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class HomePage extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <section id="hero">
            <Container>
              <Row bsPrefix={'row justify-content-center'}>
                <Col md={6}>
                    <h1 className="title">82% turnout.</h1>
                    <p>
                    Of 5,500 Kansas voters connected to Voter to Voter, 82% of them cast a ballot in the 2018 general election. You can help push that even higher!
                    </p>
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
                  <p>
                  Here’s the bottom line. In the 2018 general election in Kansas, with record turnout, 56% of registered voters cast a ballot. Among the 5,500 Kansas voters connected to Voter to Voter, 82% of them turned out. It gets better. Infrequent voters in Kansas had just a 33% turnout rate. But infrequent voters connected to Voter to Voter turned out at 75%!
                  </p>
                  <p>
                  These next elections will determine so much! Your local government. Redistricting. School policy. Our next President. Help us make sure everyone is represented. You can be part of making a real difference in the local elections in 2019, and national elections in 2020.
                  </p>
                  <p>
                  Join us! If you live in Kansas, you can be a Voting Ambassador with Voter to Voter. Join now, or learn more with the links below. Be a part of making a real difference.
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
