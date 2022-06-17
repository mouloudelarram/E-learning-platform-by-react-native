import React from 'react'
import { View, Button, StyleSheet } from 'react-native'
import { useNavigation, UseNavigation } from '@react-navigation/native';

const HomeScreen = () => {

    /* const variable */
    // navigation instance
    const navigation = useNavigation();

    /* functions */
    const onLogOutPressed = () => {
        navigation.navigate('Sing In');
    }

    return (
        <View style={styles.root}>
            <Button title="Log out" onPress={onLogOutPressed}/>
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

export default HomeScreen
