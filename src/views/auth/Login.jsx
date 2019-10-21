import { Formik } from 'formik';
import querystring from 'querystring';
import React, { PureComponent } from 'react';
import { Mutation } from 'react-apollo';
import { withRouter, Link, Redirect } from 'react-router-dom';
import Yup from 'yup';
import TextInput from '../../components/elements/TextInput';
import FormError from '../../components/elements/FormError';
import LOGIN_MUTATION from '../../data/mutations/login';
import { setToken, isLoggedIn } from '../../utils/auth';
import ReactRouterPropTypes from 'react-router-prop-types';
import { map } from 'lodash';

class Login extends PureComponent {
  componentDidMount() {
    document.title = 'Voter to Voter | Login';
  }
  render() {
    if (isLoggedIn()) {
      return <Redirect to="/u/" />;
    }
    return (
      <Mutation mutation={LOGIN_MUTATION}>
        {login => (
          <div className="row justify-content-center">
            <div className="col-md-4">
              <Formik
                initialValues={{
                  email: '',
                  password: '',
                }}
                validationSchema={Yup.object().shape({
                  email: Yup.string()
                    .email('Must be a properly formatted email address')
                    .required('Email is required'),
                  password: Yup.string().required('password is required'),
                })}
                onSubmit={(values, { setSubmitting, setErrors }) => {
                  login({
                    variables: {
                      email: values.email.toLowerCase().trim(), // force for case insensitivity
                      password: values.password,
                    },
                  })
                    .then(({ data }) => {
                      setSubmitting(false);
                      if (data.login.token) {
                        setToken(data.login.token);
                        let qs = querystring.parse(this.props.location.search.slice(1));
                        if (qs && qs.next) {
                          window.location = qs.next;
                        } else {
                          window.location = '/u/';
                        }
                      } else {
                        const errors = ['Incorrect Email or Password'];
                        setErrors({ email: ' ', password: ' ', form: errors });
                      }
                    })
                    .catch(error => {
                      setSubmitting(false);
                      const errors = ['Incorrect Email or Password'];
                      setErrors({ email: ' ', password: ' ', form: errors });
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
                  <form onSubmit={handleSubmit} className="box">
                    {map(errors.form, error => <FormError key={error} error={error} />)}
                    <div className="field has-text-centered">
                      <h4 className="form-title">LOGIN</h4>
                    </div>
                    <TextInput
                      id="email"
                      label="Email"
                      type="email"
                      placeholder="Email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      error={touched.email && errors.email}
                      touched={touched.email}
                    />

                    <TextInput
                      id="password"
                      label="Password"
                      type="password"
                      placeholder="Password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      error={touched.password && errors.password}
                      touched={touched.password}
                    />
                    <div className="field ">
                      <div className="control">
                        <button
                          type="submit"
                          className="button is-link submit-button is-fullwidth"
                          color="primary"
                          disabled={isSubmitting}
                        >
                          Login
                        </button>
                      </div>
                    </div>
                    <p>
                      <Link to="/auth/forgot">Forgot Password?</Link>
                    </p>
                  </form>
                )}
              />
            </div>
          </div>
        )}
      </Mutation>
    );
  }
}

Login.propTypes = {
  location: ReactRouterPropTypes.location.isRequired,
};

export default withRouter(Login);
