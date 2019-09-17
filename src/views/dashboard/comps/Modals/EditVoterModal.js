import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';

import './style.css';


function EditVoterModal(props) {
    // console.log(props.propsFromParent.first_name);

    const [smShow, setSmShow] = useState(false);
    // changing "child" to "voter" 
    const voter = props.voter;

    return (

        <div>
            <ButtonToolbar>
                <Button onClick={() => setSmShow(true)}>Edit</Button>
            </ButtonToolbar>

            <Modal
                size="lg"
                show={smShow}
                onHide={() => setSmShow(false)}
                >
                <Modal.Header closeButton>
                    <Modal.Title>
                {voter &&
                        <div>{voter.first_name} {voter.last_name}</div>
                }
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>...........</Modal.Body>
            </Modal>
        </div>

    );
}

export default EditVoterModal;