import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Svg, Path} from 'react-native-svg';
const Icon4 = (props: any) => {
  return (
    <Svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <Path
        d="M14.1314 0.677614C13.5065 0.0527746 12.4935 0.0527746 11.8686 0.677614L0.668641 11.8776C0.0438025 12.5025 0.0438025 13.5155 0.668641 14.1404C1.29348 14.7652 2.30654 14.7652 2.93138 14.1404L3.40001 13.6717V24.209C3.40001 25.0926 4.11636 25.809 5.00001 25.809H8.20001C9.08367 25.809 9.80001 25.0926 9.80001 24.209V21.009C9.80001 20.1253 10.5164 19.409 11.4 19.409H14.6C15.4837 19.409 16.2 20.1253 16.2 21.009V24.209C16.2 25.0926 16.9164 25.809 17.8 25.809H21C21.8837 25.809 22.6 25.0926 22.6 24.209V13.6717L23.0686 14.1404C23.6935 14.7652 24.7065 14.7652 25.3314 14.1404C25.9562 13.5155 25.9562 12.5025 25.3314 11.8776L14.1314 0.677614Z"
        fill={props.color}
      />
    </Svg>
  );
};

export default Icon4;

const styles = StyleSheet.create({});