import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

function CustomButton(props) {
  return (
    <TouchableOpacity onPress = {props.onPress}>
      <View style={props.style}>
        <Text style={props.textStyle}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
}


export default CustomButton;
