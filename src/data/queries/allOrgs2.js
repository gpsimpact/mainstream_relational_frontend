import gql from 'graphql-tag';

const ALL_ORGS2 = gql`
  query organizationsV2 {
    organizationsV2 {
     
        id
        name
        cta
        slug
        contact_name
        contact_email
        contact_phone
        admin_notes
      
    }
  }
`;

export default ALL_ORGS2;
