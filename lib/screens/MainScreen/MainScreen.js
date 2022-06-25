import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import React, { useState } from 'react';
import HomeScreen from '../HomeScreen';
import UserScreen from '../UserScreen';
import SaveScreen from '../SaveScreen';
import SingUpScreen from '../singUpScreen';
import { Platform, Image, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

function MainScreen() {
  return (
    <Tab.Navigator
      screenOptions={
        {

          "tabBarShowLabel": false,
          "tabBarStyle": [
            {
              "display": "flex"
            },
            null
          ],
         /*  header: { visible: false } */

        }}
       
      initialRouteName="Home"
      activeColor="#42C2FF"
      barStyle={{ backgroundColor: 'none' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => focused ? (
            <View>
              <Image
                source={require('../../../assets/images/icons8-home-24.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#42C2FF' : '#748c94',
                }}
              />
              <Text
                style={{ color: focused ? "#42C2FF" : "#748c94", fontSize: 12, }}>
                Home
              </Text>
            </View>
          ) : (
            <View>
              <Image
                source={require('../../../assets/images/icons8-home-24.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#42C2FF' : '#748c94',
                }}
              />
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Save"
        component={SaveScreen}
        options={{
          headerShown: false ,
          tabBarIcon: ({ focused }) => focused ? (
            <View>
              <Image
                source={require('../../../assets/images/icons8-bookmark-24.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#42C2FF' : '#748c94',
                }}
              />
              <Text
                style={{ color: focused ? "#42C2FF" : "#748c94", fontSize: 12, }}>
                Save
              </Text>
            </View>
          ) : (
            <View>
              <Image
                source={require('../../../assets/images/icons8-bookmark-24.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#42C2FF' : '#748c94',
                }}
              />
            </View>
          )
        }}
      />
      <Tab.Screen
        name="User"
        component={UserScreen}
        options={{
          headerShown: false ,
          tabBarBadge: 2,
          tabBarIcon: ({ focused }) => focused ? (
            <View>
              <Image
                source={require('../../../assets/images/icons8-user-24.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#42C2FF' : '#748c94',
                }}
              />
              <Text
                style={{ color: focused ? "#42C2FF" : "#748c94", fontSize: 12, }}>
                User
              </Text>
            </View>
          ) : (
            <View>
              <Image
                source={require('../../../assets/images/icons8-user-24.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#42C2FF' : '#748c94',
                }}
              />
            </View>
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default MainScreen;
