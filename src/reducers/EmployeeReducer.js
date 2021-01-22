import {EMPLOYEES_FETCH, EMPLOYEE_EDIT} from '../actions/types';

const INITIAL_STATE = {
  errorLog: '',
  loading: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEES_FETCH:
      return {...state, employees: action.payload, loading: false};
    case EMPLOYEE_EDIT:
      return {...INITIAL_STATE, loading: false};
    // case 'FETCH_SUCCESS':
    //   return {...state, loading: false}
    default:
      return state;
  }
};
