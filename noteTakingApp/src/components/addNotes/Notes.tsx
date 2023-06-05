import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import IdeasIcon from '../../assets/imgs/svg/IdeasIcon.svg';

const Notes = (props: any) => {
  return (
    <Pressable
      onPress={props.onPress}
      style={{
        paddingVertical: 16,
        backgroundColor: props.backgroundColor,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 16,
        overflow: 'hidden',
        borderRadius: 8,
        marginTop: 24,
        gap: 14,
      }}>
      <View>{props.img}</View>
      <View>
        <Text
          style={{
            fontSize: 16,
            lineHeight: 22,
            fontWeight: '700',
            color: 'white',
            fontFamily: 'Inter-Bold',
            marginBottom: 8,
          }}>
          {props.heading}
        </Text>
        <Text
          style={{
            fontSize: 11.5,
            lineHeight: 14,
            fontWeight: '400',
            color: props.color,
            fontFamily: 'Inter-Regular',
          }}>
          {props.title}
        </Text>
      </View>
    </Pressable>
  );
};

export default Notes;

const styles = StyleSheet.create({});
