import React, { useState } from 'react';
import { Text } from 'react-native'
import CustomButton from '../../components/CustomButton';

const SocialSingInButtons = () => {
    const SingInFacebook = () => {
        console.warn("Sing In Facebook");
    }
    const SingInGoogle = () => {
        console.warn("Sing In Google");
    }
    const SingInApple = () => {
        console.warn("Sing In Apple");
    }

    return (
        <>
            <CustomButton bgColor="#E7EAF4" fgColor="#4765A9" text="Sign In with Facebook " onPress={SingInFacebook} />
            <CustomButton bgColor="#FAE9EA" fgColor="#DD4D44" text="Sign In with Google " onPress={SingInGoogle} />
            <CustomButton bgColor="#E3E3E3" fgColor="#363636" text="Sign In with Apple " onPress={SingInApple} />
        </>
    )
}

export default SocialSingInButtons
