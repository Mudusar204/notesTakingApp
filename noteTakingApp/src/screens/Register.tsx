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
} from 'react-native';
import React, {useState} from 'react';
import Arrow from '../assets/imgs/svg/rightArrowWhite.svg';
import ButtonWithImg from '../components/imgButton/ButtonWithImg';
import BackIcon from '../assets/imgs/svg/leftIcon.svg';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {setEmail, setProfileEmail} from '../store/userVerfication';
const Register = ({navigation}: any) => {
  const [name, onChangeName] = useState('');
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [confirmPassword, onChangeConfirmPassword] = useState('');
  const [error, setError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const dispatch = useDispatch();
  const registerUser = async () => {
    if (!email.includes('@gmail.com')) {
      setEmailError(true);
      // return;
    } else {
      setEmailError(false);
    }
    if (password !== confirmPassword) {
      setError(true);
      return;
    } else {
      setError(false);
    }
    console.log('response from server');

    const res = await axios.post('http://192.168.50.34:8000/auth/signup', {
      name: name,
      email: email,
      password: password,
    });
    await AsyncStorage.setItem('token', res.data.data.token);
    dispatch(setProfileEmail(res.data.data.email));

    navigation.navigate('Taps');
    console.log(res.data, 'response from server');
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
      <Text style={styles.heading}>Register</Text>
      <Text style={styles.title}>And start taking notes</Text>
      <ScrollView>
        <View>
          <Text style={styles.emailLable}>Full Name</Text>
          <TextInput
            onChangeText={onChangeName}
            value={name}
            placeholder="Example: John Doe"
            placeholderTextColor={'#C8C5CB'}
            style={styles.emailInput}></TextInput>
          <Text style={styles.emailLable}>Email Address</Text>
          <TextInput
            onChangeText={onChangeEmail}
            value={email}
            placeholder="Example: johndoe@gmail.com"
            placeholderTextColor={'#C8C5CB'}
            style={styles.emailInput}></TextInput>
          {emailError && (
            <Text style={{color: 'red'}}>plz enter valid email</Text>
          )}

          <Text style={styles.emailLable}>Password</Text>
          <TextInput
            onChangeText={onChangePassword}
            value={password}
            placeholder="********"
            secureTextEntry={true}
            placeholderTextColor={'#C8C5CB'}
            style={styles.emailInput}></TextInput>
          <Text style={styles.emailLable}>Retype Password</Text>
          <TextInput
            onChangeText={onChangeConfirmPassword}
            value={confirmPassword}
            secureTextEntry={true}
            placeholder="********"
            placeholderTextColor={'#C8C5CB'}
            style={styles.emailInput}></TextInput>
          {error && <Text style={{color: 'red'}}>plz enter same password</Text>}
          <ButtonWithImg
            onPress={registerUser}
            buttonStyle={styles.button}
            titleStyle={styles.text}
            title={'Register'}
            Imgg={<Arrow />}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 16,
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
