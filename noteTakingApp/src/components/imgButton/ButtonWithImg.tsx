import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const ButtonWithImg = (props: any) => (
  //   <TouchableOpacity style={props.buttonStyle} onPress={props.onPress}>
  //     <Text style={props.titleStyle}>{props.title}</Text>
  //   </TouchableOpacity>
  <TouchableOpacity onPress={props.onPress} style={props.buttonStyle}>
    <Text></Text>
    <Text style={props.titleStyle}>{props.title}</Text>
    {props.Imgg}
    {/* <Arrow /> */}
  </TouchableOpacity>
);

export default ButtonWithImg;
