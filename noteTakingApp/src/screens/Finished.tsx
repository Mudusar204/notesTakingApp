import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Arrow from '../assets/imgs/svg/Arrow.svg';
import FinisedImg from '../assets/imgs/svg/finishedScreenImg.svg';
const Finished = () => {
  return (
    <View style={styles.parent}>
      <FinisedImg />
      <Text style={styles.heading}>No Finished Notes Yet</Text>
      <Text style={styles.detail}>
        Once you create a note and finish it, it will be appeared on this
        screen.{'\n'} So, let’s start your journey!
      </Text>
      <Arrow style={{marginBottom: 53}} />
    </View>
  );
};

export default Finished;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#FAF8FC',
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
});
