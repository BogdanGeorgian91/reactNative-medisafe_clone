import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const UnitItem = ({ unit, onPress, isSelected }) => {
  if (isSelected) {
    return (
      <Pressable onPress={onPress} style={styles.textContainer}>
        <View style={styles.iconContainer}>
          <Text style={styles.text}>{unit}</Text>
          <MaterialCommunityIcons name="check" size={24} color="black" />
        </View>
      </Pressable>
    );
  }

  return (
    <Pressable style={styles.textContainer} onPress={onPress}>
      <View>
        <Text style={styles.text}>{unit}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: "#D3D3D3",
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  text: {
    color: "blue",
    paddingVertical: 10,
    fontSize: 16,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default UnitItem;
