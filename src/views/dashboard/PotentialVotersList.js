import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { Query } from 'react-apollo';

import { Intro } from './comps/intro';
import MY_POTENTIAL_VOTERS from '../../data/queries/potentialVoters';
// import VoterSearchModal from './comps/Modals/VoterSearchModal';


class PotentialVotersList extends PureComponent {
    render() {
        return (
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

                    console.log(potentialVoters.items);

                    return (
                        <div>
                            {potentialVoters.items.map((item, idx) => {
                                // console.log(item.first_name);
                                // break out into own component (individual voter)
                                return (
                                    <div key={idx}>
                                        <p>
                                            {item.first_name} {item.last_name}
                                        </p>
                                    </div>
                                );
                            }) }
                        </div>
                    );
                }}
            </Query>
        );
    }
}

export default withRouter(PotentialVotersList);