import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Dimensions } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSingInButtons from '../../components/SocialSingInButtons';
import { useNavigation, UseNavigation } from '@react-navigation/native';

const SingUpScreen = () => {

    /* const variable */
    // inputField instance
    const { username, setUsername } = useState('');
    const { email, setemail } = useState('');
    const { password, setPassword } = useState('');
    const { passwordRepet, setPasswordRepet } = useState('');

    // navigation instance
    const navigation = useNavigation();

    //get the height of my screen
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    /* functions */
    const onSingUpPressed = () => {
        //console.warn("Sing In");

        navigation.navigate('Confirm password');
    }
    const onPrivacyPressed = () => {
        //console.warn("on Privacy Pressed");

        navigation.navigate('Home Screen');
    }
    const onSingInPress = () => {
        //console.warn("on Sing Up Press");

        navigation.pop();
    }

    return (
        <ScrollView>
            <View style={styles.root}>
                <Text style={styles.title}> Create a new account</Text>
                <CustomInput value={username} setValue={setUsername} placeholder="username" />
                <CustomInput value={email} setValue={setemail} placeholder="email" />
                <CustomInput value={password} setValue={setPassword} placeholder="password" secureTextEntry />
                <CustomInput value={passwordRepet} setValue={setPasswordRepet} placeholder="repet password" secureTextEntry />
                <CustomButton text="sing Up" onPress={onSingUpPressed} />
                <Text style={styles.text}>
                    By registering, you confirm that you accept our
                    <Text style={styles.link} onPress={onPrivacyPressed}>Terms of Use</Text>
                    and
                    <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text>
                </Text>
                {/* connect with Google, Facebook, Apple ... */}
                <SocialSingInButtons />
                {/* do not have a account*/}
                <CustomButton text="Have an account? Sing in !" onPress={onSingInPress} type="TERTIARY" />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    text: {
        color: 'gray',
        marginVertical: 10,
        margin: 5,

    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 50,

    },
    link: {
        color: '#F08075',
    }
});

export default SingUpScreen;
