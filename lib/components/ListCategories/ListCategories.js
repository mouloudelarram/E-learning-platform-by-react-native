import React, { useState }  from 'react'
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
/* import {
  FlatList,
  
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons'; */

import categories from '../../models/Categories';
const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;




const ListCategories = () => {

    

    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style.categoriesListContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}>
            <View
              style={{
                backgroundColor:
                  selectedCategoryIndex == index
                    ? COLORS.primary
                    : COLORS.secondary,
                ...style.categoryBtn,
              }}>
              <View style={style.categoryBtnImgCon}>
                <Image
                  source={category.image}
                  style={{height: 35, width: 35, resizeMode: 'cover', borderRadius: 50,}}
                />
              </View>
              <Text
              numberOfLines={1}
                style={{
                  width: '50%',
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginLeft: 10,
                  color:
                    selectedCategoryIndex == index
                      ? COLORS.white
                      : COLORS.primary,
                }}>
                {category.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };


  const COLORS = {
    white: '#FFF',
    dark: '#000',
    primary: '#06283D',
    secondary: '#DFF6FF',
    light: '#E5E5E5',
    grey: '#908e8c',
  };
  
  
  const style = StyleSheet.create({
    header: {
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
    },
    inputContainer: {
      flex: 1,
      height: 50,
      borderRadius: 10,
      flexDirection: 'row',
      backgroundColor: '#E5E5E5',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    sortBtn: {
      width: 50,
      height: 50,
      marginLeft: 10,
      backgroundColor: '#F9813A',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    categoriesListContainer: {
      paddingVertical: 10,
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    categoryBtn: {
      height: 45,
      width: 120,
      marginRight: 7,
      borderRadius: 30,
      alignItems: 'center',
      paddingHorizontal: 5,
      flexDirection: 'row',
    },
    categoryBtnImgCon: {
      height: 35,
      width: 35,
      backgroundColor: "#fff",
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    card: {
      height: 220,
      width: cardWidth,
      marginHorizontal: 10,
      marginBottom: 20,
      marginTop: 50,
      borderRadius: 15,
      elevation: 13,
      backgroundColor: "#fff",
    },
    addToCartBtn: {
      height: 30,
      width: 30,
      borderRadius: 20,
      backgroundColor: '#F9813A',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });


export default ListCategories;
