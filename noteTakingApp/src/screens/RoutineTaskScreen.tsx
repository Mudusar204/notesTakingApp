import {StyleSheet, Text, View, BackHandler} from 'react-native';
import React, {useEffect} from 'react';

const RoutineTaskScreen = ({navigation}: any) => {
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
  return (
    <View>
      <Text>RoutineTaskScreen</Text>
    </View>
  );
};

export default RoutineTaskScreen;

const styles = StyleSheet.create({});
