import React, { PureComponent } from "react";
// import { faEdit, faTrashAlt } from '@fortawesome/fontawesome-pro-solid';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import PropTypes from "prop-types";
import classNames from "classnames";

class PvListRow extends PureComponent {
  render() {

    const { content } = this.props;
    const isMatched = content && content.voterFileRecord && content.voterFileRecord.state_file_id;
    return (
  
          <React.Fragment>
          

                <div className="voter-header">
                <div className="row align-items-center">
                  <div className="col-md-6">
                      <h2 className="voterName">
                         {content.first_name} {content.last_name}
                      </h2>
                  </div>
                  <div className="col-md-6 text-right">
                      <a className="btn btn-primary" onClick={this.props.openPvEditModal}>Edit</a>
                      <a className="btn btn-secondary" onClick={this.props.openDeleteModal}>Delete</a>
                  </div>
                </div>
                </div>

                <div className="content voterContent">
                  <div className="row">
                    {
                      !isMatched &&
                      <div className="col-lg-12">
                          <h3>{content.city}</h3>
                          <a className="btn btn-primary" onClick={this.props.openVoterReviewModal}>
                            See if they are registered to vote!
                          </a>
                      </div>
                    }
                    {
                      isMatched && 
                      <React.Fragment>
                      <div className="col-lg-4">
                          <h3><a onClick={this.props.openVoterReviewModal}>
                            as{" "}
                            {content.voterFileRecord.first_name}{" "}
                            {content.voterFileRecord.last_name}{" "}
                            ({content.voterFileRecord.party}){" "}
                            {content.voterFileRecord.city},{" "}
                            {content.voterFileRecord.state}{" "}
                            {content.voterFileRecord.zipcode}
                      </a></h3>
                      <h4>
                      Voter Propensity Score:{" "}
                        {content.voterFileRecord.propensity_score} / 4
                      </h4>
                      <h3>
                      <a className="btn btn-primary" onClick={this.props.openVoterReviewModal}>
                          See voter file/remove voter match
                        </a>
                      </h3>

                      </div>
                      <div className="col-lg-4">
                        <h3>Primary Election (Aug 6)</h3>
                        <div className="row no-gutters">
                          <div className="col-lg-4">
                            {/* {TAG} */}
                            <div
                                className="tags has-addons hover-hand"
                                onClick={() =>
                                  this.props.openVoteByMailModal("primary")
                                }
                              >
                                <span
                                  className={classNames("tag", "is-white", {
                                    "tag-button-danger":
                                      content.voterFileRecord
                                        .vo_ab_requested_primary === false,
                                    "tag-button-success":
                                      content.voterFileRecord
                                        .vo_ab_requested_primary === true
                                  })}
                                >
                                  <abbr title="Has this contact applied for a mail in ballot?">
                                    VBM?
                                  </abbr>
                                </span>
                                <span
                                  className={classNames("tag", {
                                    "is-danger":
                                      content.voterFileRecord
                                        .vo_ab_requested_primary === false,
                                    "is-success":
                                      content.voterFileRecord
                                        .vo_ab_requested_primary === true
                                  })}
                                >
                                  {content.voterFileRecord
                                    .vo_ab_requested_primary
                                    ? "Yes"
                                    : "No"}
                                </span>
                              </div>
                            {/* {END TAG} */}

                          </div>
                          <div className="col-lg-4">
                                {/* TAG */}
                                      <div
                                            className="tags has-addons hover-hand"
                                            onClick={() =>
                                              this.props.openVotedModal("primary")
                                            }
                                          >
                                            <span
                                              className={classNames("tag", "is-white", {
                                                "tag-button-danger":
                                                  content.voterFileRecord
                                                    .vo_voted_primary === false,
                                                "tag-button-success":
                                                  content.voterFileRecord
                                                    .vo_voted_primary === true
                                              })}
                                            >
                                              <abbr title="Has this contact cast a ballot in the primary election?">
                                                Voted?
                                              </abbr>
                                            </span>
                                            <span
                                              className={classNames("tag", {
                                                "is-danger":
                                                  content.voterFileRecord
                                                    .vo_voted_primary === false,
                                                "is-success":
                                                  content.voterFileRecord
                                                    .vo_voted_primary === true
                                              })}
                                            >
                                              {content.voterFileRecord.vo_voted_primary
                                                ? "Yes"
                                                : "No"}
                                            </span>
                                          </div>
                                {/* END TAG */}
                          </div>
                        </div>
                
                      </div>
                      <div className="col-lg-4">
                      <h3>General Election (Nov 5)</h3>
                      <div className="row">
                        <div className="col-lg-4">
                                {/*  TAG */}
                                <div
                                className="tags has-addons hover-hand"
                                onClick={() =>
                                  this.props.openVoteByMailModal("general")
                                }
                              >
                                <span
                                  className={classNames("tag", "is-white", {
                                    "tag-button-danger":
                                      content.voterFileRecord
                                        .vo_ab_requested_general === false,
                                    "tag-button-success":
                                      content.voterFileRecord
                                        .vo_ab_requested_general === true
                                  })}
                                >
                                  <abbr title="Has this contact applied for a mail in ballot?">
                                    VBM?
                                  </abbr>
                                </span>
                                <span
                                  className={classNames("tag", {
                                    "is-danger":
                                      content.voterFileRecord
                                        .vo_ab_requested_general === false,
                                    "is-success":
                                      content.voterFileRecord
                                        .vo_ab_requested_general === true
                                  })}
                                >
                                  {content.voterFileRecord
                                    .vo_ab_requested_general
                                    ? "Yes"
                                    : "No"}
                                </span>
                              </div>
                                {/* END TAG */}
                                </div>
<div className="col-lg-4">
                                {/*  TAG */}
                                <div
                                className="tags has-addons hover-hand"
                                onClick={() =>
                                  this.props.openVotedModal("general")
                                }
                              >
                                <span
                                  className={classNames("tag", "is-white", {
                                    "tag-button-danger":
                                      content.voterFileRecord
                                        .vo_voted_general === false,
                                    "tag-button-success":
                                      content.voterFileRecord
                                        .vo_voted_general === true
                                  })}
                                >
                                  <abbr title="Has this contact cast a ballot in the general election?">
                                    Voted?
                                  </abbr>
                                </span>
                                <span
                                  className={classNames("tag", {
                                    "is-danger":
                                      content.voterFileRecord
                                        .vo_voted_general === false,
                                    "is-success":
                                      content.voterFileRecord
                                        .vo_voted_general === true
                                  })}
                                >
                                  {content.voterFileRecord.vo_voted_general
                                    ? "Yes"
                                    : "No"}
                                </span>
                              </div>
                                {/* END TAG */}
                                </div>
                                </div>
                      </div>
                      </React.Fragment>
                    }

                  </div>
                  
  

                </div>
               

          </React.Fragment>
   
    );
  }
}

