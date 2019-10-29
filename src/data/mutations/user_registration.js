import gql from 'graphql-tag';

const REGISTRATION_MUTATION = gql`
  mutation registerUser(
    $first_name: String!
    $last_name: String!
    $email: String!
    $password: String!
    $org_id: String!
    $city: String!
    $phone: String!
    $state: String
  ) {
    registerUser(
      user: {
        first_name: $first_name
        last_name: $last_name
        email: $email
        password: $password
        org_id: $org_id
        city: $city
        phone: $phone
        state: $state
      }
    ) {
      first_name
      last_name
      email
    }
  }
`;

export default REGISTRATION_MUTATION;
