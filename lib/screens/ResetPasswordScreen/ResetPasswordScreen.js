import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Dimensions } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation, UseNavigation } from '@react-navigation/native';

const ResetPasswordScreen = () => {

    /* const variable */
    // inputField instance
    const { confirmCode, setconfirmCode } = useState('');
    const { newPassword, setnewPassword } = useState('');
    
    // navigation instance
    const navigation = useNavigation();

    //get the height of my screen
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    /* functions */
    const onResetPressed = () => {
        //console.warn("reset password");
        navigation.navigate('Home Screen');
    }
    const onSingInPressed = () => {
        //console.warn("sing in screen");
        navigation.navigate('Sing In');
    }
    

    return (
        <ScrollView>
            <View style={styles.root}>
                <Text style={styles.title}> Confirm Your Email </Text>
                <CustomInput value={confirmCode} setValue={setconfirmCode} placeholder="confirmCode" />
                <CustomInput value={newPassword} setValue={setnewPassword} placeholder="new password" />
                <CustomButton text="Reset" onPress={onResetPressed} />
                <CustomButton text="Go back to Sign In " onPress={onSingInPressed}  type="TERTIARY"/>
           </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 50,

    },
});

export default ResetPasswordScreen;
