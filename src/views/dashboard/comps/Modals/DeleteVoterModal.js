import React, { useState } from 'react';
import { Mutation } from "react-apollo";
import Modal from 'react-bootstrap/Modal';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import { withRouter } from "react-router-dom";
import ReactRouterPropTypes from "react-router-prop-types";
import PropTypes from "prop-types";
import { filter } from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation } from "@fortawesome/fontawesome-free";

import './style.css';
import UPDATE_PV from '../../../../data/mutations/modifyPV';
import MY_POTENTIAL_VOTERS from "../../../../data/queries/potentialVoters";
import { log } from 'handlebars';

function DeleteVoterModal(props) {
    // console.log(props.propsFromParent.first_name);

    const [smShow, setSmShow] = useState(false);
    // changing "child" to "voter"
    const voter = props.voter;
    // console.log(voter);
    
    return (

        <div>
            <ButtonToolbar>
                <Button variant="dark" onClick={() => setSmShow(true)}>Delete</Button>
            </ButtonToolbar>

            <Modal
                size="lg"
                show={smShow}
                onHide={() => setSmShow(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        Delete Conact:
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Mutation
                        mutation={UPDATE_PV}
                        variables={{ id: voter.id, data: { deleted: true } }}
                        update={(store, { data: { updatePotentialVoter } }) => {
                            const data = store.readQuery({
                                query: MY_POTENTIAL_VOTERS,
                                variables: { limit: 25, org_id: props.match.params.orgSlug }
                            });

                            // remove item from cache
                            data.potentialVoters.items = filter(
                                data.potentialVoters.items,
                                item => item.id !== updatePotentialVoter.id
                            );

                            store.writeQuery({
                                query: MY_POTENTIAL_VOTERS,
                                variables: { limit: 25, org_id: props.match.params.orgSlug },
                                data
                            });
                        }}
                        // refetchQueries={[{ 
                        //     query: MY_POTENTIAL_VOTERS, 
                        //     variables: { limit: 25, org_id: props.match.params.orgSlug }
                        // }]}
                    >
                        {updatePotentialVoter => (
                            <button
                                className="button is-danger"
                                onClick={() =>
                                    updatePotentialVoter()
                                        .then((data) => {
                                            console.log("\n\n\n\n ");
                                            console.log(data);
                                            console.log("\n\n\n\n ");

                                            setSmShow(false);
                                        })
                                }
                            >
                                <span className="icon">
                                    <FontAwesomeIcon icon={faExclamation} />
                                </span>
                                <span>Delete contact</span>
                            </button>
                        )}
                    </Mutation>
                </Modal.Body>
            </Modal>
        </div>

);
}

// DeleteVoterModal.propTypes = {
//     match: ReactRouterPropTypes.match.isRequired,
//     id: PropTypes.string.isRequired,
//     close_modal: PropTypes.func.isRequired
// };

export default withRouter(DeleteVoterModal);
