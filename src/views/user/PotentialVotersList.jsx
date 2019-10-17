import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { Query } from 'react-apollo';
import MY_POTENTIAL_VOTERS from '../../data/queries/potentialVoters2';
import VoterSearchModal from './VoterSearchModal';
import PvListRow from './PvListRow';
import ReactRouterPropTypes from 'react-router-prop-types';
import LinkedVoterFileRecordReviewModal from './LinkedVoterFileRecordReviewModal';
import VoteByMailModal from './VoteByMailModal';
import VotedModal from './VotedModal';
import TaskModal from './TaskModal';
import PvEditModal from './PvEditModal';
import DeleteModal from './DeleteModal';
// import { queries, fragments } from '../../data/queries';
import { Pagination } from './Pagination';
import { PageInfo } from '../../utils/parsePageInfo';

class PotentialVotersList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      voterSearchModalOpen: false,
      voterReviewModalOpen: false,
      voteByMailModalOpen: false,
      taskModalOpen: false,
      votedModalOpen: false,
      pvEditModalOpen: false,
      deleteModalOpen: false,
      selectedPotentialVoter: null,
      selectedCycle: null,
    
    };

    this._openModal = this._openModal.bind(this);
    this._closeModal = this._closeModal.bind(this);
  }

  _openModal = (modalName, potentialVoter, cycle) => {
    this.setState({
      [modalName]: true,
      selectedPotentialVoter: potentialVoter,
      selectedCycle: cycle ? cycle : null,
    });
  };

  _closeModal = (modalName, potentialVoter) => {
    this.setState({
      [modalName]: false,
      selectedPotentialVoter: potentialVoter,
      selectedCycle: null,
    });
  };


  render() {
    const pageInfo = new PageInfo(this.props.location.search);
    return (
      <div className="row">
        <div className="col-md-12">
        <Query
          query={MY_POTENTIAL_VOTERS}
          variables={{
            input: {
              limit: pageInfo.limit,
              org_id: this.props.match.params.orgSlug,
              offset: pageInfo.offset
            }
          }}
          fetchPolicy="cache-and-network"
        >
          {({ data, loading, error, fetchMore }) => {
            const potentialVoters = data && data.potentialVotersV2 ? data.potentialVotersV2 : [];
            if (loading) {
              return <p>Loading...</p>;
            } else if (error) {
              return <p>Error!</p>;
            }
            if (potentialVoters.items.length === 0) {
              return (
                <div className="content">
                  <h1 className="title">Get started by adding a contact.</h1>

<p>Welcome to this non-partisan relational advocacy tool. Thank you for agreeing to reach out to your family, friends, and community to help engage them in voting. There is no more effective get out the vote effort than people getting the people they know to vote.</p>

<p>This tool revolves around your contacts. We encourage you to list at least ten people you know, and take the first step: matching them up to the public voter file. If you can't find a match, we have instructions for checking for errors or getting in touch to see if they are registered to vote, and registering them if they are not.</p>

<p>As an Ambassador, you’ll get email from Voter to Voter during the election season with important messages to pass on to your voters, as well as tips for how to talk about voting, important links and critical deadlines. In addition, we’ll support you by email, phone, and online, and we have a community of ambassadors you can rely on.</p>

<p>In the end, you make all the difference. Your enthusiasm, your dedication to creating a culture of voting, will convince your circle to get out and become engaged, too. Thank you.</p>

                </div>
              );
            }

            return (
              <div>
                  {
                  potentialVoters && potentialVoters.pageInfo &&
                  <Pagination potentialVoters={potentialVoters} pageInfo={pageInfo} org_id={this.props.match.params.orgSlug}/>
                }
                {potentialVoters && potentialVoters.items && potentialVoters.items.length > 0
                  && potentialVoters.items.map((content, index) => {
                    return(
                      <div key={index}>
                          <PvListRow
                                    id={content.id}
                                    content={content}
                                    index={index}
                                    openVoterSearchModal={() =>
                                      this._openModal('voterSearchModalOpen', content)
                                    }
                                    openVoterReviewModal={() =>
                                      this._openModal('voterReviewModalOpen', content)
                                    }
                                    openVoteByMailModal={cycle =>
                                      this._openModal('voteByMailModalOpen', content, cycle)
                                    }
                                    openVotedModal={cycle =>
                                      this._openModal('votedModalOpen', content, cycle)
                                    }
                                    openTaskModal={() => this._openModal('taskModalOpen', content)}
                                    openPvEditModal={() =>
                                      this._openModal('pvEditModalOpen', content)
                                    }
                                    openDeleteModal={() =>
                                      this._openModal('deleteModalOpen', content)
                                    }
                                  />
                      </div>
                    )
                  })

                
                }
                {
                  potentialVoters && potentialVoters.pageInfo &&
                  <Pagination potentialVoters={potentialVoters} pageInfo={pageInfo} org_id={this.props.match.params.orgSlug}/>
                }
                

                {this.state.selectedPotentialVoter ? (
                  <div>
                    <VoterSearchModal
                      open={this.state.voterSearchModalOpen}
                      potentialVoter={this.state.selectedPotentialVoter}
                      close={() => this._closeModal('voterSearchModalOpen')}
                    />
                    <LinkedVoterFileRecordReviewModal
                      open={this.state.voterReviewModalOpen}
                      potentialVoter={this.state.selectedPotentialVoter}
                      close={() => this._closeModal('voterReviewModalOpen')}
                      openVoterSearchModal={() =>
                        this._openModal('voterSearchModalOpen', this.state.selectedPotentialVoter)
                      }
                    />
                    <VoteByMailModal
                      open={this.state.voteByMailModalOpen}
                      potentialVoter={this.state.selectedPotentialVoter}
                      close={() => this._closeModal('voteByMailModalOpen')}
                      cycle={this.state.selectedCycle}
                    />
                    <VotedModal
                      open={this.state.votedModalOpen}
                      potentialVoter={this.state.selectedPotentialVoter}
                      close={() => this._closeModal('votedModalOpen')}
                      cycle={this.state.selectedCycle}
                    />
                    <TaskModal
                      open={this.state.taskModalOpen}
                      potentialVoter={this.state.selectedPotentialVoter}
                      close={() => this._closeModal('taskModalOpen')}
                      openVoterSearchModal={() =>
                        this._openModal('voterSearchModalOpen', this.state.selectedPotentialVoter)
                      }
                    />
                    <PvEditModal
                      open={this.state.pvEditModalOpen}
                      potentialVoter={this.state.selectedPotentialVoter}
                      close={() => this._closeModal('pvEditModalOpen')}
                    />
                    <DeleteModal
                      open={this.state.deleteModalOpen}
                      potentialVoter={this.state.selectedPotentialVoter}
                      close={() => this._closeModal('deleteModalOpen')}
                    />
                  </div>
                ) : null}
              </div>
            );
          }}
        </Query>
        </div>
      </div>
    );
  }
}

PotentialVotersList.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export default withRouter(PotentialVotersList);
