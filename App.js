import React from 'react';
import {View, StyleSheet} from 'react-native';

import PlayMusicMode from './src/screens/PlayMusicMode';
import RootStack from './src/routes/RootStack';

export default function App() {
  return (
    <View style={styles.container}>
      <RootStack />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
