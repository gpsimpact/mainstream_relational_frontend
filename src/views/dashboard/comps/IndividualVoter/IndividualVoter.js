import React from 'react';
import { withRouter } from 'react-router-dom';

import EditVoterModal from '../Modals/EditVoterModal';
import DeleteVoterModal from '../Modals/DeleteVoterModal';
import MatchVoterModal from '../Modals/MatchVoterModal';
import VoterFileModal from '../Modals/VoterFileModal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "./style.css";

function IndividualVoter(props) {
    // console.log(props.item);

    // changing "child" to "voter" 
    const voter = props.voter;
    const voterMatched = voter && voter.voterFileRecord && voter.voterFileRecord.state_file_id;

    return (
        <div>
            <div className="card individualVoterCard">
                <div className={`card-header individualVoterCardHeader ${voterMatched ? "matched-voter" : "unmatched-voter"}`}>
                    <Row bsPrefix={"row no-gutters w-100"}>
                        <Col md={6}>
                            <h2>{voter.first_name} {voter.last_name}</h2>
                        </Col>
                        <Col md={6}>
                            <ul className="list-inline crud-btns">
                                <li className="list-inline-item"><EditVoterModal voter={voter} /></li>
                                <li className="list-inline-item"><DeleteVoterModal voter={voter}/></li>
                            </ul>
                        </Col>
                    </Row>
                </div>
                <div className="card-body">
                    <p>{voter.city}</p>
                 
                        {
                            voterMatched
                            ?
                                <VoterFileModal voter={voter}/>
                            :
                                <MatchVoterModal voter={voter} voterMatched={voterMatched}/>
                            
                        }
                      
                    
                    
                </div>
            </div>
        </div>
    )
};

export default withRouter(IndividualVoter);