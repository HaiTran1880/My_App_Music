import * as React from 'react';

import HealthScreen from '../screens/HealthScreen';
import MusicScreen from '../screens/MusicScreen';
import PhotoScreen from '../screens/PhotoScreen';
import SofMScreen from '../screens/StyleOfMe';
import Home from '../screens/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import images from '../assets/image';
import {View, Image, Platform} from 'react-native';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="HOME"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'HEALTH') {
            iconName = focused
              ? 'ios-heart-circle'
              : 'ios-heart-circle-outline';
          } else if (route.name === 'MUSIC') {
            iconName = focused
              ? 'ios-musical-notes-sharp'
              : 'ios-musical-notes-outline';
          } else if (route.name === 'PHOTO') {
            iconName = focused ? 'ios-image' : 'ios-image-outline';
          } else if (route.name === 'STYLE') {
            iconName = focused ? 'color-palette' : 'color-palette-outline';
          } else if (route.name === 'HOME') {
            return (
              <View>
                <Image
                  resizeMode="cover"
                  style={{
                    width: Platform.OS === 'ios' ? 68 : 50,
                    height: Platform.OS === 'ios' ? 68 : 50,
                    borderRadius: 50,
                    marginBottom: Platform.OS === 'ios' ? 30 : 40,
                  }}
                  source={images.dog}
                />
              </View>
            );
          }
          return (
            <Ionicons
              style={{
                position: 'absolute',
                top: Platform.OS === 'ios' ? 0 : 0,
              }}
              name={iconName}
              size={size}
              color={color}
            />
          );
        },
      })}
      tabBarOptions={{
        labelStyle: {
          top: Platform.OS === 'ios' ? '100%' : null,
        },
        activeTintColor: '#8AAFFF',
        inactiveTintColor: 'gray',
        style: {
          height: Platform.OS === 'ios' ? 60 : 60,
          position: 'absolute',
          paddingTop: 10,
          marginHorizontal: 20,
          bottom: 20,
          borderRadius: 10,
        },
      }}>
      <Tab.Screen name="HEALTH" component={HealthScreen} tabPress />
      <Tab.Screen name="MUSIC" component={MusicScreen} />
      <Tab.Screen name="HOME" component={Home} />
      <Tab.Screen name="PHOTO" component={PhotoScreen} />
      <Tab.Screen name="STYLE" component={SofMScreen} />
    </Tab.Navigator>
  );
}