PvListRow.propTypes = {
  content: PropTypes.object.isRequired,
  openVoterReviewModal: PropTypes.func.isRequired,
  openVoterSearchModal: PropTypes.func.isRequired,
  openVoteByMailModal: PropTypes.func.isRequired,
  openVotedModal: PropTypes.func.isRequired,
  openTaskModal: PropTypes.func.isRequired,
  openPvEditModal: PropTypes.func.isRequired,
  openDeleteModal: PropTypes.func.isRequired,
 
};

export default PvListRow;

// previous version before issue #14
// {
//   content.voterFileRecord.state_file_id ? (
//     <div className="content">
//       <strong>
//         {content.voterFileRecord.first_name} {content.voterFileRecord.last_name} ({
//           content.voterFileRecord.party
//         })
//                     </strong>
//       <br />
//       <small>
//         {content.voterFileRecord.home_address} - {content.voterFileRecord.city},{' '}
//         {content.voterFileRecord.state} {content.voterFileRecord.zipcode}
//       </small>
//       <br />
//       <small>
//         Points: {content.pointsEarned} / {content.pointsPotential}
//       </small>
//       <br />
//       <small>
//         Voter Propensity Score: {content.voterFileRecord.propensity_score} / 4
//                     </small>
//     </div>
//   ) : (
//     <div className="content">
//       <strong>
//         {content.first_name} {content.last_name}
//       </strong>
//       <br />
//       <small>{content.city}</small>
//       <br />
//       <small>
//         Points: {content.pointsEarned} / {content.pointsPotential}
//       </small>
//     </div>
//   )
// }

// This was hoverable edit buttons before #14
// <div className="column is-one-fifth">
//   <div className="field is-grouped">
//     <p className="control">
//       {content.voterFileRecord.state_file_id ? null : (
//         <a
//           className="button is-danger is-outlined"
//           onClick={this.props.openPvEditModal}
//         >
//           <span className="icon is-small">
//             <FontAwesomeIcon icon={faEdit} />
//           </span>
//         </a>
//       )}
//       <a
//         className="button is-danger is-outlined"
//         onClick={this.props.openDeleteModal}
//       >
//         <span className="icon is-small">
//           <FontAwesomeIcon icon={faTrashAlt} />
//         </span>
//       </a>
//     </p>
//   </div>
// </div>

///  TASKS OLD SCHOOL

// <div className="field is-grouped is-grouped-multiline">
//   <div className="control">
//     <div
//       className="tags has-addons hover-hand"
//       onClick={this.props.openTaskModal}
//     >
//       <span
//         className={classNames("tag", "is-white", {
//           "tag-button-danger":
//             content.countAvailableTasks > 0,
//           "tag-button-success":
//             content.countAvailableTasks === 0
//         })}
//       >
//         <abbr title="The count of available tasks for that contact.">
//           TASKS:
//                               </abbr>
//       </span>
//       <span
//         className={classNames("tag", {
//           "is-danger": content.countAvailableTasks > 0,
//           "is-success": content.countAvailableTasks === 0
//         })}
//       >
//         {content.countCompletedTasks}/
//                               {content.countAvailableTasks +
//           content.countCompletedTasks}
//       </span>
//     </div>
//   </div>
// </div>
