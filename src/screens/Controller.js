import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {useState} from 'react/cjs/react.development';
import SoundPlayer from 'react-native-sound-player';
const gray = '#91A1BD';

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

export default function Controller({onNext, onPrv, playAndPause}) {
  const [isPlay, setIsPlay] = useState(true);
  const handlerPlay = () => {
    setIsPlay(!isPlay);
    if (isPlay) {
      SoundPlayer.pause();
    } else {
      SoundPlayer.resume();
    }
  };
  return (
    <View style={styles.container}>
      <NeuMorph>
        <TouchableOpacity style={styles.btnRoute} onPress={onPrv}>
          <Ionicon color={gray} name="play-back" size={30} />
        </TouchableOpacity>
      </NeuMorph>
      <NeuMorph>
        <TouchableOpacity style={styles.btnControll} onPress={handlerPlay}>
          <Ionicon color="#FFF" name={isPlay ? 'pause' : 'play'} size={30} />
        </TouchableOpacity>
      </NeuMorph>
      <NeuMorph>
        <TouchableOpacity style={styles.btnRoute} onPress={onNext}>
          <Ionicon color={gray} name="play-forward" size={30} />
        </TouchableOpacity>
      </NeuMorph>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btnRoute: {
    height: 80,
    width: 80,
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E2ECFD',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  btnControll: {
    height: 80,
    width: 80,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8AAFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
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
