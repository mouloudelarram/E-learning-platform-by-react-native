import React from 'react'
import { View, Button } from 'react-native'
import {useNavigation, UseNavigation } from '@react-navigation/native';

const HomeScreen = () => {

    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="Log out"
                onPress={() => navigation.navigate('Sing In')}
            />
        </View>
    )
}

export default HomeScreen
