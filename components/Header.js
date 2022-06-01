import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 70,
    paddingTop: 16,
    backgroundColor: "#0047AB",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "white",
    fontSize: 32,
  },
});

export default Header;
