import auth from '@react-native-firebase/auth';
import {EMAIL_CHANGED, PASSWORD_CHANGED} from './types';

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
    console.log(email + ' ' + password);
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        console.log('Giriş yaptı aslında');  
        dispatch({type: 'LOGIN_USER_SUCCESS', payload: user});
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
    
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
    
        console.error(error);
      });
     
  };
};
