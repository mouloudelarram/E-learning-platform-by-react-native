import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Dimensions } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation, UseNavigation } from '@react-navigation/native';

const ForgotPassWordScreen = () => {

    /* const variable */
    // inputField instance
    const { username, setUsername } = useState('');

    // navigation instance
    const navigation = useNavigation();

    //get the height of my screen
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    /* functions */
    const onSubmitPressed = () => {
        //console.warn("on submit");
        navigation.navigate('Reset Password');
    }
    const onSingInPress = () => {
        //console.warn(" Sing In Pressed");
        navigation.pop();

    }

    return (
        <ScrollView>
            <View style={styles.root}>
                <Text style={styles.title}> Confirm Your Email </Text>
                <CustomInput value={username} setValue={setUsername} placeholder="username" />
                <CustomButton text="Submit" onPress={onSubmitPressed} />
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

export default ForgotPassWordScreen;
