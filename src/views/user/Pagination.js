import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import Nav from 'react-bootstrap/Nav';

export const Pagination = (props) => {
    const {pageInfo, potentialVoters, org_id } = props;
    let prev_page = null;
    let next_page = null;
    if(pageInfo && pageInfo.pageNumber > 1) {
        prev_page = pageInfo.pageNumber - 1;
    }
    if(pageInfo && potentialVoters && potentialVoters.pageInfo && potentialVoters.pageInfo.hasMore){
        next_page = pageInfo.pageNumber + 1;
    }
    return(
        <div className="row justify-content-center">
        <div className="pagination">
            <LinkContainer to={`/u/${org_id}?page=${prev_page}`} className={`${!prev_page ? 'disabled': ''}`}>
                <Nav.Link> Previous Page</Nav.Link>
            </LinkContainer>
            
            <LinkContainer to={`/u/${org_id}?page=${next_page}`} className={`${!next_page ? 'disabled': ''}`}>
                <Nav.Link> Next Page</Nav.Link>
            </LinkContainer>
        </div>
        </div>
    )
}