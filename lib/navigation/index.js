import React from 'react'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* screens */
import SingInScreen from '../../lib/screens/singInScreen';
import SingUpScreen from '../screens/singUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPassWordScreen from '../screens/ForgotPassWordScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import HomeScreen from '../screens/HomeScreen';


const Stack = createNativeStackNavigator();

function  Navigation  () {
    return (
        <NavigationContainer>
            <Stack.Navigator  screenOptions={{headerShown: false }}>
                <Stack.Screen name="Sing In" component={SingInScreen} />
                <Stack.Screen name="Sing Up" component={SingUpScreen} />
                <Stack.Screen name="Confirm password" component={ConfirmEmailScreen} />
                <Stack.Screen name="Reset Password" component={ResetPasswordScreen} />
                <Stack.Screen name="Forgot Password" component={ForgotPassWordScreen} />
                <Stack.Screen name="Home Screen" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
