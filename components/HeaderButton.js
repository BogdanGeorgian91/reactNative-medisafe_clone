import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

const HeaderButton = ({children, onPress, active}) => {
  return (
    <Pressable onPress={onPress}>
      <Text style={[styles.text, !active && styles.textInactive]}>
        {children}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "black",
    fontSize: 18,
  },
  textInactive: { opacity: 0.75 },
});

export default HeaderButton;
