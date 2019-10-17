import React, { PureComponent } from "react";
import VOTER_SEARCH from "../../data/queries/voterSearch2";
import { Query } from "react-apollo";
// import { withRouter } from 'react-router-dom';
// import { Row, Col } from 'reactstrap';
// import { parse, differenceInCalendarYears } from 'date-fns';
// import AssociateVoterButton from './AssociateVoterButton';
// import { faBadgeCheck, faExclamation } from '@fortawesome/fontawesome-pro-solid';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { InfiniteLoader, AutoSizer, List } from "react-virtualized";
import PropTypes from "prop-types";
import { uniqBy } from "lodash";
import NoVoterMatchDialogue from "./NoVoterMatchDialogue";
import VoterSearchResultsRow from "./VoterSearchResultsRow";

export class VoterSearchResults extends PureComponent {
  render() {
    return (
      <div>
        <Query
          query={VOTER_SEARCH}
          variables={{
            input: {
              first_name: this.props.first_name,
              last_name: this.props.last_name,
              city: this.props.city,
              limit: 50
            }
          }}
        >
          {({ data, loading, error, fetchMore }) => {
            if (loading) {
              return <p>Loading...</p>;
            } else if (error) {
              return <p>Error!</p>;
            }
            return (
             <div>
               {data && data.votersv2 && data.votersv2.items && data.votersv2.items.length >= 1
                  && data.votersv2.items.map((content, idx) => {
                    console.log(content)
                    return(
                    <div key={idx}>
                                    <VoterSearchResultsRow
                                      pv_id={this.props.pv_id}
                                      close_modal={this.props.close_modal}
                                      content={content}
                      />
                    </div>
                    )
                  })
                }
                {data && data.votersv2 && data.votersv2.items && data.votersv2.items.length < 1 &&
                  <p>
                    <br/>
                      There are no results for {this.props.first_name} {this.props.last_name} in {this.props.city}.
                      <br/>
                    </p>
                }
             </div>
            );
          }}
        </Query>
      </div>
    );
  }
}

VoterSearchResults.propTypes = {
  close_modal: PropTypes.func.isRequired,
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  pv_id: PropTypes.string.isRequired
};

export default VoterSearchResults;
