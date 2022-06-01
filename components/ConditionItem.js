import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const ConditionItem = ({ name, onPress }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{name}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D3D3D3",
    // marginBottom: 10,
    // width: "100%",
    borderBottomColor: "black",
    borderWidth: 1,
    // paddingLeft: 10,
    paddingVertical: 10,
  },
  textContainer: {
    // borderBottomColor: "black",
    // borderWidth: 1,
  },
  text: {
    color: "black",
    fontSize: 18,
  },
});

export default ConditionItem;
