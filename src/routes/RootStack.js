import React from 'react';
import HealthScreen from '../screens/HealthScreen';
import MusicScreen from '../screens/MusicScreen';
import PhotoScreen from '../screens/PhotoScreen';
import SofMScreen from '../screens/StyleOfMe';
import BottomTab from './BottomTab';
import PlayMusicMode from '../screens/PlayMusicMode';
import Home from '../screens/Home';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Dimensions} from 'react-native';
const Stack = createStackNavigator();
const WIDTH = Dimensions.get('window').width;

const getWidth = () => {
  let width = (WIDTH - 40) / 5;

  return width;
};
const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="BOTTOMTAB"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="BOTTOMTAB" component={BottomTab} />
        <Stack.Screen name="HEALTH" component={HealthScreen} />
        <Stack.Screen name="MUSIC" component={MusicScreen} />
        <Stack.Screen name="PHOTO" component={PhotoScreen} />
        <Stack.Screen name="STYLE" component={SofMScreen} />
        <Stack.Screen name="HOME" component={Home} />
        <Stack.Screen name="PLAYMUSICMODE" component={PlayMusicMode} />
      </Stack.Navigator>
      {/* <View
        style={{
          width: getWidth(),
          height: 3,
          left: 22,
          borderRadius: 10,
          bottom: 20,
          backgroundColor: 'red',
          position: 'absolute',
          transform: [
            { translateX:tabOffsetValue}
          ]
        }}></View> */}
    </NavigationContainer>
  );
};
export default RootStack;
