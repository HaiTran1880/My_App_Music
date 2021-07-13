import * as React from 'react';

import HealthScreen from '../screens/HealthScreen';
import MusicScreen from '../screens/MusicScreen';
import PhotoScreen from '../screens/PhotoScreen';
import SofMScreen from '../screens/StyleOfMe';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
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
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#8AAFFF',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="HEALTH" component={HealthScreen} />
      <Tab.Screen name="MUSIC" component={MusicScreen} />
      <Tab.Screen name="PHOTO" component={PhotoScreen} />
      <Tab.Screen name="STYLE" component={SofMScreen} />
    </Tab.Navigator>
  );
}
