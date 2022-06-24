import React from 'react'
import { View, Text, Image, TextInput, StyleSheet, Pressable } from 'react-native'

const HomeScreenSerachBar = ({ value, setValue, placeholder, secureTextEntry }) =>  {

    const onPress = () => {
        console.warn("onPress");
     }

    return (
        <View style={styles.root}>
            <View style={styles.container}>
                <Image
                    source={require('../../../assets/images/icons8-search-24.png')}
                    style={styles.iconSearch} 
                />
                <TextInput 
                    value={value} 
                    onChangeText={setValue} 
                    placeholder={placeholder}
                    type=""
                    style={styles.input} 
                    secureTextEntry={secureTextEntry}
                />
            </View>
            <Pressable onPress={onPress} style={styles.setting}>
                <Image
                    source={require('../../../assets/images/icons8-setting-24.png')}
                    style={styles.iconSetting} 
                />
            </Pressable>
        </View>  
    )
}


const styles = StyleSheet.create({
    root: {
        /* backgroundColor: '#eee', */
        width: '96%',
       /*  borderColor: '#fff',
        borderWidth: 1, */
        borderRadius: 100,
        
        marginVertical: '2%',
        margin: '2%',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: "row",
        alignItems: 'center',
    },
    setting: {
        backgroundColor: '#DFF6FF',
      width: '15%',
      borderRadius: 100,
      padding: '4%',
      display: 'flex',
      flexDirection: "row",
      alignItems: 'center',
    },
    container: {
      backgroundColor: '#fff',
      width: '80%',
      borderRadius: 100,
      paddingHorizontal: '5%',
      display: 'flex',
      flexDirection: "row",
      alignItems: 'center',
      
    },
    input: {
       
    },
    iconSetting:{
        width: 25,
        height: 25,
        tintColor: '#06283D',
    },
    iconSearch: {
        width: 25,
        height: 25,
        tintColor: 'grey',
        marginRight: 5,

    }
  });
  

export default HomeScreenSerachBar
