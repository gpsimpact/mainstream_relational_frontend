import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import PointsProfile from './PointsProfile';
import PotentialVotersList from './PotentialVotersList';
import NewPotentialVoterForm from './NewPotentialVoterForm';
import OrgSidebarInfo from './OrgSidebarInfo';
import classNames from 'classnames';
import ReactRouterPropTypes from 'react-router-prop-types';
import { isOrgAdmin } from '../../utils/auth';
import OrgAdminSection from './OrgAdminSection';

class UserHome extends PureComponent {
  state = {
    newPvModalOpen: false,
  };
  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
            <button
                type="submit"
                className="button is-link submit-button is-fullwidth my-4 d-lg-none"
                color="primary"
                onClick={() => this.setState({ newPvModalOpen: true })}
              >
                Add new contact
              </button>

              <PotentialVotersList org_id={this.props.match.params.orgSlug} />
              {isOrgAdmin(this.props.match.params.orgSlug) ? <OrgAdminSection /> : null}
              <div className={classNames('modal', { 'is-active': this.state.newPvModalOpen })}>
                <div
                  className="modal-background"
                  onClick={() => this.setState({ newPvModalOpen: !this.state.newPvModalOpen })}
                />
                <div className="modal-content">
                  <NewPotentialVoterForm
                    org_slug={this.props.match.params.orgSlug}
                    toggleOpenStatus={() =>
                      this.setState({ newPvModalOpen: !this.state.newPvModalOpen })
                    }
                  />
                </div>
                <button
                  className="modal-close is-large"
                  aria-label="close"
                  onClick={() => this.setState({ newPvModalOpen: !this.state.newPvModalOpen })}
                />
              </div>
            </div>
            <div className="col-lg-4">
              <button
                type="submit"
                className="button is-link submit-button is-fullwidth my-4"
                color="primary"
                onClick={() => this.setState({ newPvModalOpen: true })}
              >
                Add new contact
              </button>
              <br />
              <OrgSidebarInfo />
              <br />
              <div className="content box">
                <h4>Instructions</h4>
                <p>
                  <span className="tag is-danger">Red Items require attention. Click them.</span>
                  <br />
                </p>
                <small>
                  <dl>
                    <dt>
                      <abbr title="The count of available tasks for that contact.">TASKS:</abbr>
                    </dt>
                    <dd>The count of available tasks for that contact.</dd>
                    <dt>
                      <abbr title="Has this contact been matched to the voter file?">
                        Registered?
                      </abbr>
                    </dt>
                    <dd>Has this contact been matched to a registered voter in the voter file?</dd>
                    <dt>
                      <abbr title="Has this contact applied for a mail in ballot?">VBM?</abbr>
                    </dt>
                    <dd>Has this contact applied for a mail in ballot?</dd>

                    <dt>
                      <abbr title="Has this contact cast a ballot in the Nov. 2018 general election?">
                        Voted?
                      </abbr>
                    </dt>
                    <dd>Has this contact cast a ballot in this election?</dd>
                  </dl>
                </small>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

UserHome.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export default withRouter(UserHome);
