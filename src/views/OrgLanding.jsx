import React, { PureComponent } from "react";
// import PropTypes from 'prop-types';
import { Query } from "react-apollo";
import ORG_DETAILS from "../data/queries/orgInfo";
import { withRouter, Link } from "react-router-dom";
import { isLoggedIn, hasOrgAccess } from "../utils/auth";
import ReactRouterPropTypes from "react-router-prop-types";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Phone from '@material-ui/icons/Phone';
import Email from '@material-ui/icons/Email';


class OrgLanding extends PureComponent {
  componentDidMount() {
    document.title = 'Voter to Voter | Join';
  }
  render() {
    return (
      <section id="page-content">
      <Container>
        <Row bsPrefix={"row justify-content-center py-5"}>
          <Col md={8}>
              <Query
                query={ORG_DETAILS}
                variables={{ where: { slug: this.props.match.params.slug } }}
              >
                {({ loading, error, data: { organization } }) => {
                  if (loading) return <div className="loader" />;
                  if (error) return <p>Error!</p>;
                  if (!organization) {
                    return (
                      <React.Fragment>
                         
                                <h1 className="title">Page Not Found</h1>
                                <h2 className="subtitle">404. Oh no.</h2>
                                <h2>
                                                          Sorry, this page does not exist. 
                                                        
                                                      </h2>
                                <h2><Link to="/join">Join a team.</Link></h2>
                                <h2><Link to="/">Head back home.</Link></h2>

                                                

                    
                      </React.Fragment>

                      
                  
                    );
                  }
                  return (
                    <React.Fragment>
                      <h1 class="page-title"> Join </h1>
                      <p>Without Voting Ambassadors, this project would not succeed. Thank you. You are joining:</p>
                      <h2 className="section-title">{organization.name}</h2>
                              <p>{organization.cta}</p>
                              {organization && organization.admin_notes && 
                                <p>{organization.admin_notes}</p>
                              }

                              <p><strong>Team Lead: &nbsp;</strong>{organization.contact_name}&nbsp;&nbsp;
                              {
                                organization.contact_phone &&
                                <span>&middot;&nbsp;&nbsp;<Phone/> {organization.contact_phone}&nbsp;&nbsp;</span>
                              }
                              {
                                organization.contact_email &&
                                <span>&middot;&nbsp;&nbsp;<a href={`mailto:${organization.contact_email}`}><Email/>{organization.contact_email}</a></span>
                              }
                              </p>

                        { !isLoggedIn() 
                          ?
                          <React.Fragment>
                            <Link className="btn-link btn-link-inline btn-link-db"
                                  to={`/auth/register?org_id=${organization.id}`}
                            >
                              Join this team
                            </Link>
                          </React.Fragment>
                          :
                          <React.Fragment>
                            {
                              hasOrgAccess(organization.id)
                              ?
                                <Link className="btn-link btn-link-inline btn-link-db"
                                  to={`/u/${organization.id}`}
                                >
                                  Go To Dashboard
                                </Link>
                              :
                              null
                            }
                          </React.Fragment>
                        }
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

OrgLanding.propTypes = {
  match: ReactRouterPropTypes.match.isRequired
};

export default withRouter(OrgLanding);
