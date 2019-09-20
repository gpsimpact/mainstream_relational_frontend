import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';

import './style.css';
import MatchVoterResults from '../MatchVoterResults/MatchVoterResults';
import ConfirmedVoterMatchModal from './ConfirmedVoterMatchModal';
import { fullscreen } from 'glamor';

function MatchVoterModal(props) {
    // console.log(props.propsFromParent.first_name);

    const [smShow, setSmShow] = useState(false);
    // changing "child" to "voter" 
    const voter = props.voter;
    // console.log(voter);

    return (

        <div>

            <ButtonToolbar>
                <Button variant="secondary" onClick={() => setSmShow(true)}>Match Voter File</Button>
            </ButtonToolbar>

            <Modal
                size="lg"
                show={smShow}
                onHide={() => setSmShow(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        Associated Voter File Record
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    No record associated with your contact {voter.first_name} {voter.last_name}. See if any of the records below match your contact.
                </Modal.Body>
                <Modal.Body>
                <MatchVoterResults voter={voter} />
                </Modal.Body>
            </Modal>

        </div>

    );
}

export default MatchVoterModal;