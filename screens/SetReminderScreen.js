import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Input from "../components/Input";

const SetReminderScreen = () => {
  return (
    <View>
      <View style={styles.textContainer}>
        <Text>REMIND ME WHEN I HAVE:</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.textInput}>Pills left</Text>
        <View style={styles.input}>
          <Input
            placeholder="tap"
            iconSize={0}
            keyboardType="number-pad"
            // value={medCtx.strength.value}
            onChangeText={() => {}}
            onEndEditing={() => {}}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    marginTop: 10,
    marginLeft: 20,
  },
  inputContainer: {
    backgroundColor: "#D3D3D3",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  input: {
    // borderColor: "black",
    // borderWidth: 2,
    width: 150,
    paddingLeft: 60,
  },
  textInput: {
    fontSize: 18,
    paddingLeft: 20,
    color: "blue",
  },
});

export default SetReminderScreen;
