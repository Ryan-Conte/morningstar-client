import React from 'react';
import styled from 'styled-components';
import {Container,Row, Col, ListGroup,FormControl} from 'react-bootstrap';
import {
  Link
} from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  getSearchResults
} from '../../actions'

class Search extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.setState({
      companies: [],
    });
  }
  
  updateQuery(result){
    if (result.status == true) {
      const companies = result.companies;
      if (result.status == true) {
        this.setState({
          companies,
        });
      }
    }
  }

  handleChange(event){
      console.log(event.target.value);
      // this.props.dispatch(getSearchResults(event.target.value));
      if((event.target.value).length >= 1){
        fetch(`http://localhost:8055/company/${event.target.value}`)
        .then(response => response.json())
        .then(result => this.updateQuery(result));
        console.log(this.state.companies);

      }else{
        this.setState({
          companies: []
        })
      }
  }

  render() {
    return (
        <Container>
        <Row>
          <Col>
          <h2>Search for Company Name</h2>
              <FormControl
                placeholder="Search for company E.G (United States...)"
                aria-label="MTC"
                onChange={this.handleChange.bind(this)}
              />
              <ListGroup>
                {this.state.companies.map((item, i) => (
                  <Link key={i} to={item.companyTicker}> <ListGroup.Item> {item.companyName} ({item.holdingsAmount} Holdings)</ListGroup.Item></Link>
                ))}
              </ListGroup>
    
    
          </Col>
        </Row>
      </Container>
    );
  }
}

export default connect(state => ({
  companies: state.companies,
}))(Search);

