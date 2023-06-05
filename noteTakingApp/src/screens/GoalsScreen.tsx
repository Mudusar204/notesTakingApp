import {StyleSheet, Text, View, BackHandler} from 'react-native';
import React, {useEffect} from 'react';

const GoalsScreen = ({navigation}: any) => {
  useEffect(() => {
    const handleBackPress = () => {
      navigation.navigate('CreacteNewNotes');
      return true; // Prevent the default back button behavior
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackPress,
    );

    return () => {
      backHandler.remove(); // Clean up the event listener
    };
  }, [navigation]);
  return (
    <View>
      <Text>GoalsScreen</Text>
    </View>
  );
};

export default GoalsScreen;

const styles = StyleSheet.create({});
