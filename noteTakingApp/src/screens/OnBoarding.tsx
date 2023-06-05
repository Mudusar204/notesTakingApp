import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Slider from '../components/Slider';
import {Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import CustomButton from '../components/button/Button';
import Arrow from '../assets/imgs/svg/rightArrow.svg';
import ButtonWithImg from '../components/imgButton/ButtonWithImg';
import {useDispatch} from 'react-redux';
import {setName, setProfileEmail, setUserId} from '../store/userVerfication';
const OnBoarding = ({navigation}: any) => {
  const dispatch = useDispatch();
  useEffect(() => {
    checkToken();
    // setModalVisible(false);
  }, []);
  const checkToken = async () => {
    const dbToken = await AsyncStorage.getItem('token');
    console.log(dbToken, 'token from onboarding screen');
    if (dbToken !== null) {
      const res = await axios.post(
        'http://192.168.50.34:8000/auth/verifyUser',
        {
          token: dbToken,
        },
      );
      navigation.navigate('Taps');
      dispatch(setProfileEmail(res.data.data.email));
      dispatch(setName(res.data.data.name));
      dispatch(setUserId(res.data.data.userId));
      console.log(res.data, 'userCredential');
      return;
    } else {
    }
  };
  return (
    <View style={styles.parent}>
      <StatusBar translucent backgroundColor={'transparent'} />
      <Slider />
      <ButtonWithImg
        onPress={() => navigation.navigate('Login')}
        buttonStyle={styles.button}
        titleStyle={styles.text}
        title={'Let’s Get Started'}
        Imgg={<Arrow />}
      />
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    gap: 70,
    justifyContent: 'flex-end',
    backgroundColor: '#6A3EA1',
  },
  text: {fontSize: 16, lineHeight: 22, color: '#6A3EA1'},
  button: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 50,
    marginHorizontal: 16,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginBottom: 84,
  },
});
