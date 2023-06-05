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
import {useStore} from 'react-redux';
import {useSelector} from 'react-redux';
import axios from 'axios';
const NewPassword = ({navigation}: any) => {
  const storeEmail = useSelector((state: any) => state.userVerfication.email);
  const [password, onChangePassword] = useState('');
  const [confirmPassword, onChangeConfirmPassword] = useState('');
  const [error, setError] = useState(false);
  const NewPasswordHandler = async () => {
    if (password === confirmPassword) {
      try {
        const res = await axios.post(
          'http://192.168.50.34:8000/auth/newPassword',
          {
            email: storeEmail,
            password: password,
          },
          navigation.navigate('Login'),
        );
      } catch (error) {}
    } else {
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
        <Text style={styles.heading}>Create a New Password</Text>
        <Text style={styles.title}>
          Your new password should be different from the previous password
        </Text>
        <ScrollView>
          <View>
            <Text style={styles.emailLable}>New Password</Text>
            <TextInput
              onChangeText={onChangePassword}
              value={password}
              placeholder="********"
              placeholderTextColor={'#C8C5CB'}
              style={styles.emailInput}></TextInput>
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
            <ButtonWithImg
              onPress={NewPasswordHandler}
              buttonStyle={styles.button}
              titleStyle={styles.text}
              title={'Create Password'}
              Imgg={<BackIcon />}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default NewPassword;

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
