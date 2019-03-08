import React from 'react';
import styled from 'styled-components';
import {Container,Row, Col, ListGroup,FormControl} from 'react-bootstrap';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Search extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.setState({
      companies: [],
    });
  }

  render() {
    return (
        <Container>
        <Row>
          <Col>
          <h2>Search for Company Name</h2>
              <FormControl
                placeholder="Search"
                aria-label="MTC"
              />
              <ListGroup>

                {/* <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
              </ListGroup>
    
    
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = ({ counter }) => ({
  
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {

    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)

