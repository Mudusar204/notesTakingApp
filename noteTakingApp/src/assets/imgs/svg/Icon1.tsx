import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Svg, Path} from 'react-native-svg';
const Icon1 = (props: any) => {
  return (
    <Svg width="26" height="27" viewBox="0 0 26 27" fill="none">
      <Path
        d="M25 25.009L17 17.009M19.6667 10.3424C19.6667 15.497 15.488 19.6757 10.3333 19.6757C5.17868 19.6757 1 15.497 1 10.3424C1 5.18771 5.17868 1.00903 10.3333 1.00903C15.488 1.00903 19.6667 5.18771 19.6667 10.3424Z"
        stroke={props.color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default Icon1;

const styles = StyleSheet.create({});
