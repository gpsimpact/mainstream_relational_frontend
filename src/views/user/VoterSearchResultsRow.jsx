import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { parse, differenceInYears } from 'date-fns';
import AssociateVoterButton from './AssociateVoterButton';

class VoterSearchResultsRow extends PureComponent {
  render() {
    const { content } = this.props;
    return (
      <div className="single-voter-search">
        <div className="row align-items-center">
          <div className="col-sm-8">
                <h3>
                  {content.first_name} {content.last_name}
                  </h3>
                  <p>
                <small>
                  {content.home_address} - {content.city}, {content.state} {content.zip}{' '}
                  {differenceInYears(new Date(), parse(content.dob))} years old
                </small>
                
                </p>
          </div>
          <div className="col-sm-4">
          <AssociateVoterButton
                pv_id={this.props.pv_id}
                voter_id={content.state_file_id}
                close_modal={this.props.close_modal}
              />
          </div>
        </div>
        </div>
    );
  }
}

VoterSearchResultsRow.propTypes = {
  content: PropTypes.object.isRequired,
  pv_id: PropTypes.string.isRequired,
  close_modal: PropTypes.func.isRequired,
};

export default VoterSearchResultsRow;
