import { VOTER_PAGE_INFO } from '../../lib/resolvers'
import React from 'react';
import { Query } from 'react-apollo';


export const VoterPageInfoComp = props => (
    <Query { ...props } query={VOTER_PAGE_INFO}>
        {payload => props.children(payload)}
    </Query>
)