import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  ScrollView,
  Platform,
  StatusBar,
  TouchableOpacity,
  Linking,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import images from '../assets/image';
import Communications from 'react-native-communications';

const Home = ({params}) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={Platform.OS === 'android' ? true : false} />
      <View style={styles.img}>
        <ImageBackground
          resizeMethod="resize"
          style={{width: '100%', height: '100%'}}
          source={images.dog}>
          <LinearGradient
            colors={[
              '#rgba(97, 171, 255, 0.3)',
              '#rgba(97, 171, 255, 0.3)',
              '#8AAFFF',
            ]}
            style={styles.linearGradient}>
            <View style={styles.containName}>
              <Text
                style={{
                  color: '#FFF',
                  fontSize: 24,
                  marginBottom: 10,
                  fontWeight: '700',
                  textAlign: 'center',
                }}>
                Tran Dang Hai
              </Text>
              <Text
                style={{
                  color: '#f0f0f0',
                  fontSize: 20,
                  fontWeight: '600',
                  textAlign: 'center',
                }}>
                Ha Noi City
              </Text>
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
      <View style={styles.infor}>
        <View style={styles.decription}>
          <Text style={styles.txtDecription}>
            Mobile Developer, traveller{'\n'} Frontend Developer sometime
            Fullstack
          </Text>
        </View>
        <View style={styles.inforAbout}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.txtTitle}>0</Text>
            <Text style={styles.txtDecription2}>Scandal</Text>
          </View>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.txtTitle}>102</Text>
            <Text style={styles.txtDecription2}>In The World</Text>
          </View>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.txtTitle}>1999</Text>
            <Text style={styles.txtDecription2}>Was Born</Text>
          </View>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{marginHorizontal: 30, marginTop: 20}}>
          <View style={{flexDirection: 'row', height: 50, marginBottom: 20}}>
            <Ionicons name="call" size={25} color="#FFF" />
            <View style={{flex: 1}}>
              <TouchableOpacity
                onPress={() => Communications.phonecall('0969453725', true)}>
                <Text style={styles.txtTitle2}>0969453725</Text>
              </TouchableOpacity>
              <Text style={styles.txtDetails}>
                The easiest way to contact to him
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', height: 50, marginBottom: 20}}>
            <Ionicons name="mail" size={25} color="#FFF" />
            <View style={{flex: 1}}>
              <TouchableOpacity
                onPress={() =>
                  Communications.email(
                    [
                      'hai98988989@gmail.com',
                      'trandanghai2017603599@gmail.com',
                    ],
                    null,
                    null,
                    'My Subject',
                    'My body text',
                  )
                }>
                <Text style={styles.txtTitle2}>hai98988989@gmail.com</Text>
              </TouchableOpacity>
              <Text style={styles.txtDetails}>
                Another way to contact to him
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', height: 50, marginBottom: 20}}>
            <Ionicons name="logo-github" size={25} color="#FFF" />
            <View style={{flex: 1}}>
              <TouchableOpacity
                onPress={() =>
                  Communications.web('https://github.com/HaiTran1880')
                }>
                <Text style={styles.txtTitle2}>HaiTran1808</Text>
              </TouchableOpacity>
              <Text style={styles.txtDetails}>View his properties here</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEE9FD',
  },
  txt: {
    fontSize: 20,
    fontWeight: '700',
    color: '#8AAFFF',
  },
  img: {
    flex: Platform.OS === 'ios' ? 4 : 2,
  },
  infor: {
    flex: 6,
    backgroundColor: '#8AAFFF',
  },
  linearGradient: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  imageProfile: {
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
  },
  txtDecription: {
    color: '#FFF',
    fontSize: 17,
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center',
  },
  inforAbout: {
    height: Platform.OS === 'ios' ? 80 : 80,
    flexDirection: 'row',
    alignSelf: 'center',
    borderRadius: 10,
    width: '85%',
    backgroundColor: '#D3D3D3',
  },
  txtTitle: {
    color: '#FFF',
    fontSize: 25,
    marginTop: 10,
    fontWeight: '700',
    textAlign: 'center',
  },
  txtDetails: {
    color: 'white',
    fontSize: 20,
    marginLeft: 10,
  },
  txtTitle2: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 10,
  },
  txtDecription2: {
    color: 'gray',
    marginTop: 10,
    fontSize: 17,
    marginBottom: 10,
    textAlign: 'center',
  },
});
export default Home;
