import gql from 'graphql-tag';

export const updatePageInfo = (_, variables, { cache }) => {
    const data = {
        data: { voterPageInfo: {
            nextCursor: variables.nextCursor,
            previousCursor: variables.previousCursor,
            hasNext: variables.hasNext,
            hasPrevious: variables.hasPrevious
        }}
    }
    cache.writeData(data);
    return data;
}

export const VOTER_PAGE_INFO = gql`
    query {
        voterPageInfo @client {
            nextCursor
            previousCursor
            hasNext
            hasPrevious
        }
    }
`;

export const TOGGLE_VOTER_PAGE_INFO = gql`
    mutation {
        updatePageInfo @client
    }
`;
export const clientMutations = {
    updatePageInfo,
}