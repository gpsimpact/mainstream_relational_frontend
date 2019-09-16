import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';

import './style.css';


function IndividualVoterModal(props) {
    // console.log(props.propsFromParent.first_name);

    const [smShow, setSmShow] = useState(false);
    const child = props.propsFromParent;

    return (

        <div>
            <ButtonToolbar>
                <Button onClick={() => setSmShow(true)}>Modal Button</Button>
            </ButtonToolbar>

            <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                >
                <Modal.Header closeButton>
                    <Modal.Title>
                {child &&
                        <div>{child.first_name} {child.last_name}</div>
                }
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>...........</Modal.Body>
            </Modal>
        </div>

    );
}

export default IndividualVoterModal;