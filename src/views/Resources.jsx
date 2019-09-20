import React, { PureComponent } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Resources extends PureComponent {
  render() {
    const iframeStyle = {
      backgroundColor: "transparent",
      border: "none",
      overflow: "hidden",
    }
    return (
      <section id="page-content">
      <Container>
        <Row bsPrefix={"row justify-content-center py-5"}>
          <Col md={8}>
              <h1 class="page-title">Voting Resources</h1>

              <p>These are a few resources for Kansans looking to vote, help others vote, or increase voter turnout (even if you’re not an Ambassador for Voter to Voter).</p>

              <p>RSVP <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSdtQvBiMZIc6X_njOePEVyiX3Zouus0onq1Mj7cwQv1-AZFyg/viewform">here </a> for upcoming Voter to Voter trainings and events!</p>
          
              <p> Register to vote <a rel="noopener noreferrer" href="https://www.ksvotes.org/" target="_blank">here</a>, and sign up to receive your ballot in the mail!</p>
              <p> See a list <a rel="noopener noreferrer" target="_blank" href="https://docs.google.com/document/d/1mTMpBIs2mKzV_enMkyUQ2mXvzn4hCY4zPbi71vM-Xsk/edit">here </a>of the 14 KS counties that have August 6 primary elections, and the early vote locations that are open in those locations. </p>
              <p>
                <a href="/pdfs/Ambassador Getting Started Guide 2019.pdf">Ambassador Getting Started Guide
                </a> 
                </p>
                <p>
                <a href="/pdfs/SPANISH - Ambassador Getting Started Guide 2019.pdf">
                Ambassador Getting Started Guide - Spanish 
                </a>
              </p>
              <h2 class="section-title text-uppercase"> Lookup your voter guide</h2>
              <iframe style={iframeStyle} 
              scrolling="no" src="https://mainstreamcoalition-vote.civicengine.com/widget/address_search" 
              width="100%" 
              height="250"><p>iframe not supported.</p>
              </iframe>
          
          </Col>
        </Row>
      </Container>


    </section>
    );
  }
}

export default Resources;
