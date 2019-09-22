import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';

import PotentialVotersList from './comps/PotentialVotersList/PotentialVotersList';
import NewPotentialVoterForm from './comps/Modals/AddPotentialVoterModal';

class UserHome extends PureComponent {

    state = {
        newPvModalOpen: false,
    };

    render() {
        return (
            <section className="section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <PotentialVotersList />
                        </div>
                        <div className="col-lg-4">
                            <NewPotentialVoterForm />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

UserHome.propTypes = {
    match: ReactRouterPropTypes.match.isRequired,
};

export default withRouter(UserHome);
