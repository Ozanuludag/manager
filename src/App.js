import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import {Header} from './components/common';
import thunk from 'redux-thunk';
import Router from './Router';

const App = () => {
  const store = createStore(reducers, {}, applyMiddleware(thunk));
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
