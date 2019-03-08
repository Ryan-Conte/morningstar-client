import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import {Doughnut} from 'react-chartjs-2';


class Search extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  
  componentWillMount() {
    this.setState({
      data: [],
    });
  }

  pullData(){
    console.log(this.props.ticker);
  }

  render() {

    const data = {
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
    
 
    return (
        <div>
        <h1> Charts {this.props.ticker} </h1>
        <Doughnut data={data} />
        </div>
    );
  }
}

export default connect(state => ({
  holdings: state.data,
}))(Search);

