import auth from '@react-native-firebase/auth';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
} from './types';
import {Actions} from 'react-native-router-flux';

export const emailChanged = (text) => {
  //console.log(text); LoginFormdan öncelikle bu action'a veri geliyor, buradan reducer'a gidiyor.
  return {
    type: EMAIL_CHANGED,
    payload: text,
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text,
  };
};

export const loginUser = ({email, password}) => {
  return (dispatch) => {
    dispatch({type: LOGIN_USER});
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => loginUserSuccess(dispatch, user))
      .catch(() => {
        auth()
          .createUserWithEmailAndPassword(email, password)
          .then((user) => {
            console.log('User account created & signed in!');
            loginUserSuccess(dispatch, user);
          })
          .catch((error) => loginUserFail(error, dispatch));
      });
  };
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS, 
    payload: user
  });

  Actions.main();

};

const loginUserFail = (error, dispatch) => {
  if (error.code === 'auth/email-already-in-use') {
    var errorLog = 'That email address is already in use!';
    dispatch({type: LOGIN_USER_FAIL, payload: errorLog});
  } else if (error.code === 'auth/invalid-email') {
    var errorLog = 'That email address is invalid!';
    dispatch({type: LOGIN_USER_FAIL, payload: errorLog});
  } else {
    dispatch({type: LOGIN_USER_FAIL, payload: error});
  }
};
