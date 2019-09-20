import React from 'react';
import { withRouter } from 'react-router-dom';

import "./style.css";

function ConfirmedVoterMatchModal(props) {
    
    const voter = props.voter;
    // console.log("\n\n\n\n\n\n\ ");
    // console.log(voter);
    // console.log("\n\n\n\n\n\n\ ");
    
    return (
        <span>
            Confirmed
        </span>
    )
};

export default withRouter(ConfirmedVoterMatchModal);