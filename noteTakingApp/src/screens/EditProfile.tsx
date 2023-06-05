import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import BackIcon from '../assets/imgs/svg/leftIcon.svg';
import EditIcon from '../assets/imgs/svg/editIcon.svg';
import ButtonWithImg from '../components/imgButton/ButtonWithImg';
import TickIcon from '../assets/imgs/svg/tickIcon.svg';
import axios from 'axios';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
const EditProfile = ({navigation}: any) => {
  const oldEmail = useSelector(
    (state: any) => state.userVerfication.profileEmail,
  );
  const [name, onChangeName] = useState('');
  const [email, onChangeEmail] = useState('');
  const updateProfile = async () => {
    try {
      const res = await axios.post(
        'http://192.168.50.34:8000/auth/updateProfile',
        {
          newName: name,
          newEmail: email,
          oldEmail: oldEmail,
        },
      );
      await AsyncStorage.removeItem('token');
      navigation.navigate('Login'), console.log('updated success');
    } catch (error) {
      console.log(error, 'error in updating');
    }
  };
  return (
    <View style={styles.parent}>
      <View style={styles.header}>
        <View style={styles.headerChild}>
          <BackIcon />
          <Text style={styles.headerText1}>Settings</Text>
        </View>
        <Text style={styles.headerText}>Edit Profile</Text>
        <View style={{height: 16, width: 76}}></View>
      </View>
      <View style={styles.profileSec}>
        <Image
          style={{height: 120, width: 120, marginTop: 24}}
          source={require('../assets/imgs/ProfilePicture.png')}></Image>
        <View style={styles.buttonParent}>
          <TouchableOpacity
            onPress={() => navigation.navigate('SettingScreen')}
            style={styles.button}>
            <EditIcon />
            <Text style={styles.buttonText}>Change Image</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View>
          <Text style={styles.emailLable}>Full Name</Text>
          <TextInput
            onChangeText={onChangeName}
            value={name}
            placeholder="Michael Antonio"
            placeholderTextColor={'#C8C5CB'}
            style={styles.emailInput}></TextInput>
          <Text style={styles.emailLable}>Email Address</Text>
          <TextInput
            onChangeText={onChangeEmail}
            value={email}
            placeholder="anto_michael@gmail.com"
            placeholderTextColor={'#C8C5CB'}
            style={styles.emailInput}></TextInput>
        </View>
        <Text style={styles.text}>
          Changing email address information means you need to re-login to the
          apps.
        </Text>
        <View>
          <ButtonWithImg
            onPress={updateProfile}
            buttonStyle={styles.button1}
            titleStyle={styles.buttonText1}
            title={'Save Changes'}
            Imgg={<TickIcon />}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    // backgroundColor: 'red',
  },
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
    color: '#180E25',
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
  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 24,
    gap: 10,
    paddingVertical: 8,
    borderColor: '#6A3EA1',
    borderWidth: 1,
    borderRadius: 25,
  },
  buttonText: {
    color: '#6A3EA1',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22,
    fontFamily: 'Inter-Medium',
  },
  buttonParent: {},
  profileSec: {
    display: 'flex',
    alignItems: 'center',
    borderBottomColor: '#EFEEF0',
    borderBottomWidth: 1,
    paddingBottom: 24,
    marginHorizontal: 16,
  },
  emailLable: {
    fontSize: 16,
    lineHeight: 38,
    fontWeight: '500',
    fontFamily: 'Inter-Medium',
    color: '#180E25',
    marginTop: 26,
    marginHorizontal: 16,
  },
  emailInput: {
    color: 'gray',
    borderColor: '#C8C5CB',
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginHorizontal: 16,
  },
  text: {
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '400',
    fontFamily: 'Inter-Medium',
    color: '#C8C5CB',
    marginTop: 12,
    marginHorizontal: 16,
  },
  buttonText1: {fontSize: 16, lineHeight: 22, color: 'white'},
  button1: {
    backgroundColor: '#6A3EA1',
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 50,
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginTop: 102,
    marginHorizontal: 16,
  },
});
