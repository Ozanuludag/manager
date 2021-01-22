import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH,
  EMPLOYEE_EDIT,
} from './types';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import {Actions} from 'react-native-router-flux';

export const employeeUpdate = ({prop, value}) => {
  console.log('prop: ' + prop + '\nvalue:' + value);
  return {
    type: EMPLOYEE_UPDATE,
    payload: {prop, value},
  };
};

export const employeeCreate = ({name, phone, shift}) => {
  const {currentUser} = auth();
  //console.log(currentUser.uid);

  return (dispatch) => {
    database()
      .ref(`/users/${currentUser.uid}/emplooyes`)
      .push({name, phone, shift})
      .then(() => {
        dispatch({type: EMPLOYEE_CREATE});
        Actions.pop({type: 'reset'});
      });
  };
};

export const employeeReset = () => {
  return (dispatch) => {
    dispatch({type: EMPLOYEE_CREATE});
  };
};

export const employeeEdit = ({key, name, phone, shift}) => {
  const {currentUser} = auth();

  return (dispatch) => {
    database()
      .ref(`/users/${currentUser.uid}/emplooyes/${key}`)
      .set({
        name,
        phone,
        shift,
      })
      .then(() => {
        console.log('Update successfuly');
        dispatch({type: EMPLOYEE_EDIT});
        Actions.reset('employeeList');
      });
  };
};

export const employeesFetch = () => {
  const {currentUser} = auth();

  return (dispatch) => {
    database()
      .ref(`/users/${currentUser.uid}/emplooyes`)
      .once('value')
      .then((snapshot) => {
        var employees = [];
        snapshot.forEach((child) => {
          employees.push({
            key: child.key,
            name: child.val().name,
            phone: child.val().phone,
            shift: child.val().shift,
          });
        }),
          dispatch({type: EMPLOYEES_FETCH, payload: employees});
      });
  };
};
/*
export const fetchSuccess = () => {
  return{
    type: 'FETCH_SUCCESS'
  }
}
*/
