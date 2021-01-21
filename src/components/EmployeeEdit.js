import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Card, CardSection, Button} from '../components/common';
import EmployeeForm from './EmployeeForm';

const EmployeeEdit = ({employee}) => {
    const {name, phone, shift} = employee;
    return (
        <Card>
           <EmployeeForm name={name} phone={phone} shift={shift} />
            <CardSection>
                <Button>
                    Save Changes
                </Button>
            </CardSection>
        </Card>
    )
}

export default EmployeeEdit

const styles = StyleSheet.create({})
