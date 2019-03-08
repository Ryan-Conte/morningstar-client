import { SEARCHCOMP } from './const';

const initialState = {
  count: 0,
  companies: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    
    case SEARCHCOMP:
      return {
        ...state,
        companies: state.companies,
      }

    default:
      return state
  }
}





