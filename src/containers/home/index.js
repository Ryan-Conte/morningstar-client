import React from 'react'
// import { push } from 'connected-react-router'
import Search from '../../component/Search';
export default class Home extends React.PureComponent {
  componentDidMount() {
    document.title = 'React Morning Star Search';
  }


  render() {
    return <Search/>;
  }
}
