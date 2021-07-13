import React from 'react';

import HealthScreen from '../screens/HealthScreen';
import MusicScreen from '../screens/MusicScreen';
import PhotoScreen from '../screens/PhotoScreen';
import SofMScreen from '../screens/StyleOfMe';
import BottomTab from './BottomTab';
import PlayMusicMode from '../screens/PlayMusicMode';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

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
        <Stack.Screen name="PLAYMUSICMODE" component={PlayMusicMode} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootStack;
