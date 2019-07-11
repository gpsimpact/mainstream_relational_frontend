import React, { PureComponent } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
class Privacy extends PureComponent {
  render() {
    return (
      <section id="page-content">
        <Container>
          <Row bsPrefix={"row justify-content-center py-5"}>
            <Col md={8}>
                <h1 class="page-title">Privacy Statement</h1>
                <p>The MainStream Education Foundation is collecting name, email addresses, and other contact information for this Voter to Voter tool solely for the purposes of contacting registered participants regarding this Voter to Voter effort. We will not sell, give, or in any other way distribute contact information beyond the confines of this project. Data on voters and voting records used in this tool is public information made available by the State of Kansas.</p>

                <p>Partner organizations may have separate privacy and data policies, which are outlined on their registration pages before members join their Teams.</p>

                <p>If you have any questions, please address them to <a href="mailto:contact@votertovoter.org">contact@votertovoter.org</a></p>
            </Col>
          </Row>
        </Container>


      </section>
    );
  }
}

export default Privacy;
