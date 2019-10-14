import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';

import './style.css';
import MatchVoterResults from '../MatchVoterResults/MatchVoterResults';


class MatchVoterModal extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            voter: this.props.voter,
            first_name: this.props.voter.first_name,
            last_name: this.props.voter.last_name,
            city: this.props.voter.city,
            voterId: this.props.voter.id,
            voterMatched: this.props.voterMatched,
            modal: false,
        }
    }

    
    render(){
        console.log(this.state);
        return (
            
            <div>

            <ButtonToolbar>
                <Button variant="secondary" onClick={() => this.setState({modal: !this.state.modal})}>Match Voter File</Button>
            </ButtonToolbar>

            <Modal
                size="lg"
                show={this.state.modal}
                onHide={() => this.setState({modal: false})}
                >
                <Modal.Header closeButton>
                    <Modal.Title>
                        Match to Voter File Record
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        !this.state.voterMatched && 
                        <p>No record associated with your contact {this.state.voter.first_name} {this.state.voter.last_name}. See if any of the records below match your contact.
                        </p>
                    }

                    {!this.state.voterMatched }
                </Modal.Body>
            </Modal>

        </div>

    );
    }
}

export default MatchVoterModal;