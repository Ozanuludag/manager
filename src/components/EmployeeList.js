import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {employeesFetch} from '../actions/EmployeeActions';
import {Card, CardSection} from '../components/common';
const EmployeeList = () => {
  const dispatch = useDispatch();
  const [newEmployees, setEmployees] = useState();
  const employees = useSelector((state) => state.employees);

  useEffect(() => {
    dispatch(employeesFetch());
    setEmployees(employees);
  }, [newEmployees]);

  //console.log('Yeni' + JSON.stringify(employees));
  //console.log('Data burda' + JSON.stringify(state));
  return (
    <View>
      <FlatList
        data={newEmployees}
        renderItem={({item, index}) => {
          return (
            <Card>
              <Text style={{fontWeight: 'bold', fontSize: 18}}>
                Çalışan {index}
              </Text>
              <CardSection>
                <Text>{item.name}</Text>
              </CardSection>
              <CardSection>
                <Text>{item.phone}</Text>
              </CardSection>
              <CardSection>
                <Text>{item.shift}</Text>
              </CardSection>
            </Card>
          );
        }}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

export default EmployeeList;

const styles = StyleSheet.create({});
