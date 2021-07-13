import React, {useRef, useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Dimensions,
  Animated,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

const gray = '#91A1BD';

import data from '../constants/index';
import Slider from 'react-native-slider';
import Controller from './Controller';
import Ionicon from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

const NeuMorph = ({children, size, style}) => {
  return (
    <View styel={styles.topShadow}>
      <View style={styles.bottomShadow}>
        <View
          style={[
            styles.inner,
            {
              width: size || 40,
              height: size || 40,
              borderRadius: size / 2 || 40 / 2,
            },
            style,
          ]}>
          {children}
        </View>
      </View>
    </View>
  );
};

export default function PlayMusicMode({route, navigation}) {
  // const [isPlay, setIsPlay] = useState(true);
  const {song, index} = route.params;
  const scrollX = useRef(new Animated.Value(0)).current;
  const slider = useRef(null);
  const [songIndex, setSongIndex] = useState(0);
  // for tranlating the album art
  const position = useRef(Animated.divide(scrollX, width)).current;

  useEffect(() => {
    // position.addListener(({ value }) => {
    //   console.log(value);
    // });
    if (route != null) {
      setSongIndex(index.indexSongPlaying);
      goTo(index.indexSongPlaying);
    }

    scrollX.addListener(({value}) => {
      const val = Math.round(value / width);

      setSongIndex(val);

      // little buggy
      //if previous index is not same then only update it
      // if (val !== songIndex) {
      //   setSongIndex(val);
      //   console.log(val);
      // }
    });

    return () => {
      scrollX.removeAllListeners();
    };
  }, []);
  const goTo = index => {
    slider.current.scrollToOffset({
      offset: (songIndex + index) * width,
    });
  };
  const goNext = () => {
    slider.current.scrollToOffset({
      offset: (songIndex + 1) * width,
    });
  };
  const goPrv = () => {
    slider.current.scrollToOffset({
      offset: (songIndex - 1) * width,
    });
  };
  // const playAndPause = () => {
  //   setIsPlay(!isPlay);
  // };

  const renderItem = ({index, item}) => {
    return (
      <Animated.View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: width,
          transform: [
            {
              translateX: Animated.multiply(
                Animated.add(position, -index),
                -100,
              ),
            },
          ],
        }}>
        <NeuMorph>
          <Animated.Image
            source={item.image}
            style={{
              width: 280,
              height: 280,
              borderRadius: 500,
              borderWidth: 10,
              borderColor: '#D7E1F3',
            }}
          />
        </NeuMorph>
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View
        style={{
          height: 50,
          paddingHorizontal: 30,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            width: 40,
            height: 40,
            borderRadius: 40,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            shadowColor: '#FFF',
            shadowOffset: {
              width: 5,
              height: 5,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,

            elevation: 6,
          }}>
          <NeuMorph>
            <Ionicon name="arrow-back" size={20} color={gray} />
          </NeuMorph>
        </TouchableOpacity>
        <Text style={{fontSize: 17, color: 'gray', fontWeight: '600'}}>
          PLAYING NOW
        </Text>
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            borderRadius: 40,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,

            elevation: 6,
          }}>
          <NeuMorph>
            <Ionicon name="menu" size={20} color={gray} />
          </NeuMorph>
        </TouchableOpacity>
      </View>
      <SafeAreaView style={{height: 320}}>
        <Animated.FlatList
          ref={slider}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          data={data.songs}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: true},
          )}
        />
      </SafeAreaView>
      <View>
        <Text style={styles.title}>{data.songs[songIndex].title}</Text>
        <Text style={styles.artist}>{data.songs[songIndex].artist}</Text>
      </View>
      <View style={{paddingHorizontal: 20}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}>
          <Text style={{color: 'gray'}}>1:20</Text>
          <Text style={{color: 'gray'}}>3:40</Text>
        </View>
        <Slider
          minimumTrackTintColor="#8AAFFF"
          maximumTrackTintColor={gray}
          trackStyle={{
            height: 5,
            borderRadius: 4,
            backgroundColor: 'gray',
            shadowColor: 'black',
            shadowOffset: {width: 0, height: 1},
            shadowRadius: 1,
            shadowOpacity: 0.15,
          }}
          thumbStyle={{
            width: 30,
            height: 30,
            backgroundColor: '#8AAFFF',
            borderColor: '#FFF',
            borderWidth: 8,
            borderRadius: 30,
            shadowColor: 'gray',
            shadowOffset: {width: 0, height: 2},
            shadowRadius: 2,
            shadowOpacity: 0.35,
          }}
        />
      </View>
      <Controller
        onNext={goNext}
        onPrv={goPrv}
        // onPlay={playAndPause}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: 'gray',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  artist: {
    fontSize: 18,
    textAlign: 'center',
    color: 'gray',
    textTransform: 'capitalize',
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
    paddingBottom: 30,
    backgroundColor: '#DEE9FD',
  },
  inner: {
    backgroundColor: '#DEE9F7',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#E2ECFD',
    borderWidth: 1,
  },
  topShadow: {
    shadowOffset: {
      width: -6,
      height: -6,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: '#FBFFFF',
  },
  bottomShadow: {
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: '#B7C4DD',
  },
});
