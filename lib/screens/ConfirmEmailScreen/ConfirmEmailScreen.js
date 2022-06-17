import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Dimensions } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation, UseNavigation } from '@react-navigation/native';

const ConfirmEmailScreen = () => {

    /* const variable */
    // inputField instance
    const { username, setUsername } = useState('');
    const { code, setCode } = useState('');

    // navigation instance
    const navigation = useNavigation();

    //get the height of my screen
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    /* functions */
    const onConfirmPressed = () => {
        //console.warn("Confirm");
        navigation.navigate('Home Screen');
    }
    const onResendCodePressed = () => {
        //console.warn("resend code");
    }
    const onSingInPress = () => {
        //console.warn(" Sing In Pressed");
        navigation.navigate('Sing In');
    }

    return (
        <ScrollView>
            <View style={styles.root}>
                <Text style={styles.title}> Confirm Your Email </Text>
                <CustomInput value={username} setValue={setUsername} placeholder="username" />
                <CustomInput value={code} setValue={setCode} placeholder="code" />
                <CustomButton text="Confirm" onPress={onConfirmPressed} />
                <CustomButton text="Resend Code" onPress={onResendCodePressed} type="TERTIARY" />
                <CustomButton text="Go back to Sign In " onPress={onSingInPress} type="TERTIARY" />
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

export default ConfirmEmailScreen;
