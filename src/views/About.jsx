import React, { PureComponent } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { Query } from "react-apollo";
import ALL_ORGS from "../data/queries/allOrgs";
import ListOrgs from '../components/ListOrgs';

class About extends PureComponent {
  render() {
    return (
      <section id="page-content">
      <Container>
        <Row bsPrefix={"row justify-content-center py-5"}>
          <Col md={8}>
              <h1 className="page-title">About</h1>

              <h3 className="section-title"> About Voter to Voter</h3>
              <p>Voter to Voter is a strictly non-partisan project of the MainStream Education Foundation (MEF) to increase voter turnout in Kansas. MEF educates and engages individuals to advocate for good governance, quality public education, healthy communities, and sustainable fiscal policy. <a href="https://www.mainstreamcoalition.org/" target="_blank" >Learn more about MEF here.</a></p>
              <p>Contact Voter to Voter <a href="mailto:contact@votertovoter.org">contact@votertovoter.org</a>.</p>
              <p>Follow us on <a href="https://twitter.com/votertovoter" title="Twitter" target="_blank" rel="noopener noreferrer">Twitter</a>, <a rel="noopener noreferrer" href="https://www.facebook.com/votertovoter/" title="Facebook" target="_blank">Facebook</a>, and <a rel="noopener noreferrer" href="https://www.instagram.com/votertovoter/" title="Instagram" target="_blank">Instagram</a>.</p>
            
              <h3 className="section-title">Non-Partisan</h3>
              <p>Voter to Voter is strictly non-partisan. The tool is free to use for any individual or organization. All content from Voter to Voter will support the goal of the project, to increase voter turnout.</p>
         
              <h3 className="section-title">Private</h3>
              <p>We value the privacy of our Voter Ambassadors, and more importantly, the privacy of the friends, family, and co-workers they add to Voter to Voter. We will not use any personal information for any purpose other than Voter to Voter, and will not use any information about voters (family, friends, co-workers) for any purpose at all. Any information about voting history is public data made available by the Kansas Secretary of State. <Link to={'/privacy'}>Read our privacy statement here.</Link></p>

              <h3 className="section-title">Effective</h3>
              <p>The first pilot year saw the project reach 5,500 voters by the general election. In the primary election, the results were stunning. And in the general election, despite a record high turnout statewide, Voter to Voter still saw turnout 30% points higher than the state overall. <Link to={'/results'}>See a more detailed explanation of the results here.</Link></p>

              <h3 className="section-title">Staff</h3>
              <p>
              The Voter to Voter project is run by Lindsay Behgam, Director of Voter Engagement, and supported by John Pauldine and Sheyvette Dinkens. They are assisted by an incredible cadre of hundreds of Voting Ambassadors and organizational partners who make the project work.
              </p>

              <h3 className="section-title">Funders</h3>
              <p>Voter to Voter is funded entirely by donations. </p>

        
          <Query
                    query={ALL_ORGS}
                    variables={{
                      limit: 200,
                      orderBy: [{ sort: "name", direction: "ASC" }]
                    }}
                  >
                    {({ loading, error, data }) => {
                      if (loading) return <div className="loader" />;
                      if (error) return <p>Error!</p>;
                      return (
                        <React.Fragment>
                          {data && data.organizations && data.organizations.items && <ListOrgs orgs={data.organizations.items} title={'Partners'}/>}
                        </React.Fragment>
                      );
                    }}
            </Query>
          
          </Col>
        </Row>
      </Container>


    </section>
    );
  }
}

export default About;
