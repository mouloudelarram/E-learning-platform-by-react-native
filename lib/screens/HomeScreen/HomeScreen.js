import React, { useState }  from 'react'
import { View, Button, StyleSheet, ScrollView, FlatList } from 'react-native'
import { useNavigation, UseNavigation } from '@react-navigation/native';
import HomeScreenHeader from '../../components/HomeScreenHeader';
import HomeScreenSerachBar from '../../components/HomeScreenSerachBar';
import HomeScreenNews from '../../components/HomeScreenNews';
import ListCategories from '../../components/ListCategories';
import ListItem from '../../components/ListItem';
import Items from '../../models/Item';
const HomeScreen = () => {

     // inputField instance
     const { Search, setSearch } = useState('');

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
                <HomeScreenSerachBar value={Search} setValue={setSearch} placeholder="Search course ... "  />
                <ListCategories />
                <ListItem />
                
                
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
