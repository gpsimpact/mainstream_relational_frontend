import React, { PureComponent } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import { Query } from "react-apollo";
import ALL_ORGS from "../data/queries/allOrgs";
import ListOrgs from '../components/ListOrgs';


class Join extends PureComponent {
  componentDidMount() {
    document.title = 'Voter to Voter | Join';
  }
  render() {
    return (
      <section id="page-content">
      <Container>
        <Row bsPrefix={"row justify-content-center py-5"}>
          <Col md={8}>
              <h1 className="page-title">Join Voter to Voter</h1>

              <p>Voter to Voter is free, non-partisan, and effective. You can become a Voting Ambassador as part of a Team, or as an individual.</p>

              <Row bsPrefix="row">
                <Col bsPrefix="col-md-4">
                  <div className="action-box ab-yellow">
                        <h4> Create a Team</h4>
                        <p>Bring other voters with you to create a Team! Your Team can be you and some friends, your church, your business group, your company, etc.<a href="https://forms.gle/5c4KQ8JRbXTtGnJY8"> Fill out this form to get started.</a></p>
                  </div>
                </Col>
                <Col bsPrefix="col-md-4">
                  <div className="action-box ab-blue">
                        <h4> Join a Team</h4>
                        <p>Below is the list of Teams registered with Voter to Voter. If you’ve been invited to join a team, find them in the list, and click on their name to join them as an Ambassador.</p>
                  </div>
                </Col>
                <Col bsPrefix="col-md-4">
                  <div className="action-box ab-teal">
                        <h4> Join as an Individual</h4>
                        <p>If you want to be an Ambassador without joining a team, we invite you to be a member of the Voter to Voter Crew. <Link to={'/org/votvers'}>Click here to sign up for our own team of people making a real difference.</Link> </p>
                        </div>
                </Col>
              </Row>
          </Col>

          



        </Row>

        <Row bsPrefix="row justify-content-center pb-5">
          <Col md={8}>
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
                          {data && data.organizations && data.organizations.items && <ListOrgs orgs={data.organizations.items}/>}
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

export default Join;
