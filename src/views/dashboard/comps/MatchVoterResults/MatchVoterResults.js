import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { Query } from 'react-apollo';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Yup from "yup";
import { Formik } from "formik";
import { Mutation } from 'react-apollo';
import PropTypes from "prop-types";

import "./style.css";
import VOTER_SEARCH from '../../../../data/queries/voterSearch';
import TextInput from "../TextInput/TextInput";
import ASSOCIATE_PV_VOTER from '../../../../data/mutations/associatePvWithVoter';
import MY_POTENTIAL_VOTERS from '../../../../data/queries/potentialVoters';
import { findIndex } from 'lodash';

export class MatchVoterResults extends PureComponent {

    render() {
        // console.log(this.props);

        return (
            <Query
                query={VOTER_SEARCH}
                variables={{
                    limit: 10,
                    first_name: this.props.voter.first_name,
                    last_name: this.props.voter.last_name,
                    city: this.props.voter.city,
                    state: this.props.voter.state
                }}
            >
                {({ data: { voters }, loading, error, refetch }) => {
                    if (loading) {
                        return <p>Loading...</p>
                    }
                    else if (error) {
                        return <p>Error.... {error.message}</p>
                    }
                    if (voters.items.length === 0) {
                        return <p className={"this-is-them"}>No voters found by that name.</p>
                    }

                    // console.log(voters.items);

                    return (
                        <div>
                            <Formik
                                initialValues={{
                                    first_name: this.props.voter.first_name
                                        ? this.props.voter.first_name.trim()
                                        : "",
                                    last_name: this.props.voter.last_name ? this.props.voter.last_name.trim() : "",
                                    city: this.props.voter.city ? this.props.voter.city.trim() : "",
                                    state: "KS"
                                }}
                                validationSchema={Yup.object().shape({
                                    // first_name: Yup.string().required('First name is required'),
                                    last_name: Yup.string().required("Last name is required"),
                                    city: Yup.string()
                                })}
                                onSubmit={(values, { setSubmitting }) => {

                                    refetch(values);
                                    
                                    setSubmitting(false);

                                    console.log(this.props.voter);

                                    // this.props.voter.update({
                                    //     first_name: values.first_name.trim(),
                                    //     last_name: values.last_name.trim(),
                                    //     city: values.city.trim()
                                    // });
                                }}
                                enableReinitialize={true}
                                render={({
                                    values,
                                    errors,
                                    touched,
                                    handleChange,
                                    handleBlur,
                                    handleSubmit,
                                    isSubmitting,

                                    // handleChange = event => {
                                    //     const { name, value } = event.target;
                                    //     this.setState({
                                    //         [name]: value
                                    //     });
                                    //     console.log(event);
                                    // }

                                }) => (
                                        <form onSubmit={handleSubmit}>
                                            <div className="columns">
                                                <div className="column">
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
                                                </div>
                                                <div className="column">
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
                                                </div>
                                                <div className="column">
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
                                                </div>
                                            </div>
                                            <div className="columns">
                                                <div className="column">
                                                    <button
                                                        type="submit"
                                                        className="button is-link submit-button is-fullwidth new-search"
                                                        color="primary"
                                                        disabled={isSubmitting}

                                                        onClick={() => refetch()}

                                                    >
                                                        Search
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    )}
                            />
                            {voters.items.map((item, idx) => {

                                return (
                                    <Row bsPrefix="row" key={idx}>
                                        <Col md={12}>

                                            <Mutation
                                                mutation={ASSOCIATE_PV_VOTER}
                                                variables={{ 
                                                    pv_id: this.props.voter.id, 
                                                    voter_id: this.props.voter.id 
                                                }}
                                                update={(store, { data: { updatePotentialVoter } }) => {
                                                    const data = store.readQuery({
                                                        query: MY_POTENTIAL_VOTERS,
                                                        variables: { 
                                                            limit: 25, 
                                                            org_id: this.props.match.params.orgSlug 
                                                        },
                                                    });
                                                    // Find item index of mutated list item
                                                    var index = findIndex(data.potentialVoters.items, { id: updatePotentialVoter.id });
                                                    // Replace item at index using native splice
                                                    data.potentialVoters.items.splice(index, 1, updatePotentialVoter);
                                                    // Write our data back to the cache.
                                                    store.writeQuery({
                                                        query: MY_POTENTIAL_VOTERS,
                                                        variables: { limit: 25, org_id: this.props.match.params.orgSlug },
                                                        data,
                                                    });
                                                }}
                                            >
                                                {associateVoter => (

                                                    <button
                                                        className="this-is-them"
                                                        onClick={() => associateVoter()
                                                            .then(() => 
                                                            alert("Hello")
                                                            // this.props.close_modal()
                                                            )}
                                                    >
                                                        <p>
                                                            <span className="match-name">{item.first_name}{" "}{item.middle_name}{" "}{item.last_name}</span>
                                                            <br />
                                                            <span className="match-address">{"\n"}{item.home_address}{", "}{item.state}</span>
                                                        </p>
                                                    </button>
                                                    
                                                )}
                                            </Mutation>

                                        </Col>
                                    </Row>
                                );
                            })}
                        </div>
                    );
                }}
            </Query>
        )
    }

};

export default withRouter(MatchVoterResults);