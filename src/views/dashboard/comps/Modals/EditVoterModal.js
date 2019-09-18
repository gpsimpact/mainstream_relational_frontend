import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import { Mutation } from 'react-apollo';
import { Formik, yupToFormErrors, Form } from 'formik';
import Yup from 'yup';
import { map } from 'lodash';

import './style.css';
import UPDATE_PV from '../../../../data/mutations/modifyPV';
import TextInput from '../../../../components/elements/TextInput';
import FormError from '../../../../components/elements/FormError';


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

                <Modal.Body>
                    <Mutation mutation={UPDATE_PV}>
                        {updatePotentialVoter => (
                            <Formik
                                initialValues={{
                                    first_name: voter.first_name,
                                    last_name: voter.last_name,
                                    city: voter.city,
                                }}
                                validationSchema={Yup.object().shape({
                                    first_name: Yup.string().required('First name is required'),
                                    last_name: Yup.string().required('Last name is required'),
                                    city: Yup.string().required('City is required'),
                                })}
                                onSubmit={(values, { setSubmitting, setErrors, resetForm }) => {
                                    updatePotentialVoter({
                                        variables: {
                                            id: voter.id,
                                            data: {
                                                first_name: values.first_name,
                                                last_name: values.last_name,
                                                city: values.city,
                                            },
                                        },
                                    })
                                        .then(() => {
                                            setSubmitting(false);
                                            resetForm();
                                            this.props.close();
                                        })
                                        .catch(error => {
                                            setSubmitting(false);
                                            setErrors({ email: ' ', password: ' ', form: error });
                                            // eslint-disable-next-line no-console
                                            console.log('there was an error sending the query', error);
                                        });
                                }}
                                render={({
                                    values,
                                    errors,
                                    touched,
                                    handleChange,
                                    handleBlur,
                                    handleSubmit,
                                    isSubmitting,
                                }) => (
                                        <form onSubmit={handleSubmit}>
                                            {map(errors.form, error => <FormError key={error} error={error} />)}
                                            
                                            <div className="field has-text-centered">
                                                <h4 className="is-size-4 has-text-weight-bold">Edit Contact</h4>
                                            </div>

                                            <TextInput
                                                id="first_name"
                                                type="text"
                                                label="First Name"
                                                placeholder="Enter their first name"
                                                error={touched.first_name && errors.first_name}
                                                value={values.first_name}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />

                                            <TextInput
                                                id="last_name"
                                                type="text"
                                                label="Last Name"
                                                placeholder="Enter their last name"
                                                error={touched.last_name && errors.last_name}
                                                value={values.last_name}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />

                                            <TextInput
                                                id="city"
                                                type="text"
                                                label="City"
                                                placeholder="Enter their City"
                                                error={touched.city && errors.city}
                                                value={values.city}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />

                                            <div className="Column">
                                                <div className="field ">
                                                    <div className="control">
                                                        <button
                                                            type="submit"
                                                            className="button is-link submit-button is-fullwidth"
                                                            color="primary"
                                                            disabled={isSubmitting}
                                                        >
                                                            Edit Contact
                                          </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    )}
                            />
                        )}
                    </Mutation>
                </Modal.Body>
            </Modal>
        </div>

    );
}

export default EditVoterModal;