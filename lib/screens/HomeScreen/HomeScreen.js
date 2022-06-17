import React from 'react'
import { View, Button, StyleSheet, ScrollView } from 'react-native'
import { useNavigation, UseNavigation } from '@react-navigation/native';
import HomeScreenHeader from '../../components/HomeScreenHeader';

import HomeScreenNews from '../../components/HomeScreenNews';

const HomeScreen = () => {

    /* const variable */
    // navigation instance
    const navigation = useNavigation();

    /* functions */
    const onLogOutPressed = () => {
        navigation.navigate('Sing In');
    }

    return (
        <ScrollView style={styles.root}>
            <View style={styles.root}>
                <HomeScreenHeader />
                <HomeScreenNews />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
});


export default HomeScreen
