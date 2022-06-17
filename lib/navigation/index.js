import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* screens */
import SingInScreen from '../../lib/screens/singInScreen';
import SingUpScreen from '../screens/singUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPassWordScreen from '../screens/ForgotPassWordScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import MainScreen from '../screens/MainScreen';


/* Screen names */ 
const SingIn = "Sing In";
const SingUp = "Sing Up";
const ConfirmEmail = "Confirm password";
const ResetPassword = "Reset Password";
const ForgotPassWord = "Forgot Password";
const Home = "Home Screen";

const Stack = createNativeStackNavigator();

function  Navigation  () {
    return (
        <NavigationContainer>
            <Stack.Navigator  screenOptions={{headerShown: false }}>
                <Stack.Screen name={SingIn} component={SingInScreen} />
                <Stack.Screen name={SingUp} component={SingUpScreen} />
                <Stack.Screen name={ConfirmEmail} component={ConfirmEmailScreen} />
                <Stack.Screen name={ResetPassword} component={ResetPasswordScreen} />
                <Stack.Screen name={ForgotPassWord} component={ForgotPassWordScreen} />
                <Stack.Screen name={Home} component={MainScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
