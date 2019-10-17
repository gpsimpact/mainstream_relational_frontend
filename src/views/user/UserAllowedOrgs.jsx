import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import ALL_ORGS from '../../data/queries/allOrgs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
class UserAllowedOrgs extends PureComponent {
  render() {
    return (
      <section id="page-content">
        <Container>
          <Row bsPrefix={"row justify-content-center py-5"}>
            <Col>
              <h1 className="page-title">Please select an organization</h1>
              <Query
                    query={ALL_ORGS}
                    variables={{
                      limit: 200,
                      where: {
                        id_in: this.props.orgs,
                      },
                    }}
                  >
                    {({ loading, error, data }) => {
                      if (loading) return <div className="loader" />;
                      if (error) return <p>Error!</p>;
                      return (
                        <ul className="org-list mt-4">
                        {data.organizations.items.map(org => (
                            <li key={org.id}>
                              <Link to={`/u/${org.id}`}>{org.name}</Link>
                            </li>
                          ))}
                        </ul>
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

UserAllowedOrgs.propTypes = {
  orgs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default withRouter(UserAllowedOrgs);
