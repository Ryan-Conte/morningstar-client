import axios from 'axios';
import { SEARCHCOMP } from './modules/const';
// import qs from 'qs';

function getSearchResults(query) {
    return dispatch => {
        return axios.get(`http://localhost:8055/company/${query}`).then(res => {

        return dispatch({
            type: SEARCHCOMP,
            companies: res.data.companies,
        });

        }).catch(error => {
            
        });

    };
  }


  export {
    getSearchResults,
  };  