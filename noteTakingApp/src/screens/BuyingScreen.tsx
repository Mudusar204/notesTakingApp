import {
  StyleSheet,
  Text,
  View,
  BackHandler,
  Pressable,
  Modal,
  TextInput,
} from 'react-native';
import CheckBox from 'react-native-check-box';
import React, {useEffect, useState} from 'react';
import BackIcon from '../assets/imgs/svg/leftIcon.svg';
import CustomButton from '../components/button/Button';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector, useDispatch} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';
const BuyingScreen = ({navigation}: any) => {
  const storedId = useSelector((state: any) => state.userVerfication.userId);
  const [check, setCheck] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);
  const [text, onChangeText] = useState('');
  const [buyingList, setBuyingList] = useState<any>([]);
  var indexOfCheckBox = buyingList.length;
  const [index, setIndex] = useState<any>(indexOfCheckBox);
  useEffect(() => {
    const handleBackPress = () => {
      navigation.navigate('CreacteNewNotes');
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackPress,
    );

    return () => {
      backHandler.remove();
    };
  }, [navigation]);
  useFocusEffect(
    React.useCallback(() => {
      // navigation.navigate('HomeScreens');
      getBuying();
      setIndex(buyingList.length);
      // setBuyingList(buyingItem);
    }, []),
  );
  const getBuying = async () => {
    try {
      const res = await axios.get('http://192.168.50.34:8000/post/getBuying');
      setBuyingList(res.data.items);
      console.log(res.data.items, 'getBuyings from db');
    } catch (e) {
      console.log(e, 'error in getBuying');
    }
  };
  const addBox = async () => {
    try {
      const res = await axios.post('http://192.168.50.34:8000/post/addBuying', {
        item: text,
        checked: false,
        userId: storedId,
        index: index,
      });
      setIndex(+index + 1);
      setLogoutModal(false);
      setBuyingList([
        ...buyingList,
        {item: text, checked: false, userId: storedId.toString(), index: index},
      ]);
      console.log(buyingList, 'list    jlkjlkj jkljlk');
      onChangeText('');
    } catch (e) {
      console.log(e, 'error while adding check in buying screen');
    }
  };
  const onCheckHandler = (index: number) => {
    setChecked(index);
    let newList = buyingList.map((item: any, itemIndex: number) => {
      if (index === itemIndex) {
        return {...item, checked: true};
      } else {
        return item;
      }
    });
    console.log(index, 'index of check ');
    setBuyingList(newList);
  };
  const setChecked = async (index: number) => {
    try {
      const res = await axios.post(
        'http://192.168.50.34:8000/post/updateBuying',
        {
          index: index,
        },
      );
      console.log('updated successfully', index);
    } catch (e) {}
  };
  return (
    <View style={styles.parent}>
      <View style={styles.header}>
        <View style={styles.headerChild}>
          <Pressable
            onPress={() => navigation.navigate('CreacteNewNotes')}
            style={styles.headerChild}>
            <BackIcon />
            <Text style={styles.headerText1}>Back</Text>
          </Pressable>
        </View>
      </View>
      <Text style={styles.mainHeading}>🛒 Monthly Needs</Text>
      {buyingList.map((item: any, index: number) => {
        return (
          <CheckBox
            key={index}
            style={{padding: 2, marginTop: 22, borderColor: 'red'}}
            onClick={() => onCheckHandler(index)}
            uncheckedCheckBoxColor={'#C8C5CB'}
            isChecked={item.checked}
            rightText={item.item}
            rightTextStyle={styles.headerText}
          />
        );
      })}

      <Pressable
        onPress={() => setLogoutModal(true)}
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 14,
          borderBottomColor: '#EFEEF0',
          borderBottomWidth: 1,
          paddingBottom: 24,
        }}>
        <Text style={[styles.headerText1, {marginTop: 32, fontSize: 24}]}>
          +
        </Text>
        <Text
          style={[
            styles.headerText1,
            {marginTop: 24, textDecorationLine: 'underline'},
          ]}>
          Add checkbox
        </Text>
      </Pressable>
      <Text style={[styles.text, {marginTop: 24}]}>
        Reminder set on 15/07/2021, 18:30
      </Text>
      <View
        style={{
          alignItems: 'flex-start',
          marginTop: 20,
          flexDirection: 'row',
          gap: 12,
        }}>
        <CustomButton
          title={'Important'}
          titleStyle={styles.text}
          buttonStyle={styles.button}
        />
        <CustomButton
          title={'Top Priority'}
          titleStyle={styles.text}
          buttonStyle={styles.button}
        />
      </View>
      <View
        style={{
          alignItems: 'flex-start',
          marginTop: 20,
          flexDirection: 'row',
          gap: 12,
        }}>
        <CustomButton
          title={'Should be Done This Week'}
          titleStyle={styles.text}
          buttonStyle={styles.button}
        />
        <CustomButton
          title={'Important'}
          titleStyle={styles.text}
          buttonStyle={styles.button}
        />
      </View>
      <Modal visible={logoutModal} animationType="slide" transparent={true}>
        <View style={styles.logoutModal}>
          <View
            style={{
              backgroundColor: 'white',
              display: 'flex',
              alignItems: 'center',
              borderRadius: 20,
            }}>
            <Text style={styles.logout}>Add Buyying</Text>
            <TextInput
              autoFocus={true}
              onChangeText={onChangeText}
              value={text}
              style={{
                backgroundColor: '#EFEEF0',
                width: 200,
                borderRadius: 20,
                color: 'black',
              }}></TextInput>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: 18,
                marginBottom: 32,
                marginHorizontal: 20,
                gap: 16,
              }}>
              <CustomButton
                titleStyle={{color: '#6A3EA1'}}
                onPress={() => setLogoutModal(false)}
                title={'Cancel'}
                buttonStyle={styles.modelButton}
              />
              <CustomButton
                onPress={addBox}
                title={'ADD'}
                buttonStyle={styles.modelButton1}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default BuyingScreen;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 8,
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
  mainHeading: {
    color: 'black',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 28,
    fontFamily: 'Inter-Bold',
    marginTop: 24,
  },
  text: {
    color: '#827D89',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    fontFamily: 'Inter-Regular',
    // marginTop: 24,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 25,
    backgroundColor: '#EFEEF0',
  },
  logoutModal: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: 20,

    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  logout: {
    color: '#180E25',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 28,
    fontFamily: 'Inter-Bold',
    marginTop: 32,
  },
  logoutText: {
    color: '#827D89',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22,
    fontFamily: 'Inter-Regular',
    marginTop: 8,
    textAlign: 'center',
    paddingHorizontal: 24,
  },
  modelButton: {
    borderRadius: 25,
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 27,
    borderColor: '#6A3EA1',
  },
  modelButton1: {
    borderRadius: 25,
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 40,
    borderColor: '#6A3EA1',
    backgroundColor: '#6A3EA1',
  },
});
