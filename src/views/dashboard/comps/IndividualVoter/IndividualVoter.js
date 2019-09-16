import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';

import IndividualVoterModal from '../Modals/individualVoterModal';
import "./style.css";

function IndividualVoter(props) {
    // console.log(props.item);

    const child = props.item;

    return (
        <div>
            <div className="card individualVoterCard">
                <div className="card-header individualVoterCardHeader">
                    <h2>{child.first_name} {child.last_name}</h2>
                </div>
                <div className="card-body">
                    <p>{child.city}</p>
                    <IndividualVoterModal propsFromParent={child} />
                </div>
            </div>
        </div>
    )
};

export default withRouter(IndividualVoter);