import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { Query, withApollo } from 'react-apollo';

import { Intro } from '../Intro/intro';
import MY_POTENTIAL_VOTERS from '../../../../data/queries/potentialVoters';

// import VoterSearchModal from './comps/Modals/VoterSearchModal';
import IndividualVoter from '../IndividualVoter/IndividualVoter';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { VoterPageInfoComp } from '../../VoterPageInfo';
import { Pagination } from '../Pagination';

class PotentialVotersList extends PureComponent {
    render() {
        return (
            <VoterPageInfoComp>
                {({data: {voterPageInfo}}) => {
                    return(
                            <Query
                                query={MY_POTENTIAL_VOTERS}
                                variables={{
                                    limit: 25,
                                    org_id: this.props.match.params.orgSlug,
                                }}
                          
                            >
                                {({ data: { potentialVoters }, loading, error }) => {
                                    if (loading) {
                                        return <p>Loading...</p>;
                                    }
                                    else if (error) {
                                        return <p>Error!</p>;
                                    }
                                    if (potentialVoters.items.length === 0) {
                                        return <Intro />
                                    }

                                    // console.log(potentialVoters.items);

                                    return (
                                        <Row bsPrefix="row">
                                            <Col md={12}>
                                                <Pagination voterPageInfo={voterPageInfo} potentialVoters={potentialVoters}/>
                                            </Col>

                                            {potentialVoters.items.map((item, idx) => {
                                                // console.log(item.first_name);
                                                // break out into individual voter component
                                                return (
                                                    // adding col div here.  On map items the very first div/component needs to have the key assigned to it.
                                                    // changing "child" to "voter" 
                                                    <Col key={idx} md={12}>
                                                        <IndividualVoter voter={item} />
                                                    </Col>
                                                    );
                                                })}
                                    </Row>
                                    );
                                }}
                            </Query>
                        )
                }}
            </VoterPageInfoComp>
        );
    }
}

export default withApollo(withRouter(PotentialVotersList));