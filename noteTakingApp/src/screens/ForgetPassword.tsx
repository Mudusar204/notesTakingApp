import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Image,
  Pressable,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
import {setOtp, setEmail} from '../store/userVerfication';
import {useSelector, useDispatch} from 'react-redux';
import Arrow from '../assets/imgs/svg/rightArrowWhite.svg';
import ButtonWithImg from '../components/imgButton/ButtonWithImg';
import BackIcon from '../assets/imgs/svg/leftIcon.svg';
import CustomButton from '../components/button/Button';
const ForgetPassword = ({navigation}: any) => {
  const dispatch = useDispatch();
  const storeOtp = useSelector((state: any) => state.userVerfication.otp);
  const [email, onChangeEmail] = useState('');
  const [visibility, setVisibility] = useState(false);
  const [enterdOtp, onChangeOtpConfirm] = useState('');
  const [error, setError] = useState(false);
  const sendCode = async () => {
    try {
      const res = await axios.post(
        'http://192.168.50.34:8000/auth/forgetPassword',
        {
          email: email,
        },
      );
      setVisibility(true);
      dispatch(setOtp(res.data.data.otp));
      dispatch(setEmail(email));
      console.log(res.data, 'res from otp maker');
    } catch (error) {
      console.log(error, 'error in forget password catch');
    }
  };
  const otpHandler = () => {
    if (enterdOtp === storeOtp) {
      console.log(
        storeOtp,
        'this is store otp',
        enterdOtp,
        'this is reponse otp',
      );
      navigation.navigate('NewPassword');
      setVisibility(false);
      onChangeOtpConfirm('');
    } else {
      console.log(
        storeOtp,
        'this is store otp',
        enterdOtp,
        'this is reponse otp',
      );
      setError(true);
    }
  };
  return (
    <View style={styles.parent}>
      <StatusBar
        barStyle={'dark-content'}
        translucent={false}
        backgroundColor={'white'}
      />
      <View style={styles.header}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}>
          <BackIcon />
        </Pressable>
        <Text style={styles.headerTitle}>Back to Login</Text>
      </View>
      <View style={{marginBottom: 32}}>
        <Text style={styles.heading}>Forgot Password</Text>
        <Text style={styles.title}>
          Insert your email address to receive a code for creating a new
          password{' '}
        </Text>
        <ScrollView>
          <View>
            <Text style={styles.emailLable}>Email Address</Text>
            <TextInput
              onChangeText={onChangeEmail}
              value={email}
              placeholder="anto_michael@gmail.com"
              placeholderTextColor={'#C8C5CB'}
              style={styles.emailInput}></TextInput>

            <ButtonWithImg
              onPress={sendCode}
              buttonStyle={styles.button}
              titleStyle={styles.text}
              title={'Send Code'}
              Imgg={<BackIcon />}
            />
          </View>
        </ScrollView>
      </View>
      <Modal visible={visibility}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            gap: 20,
            paddingHorizontal: 30,
          }}>
          <TextInput
            onChangeText={onChangeOtpConfirm}
            value={enterdOtp}
            placeholder="enter you OTP"
            style={styles.emailInput}></TextInput>
          {error ? <Text style={{color: 'red'}}>Wrong Otp</Text> : null}
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <CustomButton
              onPress={() => setVisibility(false)}
              title={'Cancel'}
              titleStyle={{color: 'white'}}
              buttonStyle={{
                padding: 10,
                paddingHorizontal: 40,
                backgroundColor: 'red',
                borderRadius: 4,
              }}
            />
            <CustomButton
              onPress={otpHandler}
              title={'Confirm'}
              titleStyle={{color: 'white'}}
              buttonStyle={{
                padding: 10,
                paddingHorizontal: 40,

                backgroundColor: 'green',
                borderRadius: 4,
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 15,
    alignItems: 'center',
    marginTop: 16,
  },
  headerTitle: {
    fontSize: 16,
    lineHeight: 22,
    // marginTop: '17%',
    fontFamily: 'Inter-Medium',
    color: '#6A3EA1',
  },
  heading: {
    fontSize: 32,
    lineHeight: 38,
    marginTop: 26,
    fontFamily: 'Inter-Bold',
    color: 'black',
  },
  title: {
    fontSize: 16,
    lineHeight: 22,
    fontFamily: 'Inter-Regular',
    color: '#827D89',
    marginTop: 16,
  },
  emailLable: {
    fontSize: 16,
    lineHeight: 38,
    fontWeight: '500',
    fontFamily: 'Inter-Medium',
    color: '#180E25',
    marginTop: 26,
  },
  emailInput: {
    color: 'gray',
    borderColor: '#C8C5CB',
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  text: {fontSize: 16, lineHeight: 22, color: 'white'},
  button: {
    backgroundColor: '#6A3EA1',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 50,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginTop: 40,
  },
});
