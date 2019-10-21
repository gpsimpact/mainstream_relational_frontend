import React from 'react';
import { Link } from "react-router-dom";
import _ from 'lodash';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import SortByAlpha from '@material-ui/icons/SortByAlpha';

class ListOrgs extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            originalOrgs: _.orderBy(props.orgs, [org => org.name.toLowerCase()], ['asc']),
            displayedOrgs: _.orderBy(props.orgs, [org => org.name.toLowerCase()], ['asc']),
            sortOrder: 'asc',
        }
    }

    sortAZ(){
        let orgs = this.state.displayedOrgs;
        let nextOrder = '';
        if(this.state.sortOrder === 'asc'){
            orgs = _.orderBy(orgs, [org => org.name.toLowerCase()], ['desc']);
            nextOrder = 'desc';
        } else {
            orgs = _.orderBy(orgs, [org => org.name.toLowerCase()], ['asc']);
            nextOrder = 'asc';
        };

        this.setState({sortOrder: nextOrder, displayedOrgs: orgs});
    }

    filterList = (e) => {
        let orgs = this.state.originalOrgs;
        let filteredOrgs = [];
        _.filter(orgs, (org,idx) => {
            let name = org.name.toLowerCase();
            let comp = e.target.value.toLowerCase();
            if(name.indexOf(comp) !== -1){
                filteredOrgs.push(org);
            }
        })
        this.setState({
            displayedOrgs: _.orderBy(filteredOrgs, [org => org.name.toLowerCase()], [this.state.sortOrder])
        })
    }

    render(){
        return(
            <Row>
                <Col>
                
 
                <h3 className="section-title">{this.props.title ? this.props.title : 'Teams'}</h3>
                <Row>
                    <Col md={10}>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Filter" onChange={this.filterList}></Form.Control>
                            <Form.Label bsPrefix={'sr-only'}>Filter</Form.Label>
                        </Form.Group>
                    </Col>
                    <Col md={2}>
                        <SortByAlpha onClick={()=>this.sortAZ()}/>
                    </Col>
                </Row>


                <ul className="org-list mt-4">

                    {
                        this.state.displayedOrgs.map((org, idx) => {
                            return(
                                <li key={org.id}>
                                    <Link to={`/org/${org.slug}`}>{org.name}</Link>
                                </li>

                            )
                        })
                    }
                    </ul>
                    </Col>
            </Row>
        )
    }
}

export default ListOrgs;