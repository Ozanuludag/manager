import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import LoginForm from './components/LoginForm';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  //initial parameter is first will be rendering page.
  return (
    <Router sceneStyle={{}}>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Please Login" />
        </Scene>
        <Scene key="main">
          <Scene
            key="employeeList"
            component={EmployeeList}
            title="Employees"
            rightTitle="Add"
            leftTitle="Back"
            onLeft={() => Actions.auth()}
            onRight={() => Actions.employeeCreate()}
          />
          <Scene
            key="employeeCreate"
            component={EmployeeCreate}
            title="Create Employee"
          />
          <Scene
            key="employeeEdit"
            component={EmployeeEdit}
            title="Edit Employee"
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
