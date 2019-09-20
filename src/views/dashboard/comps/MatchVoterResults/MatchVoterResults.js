import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { Query } from 'react-apollo';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "./style.css";
import VOTER_SEARCH from '../../../../data/queries/voterSearch';

export class MatchVoterResults extends PureComponent {

    render() {
        // console.log(this.props.voter);

        return (
            <Query
                query={VOTER_SEARCH}
                variables={{
                    limit: 10,
                    first_name: this.props.voter.first_name,
                    last_name: this.props.voter.last_name,
                    city: this.props.voter.city,
                    state: this.props.voter.state
                }}
            >
                {({ data: { voters }, loading, error }) => {
                    if (loading) {
                        return <p>Loading...</p>
                    }
                    else if (error) {
                        return <p>Error.... {error.message}</p>
                    }
                    if (voters.items.length === 0) {
                        return <p className={"no-match"}>No voters found by that name.</p>
                    }

                    console.log(voters.items);

                    return (
                        <div>
                            {voters.items.map((item, idx) => {
                                return (
                                    <Row bsPrefix="row" key={idx}>
                                        <Col md={12}>
                                            <div className={"match-div"}>
                                                <p className={"match-name"}>{item.first_name}{" "}{item.middle_name}{" "}{item.last_name}{"\n"}</p>
                                                <p className={"match-address"}>{item.home_address}{", "}{item.state}</p>
                                            </div>
                                        </Col>
                                    </Row>
                                );
                            })}
                        </div>
                    );
                }}
            </Query>
        )
    }

};

export default withRouter(MatchVoterResults);