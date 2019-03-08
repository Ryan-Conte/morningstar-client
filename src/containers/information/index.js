import React from 'react'
// import { push } from 'connected-react-router'
import Charts from '../../component/Charts';


export default class Information extends React.PureComponent {

  componentWillMount() {
    this.setState({
        ticker: null,
    });
  }
  
  //http://localhost:8055/holdings/SYG
  componentDidMount() {
    console.log(this.props.match.params.ticker);
    this.setState({
        ticker: this.props.match.params.ticker
    })
    document.title = 'React Morning Star ' + this.props.match.params.ticker;
  }

  render() {
    return(
        <div>
            <Charts ticker={this.state.ticker}></Charts>
        </div>
    );
  }
}
