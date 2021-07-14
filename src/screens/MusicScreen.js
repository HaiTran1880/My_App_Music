import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity,
  StatusBar,
  Animated,
  Easing,
} from 'react-native';
import data from '../constants';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {set} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('window');
import SoundPlayer from 'react-native-sound-player';

//Animation
let rotateValueHolder = new Animated.Value(0);

const startImageRotateFunction = () => {
  rotateValueHolder.setValue(0);
  Animated.timing(rotateValueHolder, {
    toValue: 1,
    duration: 5000,
    easing: Easing.linear,
    useNativeDriver: false,
  }).start(() => startImageRotateFunction());
};

const rotateData = rotateValueHolder.interpolate({
  inputRange: [0, 1],
  outputRange: ['0deg', '360deg'],
});

const NeuMorph = ({children, size, style}) => {
  return (
    <View styel={styles.topShadow}>
      <View style={styles.bottomShadow}>
        <View
          style={[
            styles.inner,
            {
              color: 'red',
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

const ItemSong = props => {
  const {title, artist, image, id} = props.item;
  const {onClick, songPlaying, index} = props;
  const [isPlay, setIsPlay] = useState(false);

  const playMusic = () => {
    if (isPlay) {
      SoundPlayer.pause();
    } else {
      SoundPlayer.resume();
    }
    if (index == songPlaying.id - 1) {
      if (id == songPlaying.id) {
        setIsPlay(!isPlay);
      } else {
      }
    }
  };
  return (
    <TouchableOpacity
      onPress={() => onClick(id, index)}
      style={
        id == songPlaying.id
          ? [styles.itemSong, styles.bgSongPlaying]
          : styles.itemSong
      }>
      {isPlay ? startImageRotateFunction() : null}
      <View
        style={{
          paddingVertical: 10,
          height: '100%',
          justifyContent: 'space-around',
        }}>
        <Text style={{color: 'gray', fontWeight: '700'}}>{title}</Text>
        <Text style={{color: 'gray'}}>{artist}</Text>
      </View>
      <TouchableOpacity onPress={playMusic}>
        <NeuMorph>
          <Ionicon name={isPlay ? 'pause' : 'play'} size={25} color="#91A1BD" />
        </NeuMorph>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const MusicScreen = ({params}) => {
  const navigation = useNavigation();
  const [infoTime, setInfoTime] = useState(0);
  const [songPlaying, setSongPlaying] = useState(data.songs[0]);
  const [indexSongPlaying, setIndexSongPlaying] = useState(0);
  const [like, setLike] = useState(false);
  const play = (item, index) => {
    let song = data.songs.find(x => x.id === item);
    setSongPlaying(song);
    setIndexSongPlaying(index);
    SoundPlayer.loadSoundFile(data.songs[index].fileName, 'mp3');
    // getInfo();
    //SoundPlayer.play();
  };

  //get InFor Music time Play
  async function getInfo() {
    try {
      const info = await SoundPlayer.getInfo();
      setInfoTime(info);
      return info;
    } catch (e) {
      console.log('There is no song playing', e);
    }
  }

  useEffect(() => {
    if (infoTime === 0) {
      SoundPlayer.loadSoundFile(data.songs[0].fileName, 'mp3');
    }
    getInfo();
  }, [songPlaying]);

  const gotoPlayMode = () => {
    getInfo();
    console.log(infoTime);
    //SoundPlayer.pause();
    /* 1. Navigate to the Details route with params */
    // navigation.navigate('PLAYMUSICMODE', {
    //   song: {songPlaying},
    //   index: {indexSongPlaying},
    //   info: infoTime,
    // });
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.playing}>
        <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: 'gray', fontWeight: '700', fontSize: 25}}>
            {songPlaying.title}
          </Text>
        </View>
        <View
          style={{
            flex: 8,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <NeuMorph>
            <TouchableOpacity onPress={() => setLike(!like)}>
              <Ionicon
                name="heart"
                size={25}
                color={like ? 'red' : '#91A1BD'}
              />
            </TouchableOpacity>
          </NeuMorph>
          <NeuMorph>
            <TouchableOpacity onPress={gotoPlayMode}>
              <Animated.Image
                resizeMode="cover"
                style={styles.imageSong}
                source={songPlaying.image}
              />
            </TouchableOpacity>
          </NeuMorph>
          <NeuMorph>
            <TouchableOpacity>
              <Ionicon name="ellipsis-horizontal" size={25} color="#91A1BD" />
            </TouchableOpacity>
          </NeuMorph>
        </View>
      </View>
      <View style={styles.listMusic}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data.songs}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <ItemSong
              item={item}
              onClick={play}
              songPlaying={songPlaying}
              index={index}
              runAnimated={startImageRotateFunction}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEE9FD',
  },
  playing: {
    flex: 4,
    paddingHorizontal: 20,
  },
  listMusic: {
    flex: 6,
    paddingHorizontal: 10,
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
      width: 6,
      height: 6,
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
  itemSong: {
    height: 80,
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bgSongPlaying: {
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  imageSong: {
    width: 200,
    height: 200,
    borderRadius: 500,
    borderWidth: 5,
    borderColor: '#D7E1F3',
    transform: [{rotate: rotateData}],
  },
});
export default MusicScreen;
