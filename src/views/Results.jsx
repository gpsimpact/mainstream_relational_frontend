import React, { PureComponent } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



class Results extends PureComponent {
  render() {
    return (
      <section id="page-content">
      <Container>
        <Row bsPrefix={"row justify-content-center py-5"}>
          <Col md={8}>
              <h1 class="page-title">Results</h1>
              <p>Coming soon.</p>
          </Col>
        </Row>
      </Container>


    </section>
    );
  }
}

export default Results;
