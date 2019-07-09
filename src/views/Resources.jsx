import React, { PureComponent } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Resources extends PureComponent {
  render() {
    return (
      <section id="page-content">
      <Container>
        <Row bsPrefix={"row justify-content-center py-5"}>
          <Col md={8}>
              <h1 class="page-title">Voting Resources</h1>

              <p>These are a few resources for Kansans looking to vote, help others vote, or increase voter turnout (even if you’re not an Ambassador for Voter to Voter).</p>
          </Col>
        </Row>
      </Container>


    </section>
    );
  }
}

export default Resources;
