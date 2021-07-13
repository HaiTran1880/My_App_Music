import React from 'react';
import {
  StatusBar,
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  Animated,
  TouchableOpacity,
  Platform,
} from 'react-native';
import data from '../constants';
import MaskedView from '@react-native-community/masked-view';
import Svg, {Rect} from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';

const AnimatedSvg = Animated.createAnimatedComponent(Svg);
const {width, height} = Dimensions.get('window');
const SPACING = 10;
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.7 : width * 0.72;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;
const BACKDROP_HEIGHT = height;

// =======  Animate FlastList===========
const Backdrop = ({imgs, scrollX}) => {
  return (
    <View style={{height: BACKDROP_HEIGHT, width, position: 'absolute'}}>
      <FlatList
        data={imgs}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => {
          let i = index + 1;
          const inputRange = [(i - 2) * ITEM_SIZE, (i - 1) * ITEM_SIZE];
          const translateX = scrollX.interpolate({
            inputRange,
            outputRange: [-width, 0],
          });
          return (
            <MaskedView
              style={{position: 'absolute'}}
              maskElement={
                <AnimatedSvg
                  width={width}
                  height={height}
                  viewBox={`0 0 ${width} ${height}`}
                  style={{transform: [{translateX}]}}>
                  <Rect x="0" y="0" width={width} height={height} fill="red" />
                </AnimatedSvg>
              }>
              <Image
                source={item.link}
                style={{width, height: BACKDROP_HEIGHT, resizeMode: 'cover'}}
              />
            </MaskedView>
          );
        }}
      />
      <LinearGradient
        colors={['transparent', 'white']}
        style={{
          height: BACKDROP_HEIGHT,
          width,
          position: 'absolute',
          bottom: 0,
        }}
      />
    </View>
  );
};

const PhotoScreen = ({params}) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <Backdrop imgs={data.image} scrollX={scrollX} />
      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        data={data.image}
        keyExtractor={item => item.id}
        horizontal
        contentContainerStyle={{alignItems: 'center', marginHorizontal: 60}}
        snapToInterval={ITEM_SIZE}
        decelerationRate={0}
        bounces={true}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={15}
        renderItem={({item, index}) => {
          const inputRange = [
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
            (index + 1) * ITEM_SIZE,
          ];
          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [150, 100, 150],
          });
          return (
            <View style={{width: ITEM_SIZE}}>
              <Animated.View
                style={{
                  marginHorizontal: SPACING * 2,
                  padding: SPACING * 2,
                  alignItems: 'center',
                  backgroundColor: 'white',
                  borderRadius: 34,
                  transform: [{translateY}],
                }}>
                <Image source={item.link} style={styles.posterImage} />
                <Text style={{fontSize: 14}} numberOfLines={1}>
                  {item.title}
                </Text>
              </Animated.View>
            </View>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  posterImage: {
    width: '100%',
    height: ITEM_SIZE * 1.2,
    resizeMode: 'cover',
    borderRadius: 24,
    margin: 0,
    marginBottom: 10,
  },
});
export default PhotoScreen;
