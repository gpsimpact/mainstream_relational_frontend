import gql from 'graphql-tag';

const VOTER_SEARCH = gql`
  query votersv2($input: VotersV2Input!) {
    votersv2(
      input:$input
    ) {
      items {
        state_file_id
        first_name
        middle_name
        last_name
        home_address
        city
        state
        zipcode
        dob
        vo_ab_requested_primary
        vo_ab_requested_date_primary
        vo_voted_primary
        vo_voted_date_primary
        vo_voted_method_primary
        vo_ab_requested_general
        vo_ab_requested_date_general
        vo_voted_general
        vo_voted_date_general
        vo_voted_method_general
      }
      pageInfo {
        totalCount
        hasMore
      }
    }
  }
`;

export default VOTER_SEARCH;
