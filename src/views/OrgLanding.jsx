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
  render() {
    return (
      <section id="page-content">
      <Container>
        <Row bsPrefix={"row justify-content-center py-5"}>
          <Col>
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
                            <h1 className="page-title">Not Found</h1>
                              <h2>
                                  Sorry, this org does not exist. Try one listed{" "}
                                <Link to="/join">here</Link>
                              </h2>

                    
                      </React.Fragment>

                      
                  
                    );
                  }
                  return (
                    <React.Fragment>
                      <h1 class="page-title"> {organization.name} </h1>
                      <h3 className="section-title">Welcome!</h3>
                              <p>{organization.cta}</p>

                              <h3 className="section-title">For more information contact:</h3>
                              <p>{organization.contact_name}</p>
                              {
                                organization.contact_phone &&
                                <p><Phone/> {organization.contact_phone}</p>
                              }
                              {
                                organization.contact_email &&
                                <p><Email/> {organization.contact_email}</p>
                              }

                        { !isLoggedIn() 
                          ?
                          <React.Fragment>
                            <Link className="btn-link btn-link-inline btn-link-db"
                                  to={`/auth/register?org_id=${organization.id}`}
                            >
                              Register
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
