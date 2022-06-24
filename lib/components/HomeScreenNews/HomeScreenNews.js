import React from 'react'
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native'
import CustomButton from '../../components/CustomButton';
import { Dimensions } from 'react-native';
import NewsWidget from '../../components/NewsWidget';
const HomeScreenNews = () => {
    //get the height of my screen
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <NewsWidget 
                imgSource={'https://www.oxfordlearning.com/wp-content/uploads/2017/04/AdobeStock_132869690-860x420.jpeg'}
                title={'30% Sold'}
                description={'make sur you have the last version of our app for more info press this button.'} 
            />
            <NewsWidget 
                imgSource={'https://www.sciencenewsforstudents.org/wp-content/uploads/2020/04/1030_five_tips_home_learning-1028x579.png'}
                title={'Last Update'}
                description={'read more about this topic by pressing this bottom button.'} 
            />
            <NewsWidget 
                imgSource={'https://www.vnaya.com/wp-content/uploads/2021/10/What-Is-the-Best-Way-to-Write-English-Compositions-and-Essays-768x511.jpg'}
                title={'News to student'}
                description={'make sur you have the last version of our app for more info press this button.'} 
            />
           

        </ScrollView>
    )
}

export default HomeScreenNews




{/* 
<Text style={{ fontFamily: 'normal' }}>  normal </Text>

<Text style={{ fontFamily: 'notoserif' }}>  notoserif </Text>

<Text style={{ fontFamily: 'sans-serif' }}>  sans-serif </Text>

<Text style={{ fontFamily: 'sans-serif-light' }}>  sans-serif-light </Text>

<Text style={{ fontFamily: 'sans-serif-thin' }}>  sans-serif-thin </Text>

<Text style={{ fontFamily: 'sans-serif-condensed' }}>  sans-serif-condensed </Text>

<Text style={{ fontFamily: 'sans-serif-medium' }}>  sans-serif-medium </Text>

<Text style={{ fontFamily: 'serif' }}>  serif </Text>

<Text style={{ fontFamily: 'Roboto' }}>  Roboto </Text>

<Text style={{ fontFamily: 'monospace' }}>  monospace </Text> 
*/}