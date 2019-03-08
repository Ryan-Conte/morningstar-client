import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import {Doughnut, Bar, Line} from 'react-chartjs-2';
import {Container,Row, Col, Table} from 'react-bootstrap';


class Search extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  
  componentWillMount() {
    this.setState({
      holdings: [],
      company: [],
    });
  }



    componentDidMount() {
        console.log(this.props);
        fetch(`http://localhost:8055/holdings/SYG`)
        .then(response => response.json())
        .then(result => this.setdata(result));
    }



    setdata(result){
        console.log(result);

        this.setState({
            company: result.company,
            holdings: result.holdings
          })
    }




  render() {
    const Donutdata = {
        labels: [
            'Red',
            'Green',
            'Yellow'
        ],
        datasets: [{
            data: [300, 50, 100],
            backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ],
            hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ]
        }]
    };

    const Bardata = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'My Test dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40]
          }
        ]
      };
      const Linedata = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
          }
        ]
      };

    return (
        <Container>
        <h1>{this.state.company.companyName} ({this.props.ticker}) </h1>
            <Row>
                <Col>
                    <Doughnut data={Donutdata} />
                </Col>
                <Col>
                <Bar
                    data={Bardata}
                    width={100}
                    height={50}
                    options={{
                        maintainAspectRatio: false
                    }}
                    />
                </Col>
            </Row>
                    
            <Row>
                <Col>
                <Line data={Linedata} />

                </Col>
                <Col>
                </Col>
            </Row>
            <Row>
            <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th>Company Ticker</th>
                        <th>Holdings Name</th>
                        <th>Holdings Port Offer</th>
                        <th>Holdings Shares Owned</th>
                        <th>Holdings First Bought</th>
                        <th>Holdings Style</th>
                        <th>Holdings Sector</th>
                        <th>Holdings Country</th>
                        <th>Holdings YTD</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.holdings.map((item, i) => (
                          <tr key={i}>
                          <td>{item.companyTicker}</td>
                          <td>{item.holdingsCountry}</td>
                          <td>{item.holdingsFirstBought}</td>
                          <td>{item.holdingsName}</td>
                          <td>{item.holdingsPortOffer}</td>
                          <td>{item.holdingsSector}</td>
                          <td>{item.holdingsSharesOwned}</td>
                          <td>{item.holdingsStyle}</td>
                          <td>{item.holdingsYTD}</td>

                        </tr>
                    ))}
                    </tbody>
                </Table>
            </Row>
        </Container>
    );
  }
}

export default connect(state => ({
  holdings: state.data,
}))(Search);

