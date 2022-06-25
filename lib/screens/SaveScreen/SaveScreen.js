import React from 'react'
import { View, Button, StyleSheet, Text } from 'react-native'
import { useNavigation, UseNavigation } from '@react-navigation/native';

const SaveScreen = () => {

    /* const variable */
    // navigation instance
    const navigation = useNavigation();

    /* functions */
    const onLogOutPressed = () => {
        navigation.navigate('Sing In');
    }

    return (
        <View style={styles.root}>
            <Text>Save screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
});

export default SaveScreen
