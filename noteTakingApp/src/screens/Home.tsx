import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomButton from '../components/button/Button';
import {useSelector} from 'react-redux';
import HomeImg from '../assets/imgs/svg/homePageImg.svg';
import Arrow from '../assets/imgs/svg/Arrow.svg';
import Plus from '../../src/assets/imgs/svg/plusIcon.svg';

const Home = ({navigation}: any) => {
  return (
    <View style={styles.parent}>
      <HomeImg />
      <Text style={styles.heading}>Start Your Journey</Text>
      <Text style={styles.detail}>
        Every big step start with small step. Notes your first idea and start
        {'\n'} your journey!
      </Text>
      <Arrow style={{marginBottom: 53}} />
      {/* <View style={styles.addIcon}>
        <Plus />
      </View> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#FAF8FC',
    position: 'relative',
  },
  heading: {
    fontSize: 24,
    lineHeight: 28,
    fontWeight: '700',
    fontFamily: 'Inter-Bold',
    color: '#180E25',
    marginTop: 32,
  },
  detail: {
    fontSize: 14,
    lineHeight: 19,
    fontWeight: '400',
    fontFamily: 'Inter-Regular',
    color: '#827D89',
    textAlign: 'center',
    width: 277,
    marginTop: 16,
    marginBottom: 21,
  },
  addIcon: {
    backgroundColor: '#6A3EA1',
    padding: 21,
    borderRadius: 50,

    justifyContent: 'center',
    marginBottom: 15,
    borderWidth: 5,
    borderColor: 'white',
    position: 'absolute',
    // bottom: -50,
    zIndex: 2,
  },
});
