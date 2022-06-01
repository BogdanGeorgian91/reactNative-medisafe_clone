import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const MedItem = ({ name, onPress }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <View>
          <Text style={styles.text}>{name}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D3D3D3",
    padding: 10,
  },
  text: {
    color: "black",
    fontSize: 18,
  },
});

export default MedItem;
