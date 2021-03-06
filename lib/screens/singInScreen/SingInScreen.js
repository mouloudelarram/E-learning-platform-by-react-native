import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Dimensions } from 'react-native';
import Logo from '../../../assets/images/alphadigit.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation, UseNavigation } from '@react-navigation/native';
const SingInScreen = () => {

    /* const variable */
    // inputField instance
    const { username, setUsername } = useState('');
    const { password, setPassword } = useState('');

    // navigation instance
    const navigation = useNavigation();

    //get the height of my screen
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    /* functions */
    const onSingInPressed = () => {
       // console.warn("Sing In");

        navigation.navigate('Home Screen');
    }
    const onForgotPasswordPressed = () => {
       // console.warn("onForgotPasswordPressed");

        navigation.navigate('Forgot Password');
    }
    const SingInFacebook = () => {
       // console.warn("Sing In Facebook");
    }
    const SingInGoogle = () => {
       // console.warn("Sing In Google");
    }
    const SingInApple = () => {
       // console.warn("Sing In Appple");
    }
    const onSingUpPress = () => {
       // console.warn("on Sing Up Press");

        navigation.navigate('Sing Up');
    }

    return (
        <ScrollView>
            <View style={styles.root}>
                {/* <Image source={Logo} style={styles.logo} resizeMode="contain" /> */}
                <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80' }}
                    style={{
                        width: 100,
                        height: 100,
                        borderRadius: 50,
                        margin: 20,
                        marginTop: 100,
                    }}
                />
                <CustomInput value={username} setValue={setUsername} placeholder="username" />
                <CustomInput value={password} setValue={setPassword} placeholder="password" secureTextEntry />
                <CustomButton text="sing in" onPress={onSingInPressed} />
                <CustomButton text="Forgot password?" onPress={onForgotPasswordPressed} type="TERTIARY" />
                <Text style={{margin: 20,}}></Text>
                {/* connect with Google, Facebook, Apple ... */}
                <CustomButton bgColor="#E7EAF4" fgColor="#4765A9" text="Sign In with Facebook " onPress={SingInFacebook} />
                <CustomButton bgColor="#FAE9EA" fgColor="#DD4D44" text="Sign In with Google " onPress={SingInGoogle} />
                <CustomButton bgColor="#E3E3E3" fgColor="#363636" text="Sign In with Apple " onPress={SingInApple} />
                {/* do not have a account*/}
                <CustomButton text="Do not have an account? Create one !" onPress={onSingUpPress} type="TERTIARY" />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 100,
        height: 100,
        marginBottom: '10%',
    }
});

export default SingInScreen;
