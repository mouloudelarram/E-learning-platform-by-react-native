import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const HomeScreenHeader = () => {
    return (
        <View style={styles.root}>

            {/* Side bar left */}
            <View style={styles.rootLeftSide}>
                <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80' }}
                    style={styles.profilImage}
                />
                <View style={{ padding: 10, }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>User Name</Text>
                    <Text>user@gmail.com</Text>
                </View>
            </View>

            {/* Side bar right */}
            <View style={styles.rootRightSide}>
                <Image
                    source={require('../../../assets/images/icons8-notification-24.png')}
                    style={styles.iconNotifications} />
                <Text style={styles.textNotifications}>5</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        top: 0,
        //backgroundColor: "#fff",
        padding: 10,
        margin: 0,
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: "row",
    },

    rootLeftSide: {
        display: 'flex',
        width: '50%',
        //justifyContent: 'flex-end',
        flexDirection: "row",
        alignItems: 'center',
    },
    rootRightSide: {
        display: 'flex',
        width: '50%',
        justifyContent: 'flex-end',
        flexDirection: "row",
        alignItems: 'center',
    },
    textNotifications: {
        position: "absolute",
        top: 5,
        right: -5,
        backgroundColor: "red",
        color: "#fff",
        borderRadius: 50,
        width: 20,
        height: 20,
        fontSize: 15,
        //margin: 5, 
        padding: 0,
        textAlign: 'center',
    },
    iconNotifications: {
        width: 24,
        height: 24,
        borderRadius: 50,
    },
    profilImage : {
        width: 50,
        height: 50,
        borderRadius: 50,
    }
})
export default HomeScreenHeader


