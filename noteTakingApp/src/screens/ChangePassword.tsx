import {StyleSheet, Text, View, ScrollView, TextInput} from 'react-native';
import React, {useState} from 'react';
import BackIcon from '../assets/imgs/svg/leftIcon.svg';
import RightArrow from '../assets/imgs/svg/rightArrowWhite.svg';
import ButtonWithImg from '../components/imgButton/ButtonWithImg';
import axios from 'axios';
import {useSelector} from 'react-redux';
const ChangePassword = ({navigation}: any) => {
  const storeEmail = useSelector(
    (state: any) => state.userVerfication.profileEmail,
  );

  const [password, onChangePassword] = useState('');
  const [confirmPassword, onChangeConfirmPassword] = useState('');
  const [error, setError] = useState(false);
  const [currentPassword, onChangeCurrentPassword] = useState('');
  const [msg, setMsg] = useState('');
  const NewPasswordHandler = async () => {
    console.log(storeEmail, 'store ma se email');
    if (password === confirmPassword) {
      try {
        const res = await axios.post(
          'http://192.168.50.34:8000/auth/newPassword',
          {
            email: storeEmail,
            password: password,
            currentPassword: currentPassword,
          },
        );
        console.log(res.data);
        navigation.navigate('Login'), setMsg(res.data.data.message);
      } catch (error) {}
    } else {
      setError(true);
      // setMsg(res.data.data.message);
    }
  };
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.headerChild}>
          <BackIcon />
          <Text style={styles.headerText1}>Back</Text>
        </View>
        <Text style={styles.headerText}>ChangePassword</Text>
        <View style={{height: 16, width: 56}}></View>
      </View>
      <ScrollView>
        <Text style={styles.headerTitle}>
          Please input your current password first
        </Text>
        <View style={{paddingHorizontal: 16}}>
          <Text style={styles.emailLable}>Current Password</Text>
          <TextInput
            onChangeText={onChangeCurrentPassword}
            value={currentPassword}
            placeholder="********"
            placeholderTextColor={'#C8C5CB'}
            style={styles.emailInput}></TextInput>
        </View>
        <Text style={styles.headerTitle1}>Now, create your new password</Text>
        <View style={{paddingHorizontal: 16}}>
          <Text style={styles.emailLable}>New Password</Text>
          <TextInput
            onChangeText={onChangePassword}
            value={password}
            placeholder="********"
            placeholderTextColor={'#C8C5CB'}
            style={styles.emailInput}></TextInput>
          <Text style={styles.inputTitle}>
            Password should contain a-z, A-Z, 0-9
          </Text>
          <Text style={styles.emailLable}>Retype New Password</Text>
          <TextInput
            onChangeText={onChangeConfirmPassword}
            value={confirmPassword}
            placeholder="*********"
            placeholderTextColor={'#C8C5CB'}
            style={styles.emailInput}></TextInput>
          {error ? (
            <Text style={{color: 'red'}}>Match the password</Text>
          ) : null}
          <Text style={{color: 'red'}}>{msg}</Text>
          <ButtonWithImg
            onPress={NewPasswordHandler}
            buttonStyle={styles.button}
            titleStyle={styles.text}
            title={'Submit New Password'}
            Imgg={<RightArrow />}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 23,
    borderBottomWidth: 1,
    borderBottomColor: '#EFEEF0',
  },
  headerText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22,
    fontFamily: 'Inter-Medium',
  },
  headerText1: {
    color: '#6A3EA1',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22,
    fontFamily: 'Inter-Medium',
  },
  headerChild: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  headerTitle: {
    color: '#6A3EA1',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 14,
    fontFamily: 'Inter-Medium',
    marginHorizontal: 16,
    marginTop: 24,
  },
  headerTitle1: {
    color: '#6A3EA1',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 14,
    fontFamily: 'Inter-Medium',
    marginHorizontal: 16,
    marginTop: 24,
    paddingTop: 24,
    borderTopColor: '#EFEEF0',
    borderTopWidth: 1,
  },
  emailLable: {
    fontSize: 16,
    lineHeight: 38,
    fontWeight: '500',
    fontFamily: 'Inter-Medium',
    color: '#180E25',
    marginTop: 16,
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
    marginTop: 133,
  },
  inputTitle: {
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '400',
    fontFamily: 'Inter-Medium',
    color: '#C8C5CB',
    marginTop: 12,
  },
});
