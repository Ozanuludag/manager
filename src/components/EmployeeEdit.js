import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Card, CardSection, Button} from '../components/common';
import EmployeeForm from './EmployeeForm';
import {employeeEdit, employeeUpdate} from '../actions/EmployeeActions';
import {useDispatch, useSelector} from 'react-redux';
import _ from 'lodash';
import SendSMS from 'react-native-sms';
//Login
//test@test.com
//test123
const EmployeeEdit = ({item}) => {
  const dispatch = useDispatch();
  const {key} = item;
  const {name, phone, shift} = useSelector((state) => state.employeeForm);
 
  useEffect(() => {
    //dispatch(employeeUpdate({prop: 'name', value: name}));
    //dispatch(employeeUpdate({prop: 'phone', value: phone}));
    //dispatch(employeeUpdate({prop: 'shift', value: shift}));
    //Tek tek göndermek yerine bu şekilde gönderebiliriz.
    _.each(item, (value, prop) => {
      prop === 'key' ? null : dispatch(employeeUpdate({prop, value}));
    });
    console.log('Edit useEffect çalıştı');
  }, []);
 
  const onButtonPress = () => {
    dispatch(employeeEdit({key, name, phone, shift}));
  };

  const sendSMS = () => {
    SendSMS.send({
      body: `Sayın ${name} yeni vardiyanız: ${shift} günüdür. Sağlıklı günler dileriz.`,
      recipients: [phone],
      successTypes: ['sent', 'queued'],
      allowAndroidSendWithoutReadPermission: true
  }, (completed, cancelled, error) => {

      console.log('SMS Callback: completed: ' + completed + ' cancelled: ' + cancelled + 'error: ' + error);

  });
  };

  return (
    <Card>
      <EmployeeForm />
      <CardSection>
        <Button onPress={() => onButtonPress()}>Save Changes</Button>
      </CardSection>
      <CardSection>
        <Button onPress={() => sendSMS()}>Send SMS</Button>
      </CardSection>
    </Card>
  );
};

export default EmployeeEdit;

const styles = StyleSheet.create({});
