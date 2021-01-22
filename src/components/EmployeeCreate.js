import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Card, CardSection, Button} from './common';
import {useSelector, useDispatch} from 'react-redux';
import {
  employeeCreate,
  employeeReset,
  employeeUpdate,
} from '../actions/EmployeeActions';
import EmployeeForm from './EmployeeForm';

const EmployeeCreate = () => {
  const dispatch = useDispatch();
  const {name, phone, shift} = useSelector(
    (state = null) => state.employeeForm,
  );
  useEffect(() => {
    dispatch(employeeReset());
    console.log('create log çalıştı');
  }, []);

  const onButtonPress = () => {
    dispatch(employeeCreate({name, phone, shift}));
  };
  return (
    <Card>
      <EmployeeForm />
      <CardSection>
        <Button onPress={() => onButtonPress()}>Create</Button>
      </CardSection>
    </Card>
  );
};

export default EmployeeCreate;

const styles = StyleSheet.create({
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 25,
  },
});
