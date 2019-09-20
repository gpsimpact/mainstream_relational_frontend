import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';

import './style.css';
import MatchVoterResults from '../MatchVoterResults/MatchVoterResults';


function VoterFileModal(props) {
    // console.log(props.propsFromParent.first_name);

    const [smShow, setSmShow] = useState(false);
    // changing "child" to "voter" 
    const voter = props.voter;

    return (

        <div>
            <ButtonToolbar>
                <Button onClick={() => setSmShow(true)}>See Voter File</Button>
            </ButtonToolbar>

            {voter.voterFileRecord.state_file_id &&
                <Modal
                    size="lg"
                    show={smShow}
                    onHide={() => setSmShow(false)}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>
                            {voter && voter.voterFileRecord.state_file_id &&
                                <div>{voter.first_name} {voter.last_name}</div>
                            }
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <div>
                            {voter.voterFileRecord.home_address}
                        </div>

                    </Modal.Body>
                </Modal>
            }
            {!voter.voterFileRecord.state_file_id &&
            <div>
                No state id
            </div>
            }
        </div>

    );
}

export default VoterFileModal;