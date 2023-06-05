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
  // Modal,
} from 'react-native';
import Modal from 'react-native-modal';
import React, {useEffect} from 'react';
import axios from 'axios';
import Arrow from '../assets/imgs/svg/rightArrowWhite.svg';
import ButtonWithImg from '../components/imgButton/ButtonWithImg';
import Logo from '../assets/imgs/svg/googleLogo.svg';
import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
import CustomButton from '../components/button/Button';
import {useDispatch} from 'react-redux';
import {setName, setProfileEmail, setUserId} from '../store/userVerfication';

const Login = ({navigation}: any) => {
  const dispatch = useDispatch();

  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const focused = useIsFocused();

  const loginUser = async () => {
    try {
      const res = await axios.post('http://192.168.50.34:8000/auth/login', {
        email: email,
        password: password,
        token: '',
      });
      console.log(res.data.data.token, 'response from login');
      if (res.data) {
        await AsyncStorage.setItem('token', res.data.data.token);
        const ress = await axios.post(
          'http://192.168.50.34:8000/auth/verifyUser',
          {
            token: res.data.data.token,
          },
        );
        dispatch(setProfileEmail(ress.data.data.email));
        dispatch(setName(ress.data.data.name));
        dispatch(setUserId(res.data.data.userId));

        console.log('successs fully set token');
        navigation.navigate('Taps');
        console.log(ress.data, 'userCredential from login');
      }
    } catch (error) {
      console.log(error, 'error while token saving');
      setModalVisible(true);
    }
  };

  return (
    <View style={styles.parent}>
      <StatusBar
        barStyle={'dark-content'}
        translucent={false}
        backgroundColor={'white'}
      />
      <Text style={styles.heading}>Let’s Login</Text>
      <Text style={styles.title}>And notes your idea</Text>
      <ScrollView>
        <View style={{}}>
          <Text style={styles.emailLable}>Email Address</Text>
          <TextInput
            onChangeText={onChangeEmail}
            value={email}
            placeholder="Example: johndoe@gmail.com"
            placeholderTextColor={'#C8C5CB'}
            style={styles.emailInput}></TextInput>
          <Text style={styles.emailLable}>Password</Text>
          <TextInput
            onChangeText={onChangePassword}
            value={password}
            placeholder="********"
            placeholderTextColor={'#C8C5CB'}
            style={styles.emailInput}></TextInput>
          <Pressable
            onPress={() => navigation.navigate('ForgetPassword')}
            style={{alignItems: 'flex-start'}}>
            <Text style={styles.forgetLink}>Forgot Password</Text>
          </Pressable>
          <ButtonWithImg
            onPress={loginUser}
            buttonStyle={styles.button}
            titleStyle={styles.text}
            title={'Login'}
            Imgg={<Arrow />}
          />
          <View style={styles.or}>
            <Text style={styles.orBorder}></Text>
            <Text style={styles.orText}>Or</Text>
            <Text style={styles.orBorder}></Text>
          </View>
          <TouchableOpacity style={styles.button1}>
            <Logo />
            <Text style={styles.buttonText}>Login with Google</Text>
          </TouchableOpacity>
          <Pressable onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerLink}>
              Don’t have any account? Register here
            </Text>
          </Pressable>
        </View>
        <View style={{marginHorizontal: 90, alignItems: 'center'}}>
          <Modal isVisible={modalVisible}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  backgroundColor: 'white',
                  color: 'red',
                  padding: 10,
                  borderTopLeftRadius: 10,
                  borderRadius: 10,
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                  // borderWidth: 2,
                }}>
                Invalid Email or Password
              </Text>
              <CustomButton
                title={'Ok'}
                onPress={() => setModalVisible(false)}
                buttonStyle={{
                  backgroundColor: '#6A3EA1',
                  padding: 10,
                  borderRadius: 10,
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                }}
              />
            </View>
          </Modal>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: 32,
    lineHeight: 38,
    marginTop: '17%',
    fontFamily: 'Inter-Bold',
    color: 'black',
  },
  title: {
    fontSize: 16,
    lineHeight: 38,
    fontFamily: 'Inter-Regular',
    color: '#827D89',
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
  forgetLink: {
    color: '#6A3EA1',
    borderBottomColor: '#6A3EA1',
    borderBottomWidth: 1,
    marginTop: 12,
  },
  or: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'blue',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  orBorder: {
    borderTopWidth: 1,
    borderTopColor: '#EFEEF0',
    height: 1,
    width: '42%',
  },
  orText: {
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '500',
    fontFamily: 'Inter-Medium',
    color: '#827D89',
  },
  button1: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    paddingVertical: 16,
    paddingHorizontal: 20,
    gap: 16,
    borderColor: '#C8C5CB',
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '500',
    fontFamily: 'Inter-Medium',
    color: '#180E25',
  },
  registerLink: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '500',
    fontFamily: 'Inter-Medium',
    color: '#6A3EA1',
    textAlign: 'center',
    marginTop: 32,
  },
});
