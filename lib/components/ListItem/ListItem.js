import React, { useState } from 'react'
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, UseNavigation } from '@react-navigation/native';
import Items from '../../models/Item';


const { width } = Dimensions.get('screen');
const cardWidth = width / 2 - 20;


const ListItem = () => {



  const navigation = useNavigation();

  const onPress = () => {
    /* navigation.navigate('Sing In', item); */
    console.warn('You pressed this item');
  }

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={style.categoriesListContainer}>
      {Items.map((item, index) => (
        <TouchableHighlight
          key={index}
          underlayColor={COLORS.white}
          activeOpacity={0.9}
          onPress={onPress}>
          <View style={style.card}>
            <View style={style.container}>
              <Image source={item.image} style={style.image} />
            </View>
            <View style={{ marginHorizontal: 20 }}>
              <Text numberOfLines={1} style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
              <Text numberOfLines={1} style={{ fontSize: 14, color: COLORS.grey, marginTop: 2 }}>
                {item.ingredients}
              </Text>
            </View>
            <View
              style={{
                marginTop: 10,
                marginHorizontal: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text numberOfLines={1} style={{ fontSize: 18, fontWeight: 'bold' }}>
                ${item.price}
              </Text>
              <View style={style.addToCartBtn}>
                <Image source={item.image} style={style.icon} />
              </View>
            </View>
          </View>
        </TouchableHighlight>
      ))}
    </ScrollView>
  );
};

const COLORS = {
  white: '#FFF',
  dark: '#000',
  primary: '#F9813A',
  secondary: '#fedac5',
  light: '#E5E5E5',
  grey: '#908e8c',
};

const style = StyleSheet.create({
  icon: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
  container: {
    alignItems: 'center',
    top: 0,
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  image: {
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
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
    marginTop: -30,
    paddingVertical: 0,
    alignItems: 'center',
    paddingHorizontal: 0,
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


export default ListItem;
