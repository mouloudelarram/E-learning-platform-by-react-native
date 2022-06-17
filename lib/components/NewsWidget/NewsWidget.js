import React from 'react'
import { View, Text, Image,  } from 'react-native'
import { Dimensions } from 'react-native';
import CustomButton from '../../components/CustomButton';

const NewsWidget = ({ imgSource, title, description}) => {
    const onSeeMorePressed = () => {
        console.warn("See more function");
 
     }
    //get the height of my screen
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    return (
        <View style={{ margin: windowWidth*0.02, width: windowWidth*0.96, marginTop: windowWidth*0.05, height: 250, borderRadius: 30, padding: 0, backgroundColor:"#000",}}>
        <Image
            source={{ uri: imgSource}}
            style={{
                opacity: 0.9,
                width: '100%',
                height: '100%',
                borderRadius: 30,
            }}
        />
        <View style={{ position: 'absolute', padding: 0, backgroundColor: "transparent", width: windowWidth*0.96, height: windowWidth, borderRadius: 30, }}>
            <Text style={{ fontSize: 40, color: "#fff", fontWeight: "bold", fontFamily: 'sans-serif-medium',  padding: 20, width: windowWidth*0.6, textAlign: 'justify',}} numberOfLines={1} >{title}</Text>
            <Text style={{ fontSize: 20, color: "#fff", fontWeight: "bold", fontFamily: 'sans-serif-light', paddingLeft: 20, width: windowWidth*0.6, textAlign: 'justify', }} numberOfLines={3} >{description}</Text>
            <CustomButton text="See More" onPress={onSeeMorePressed} type='MoreDetail'/>
        </View>
    </View>
    )
}

export default NewsWidget
