import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import Input from "../components/Input";
import { MedContext } from "../state-management/context";

const SetReminderScreen = () => {
  const medCtx = useContext(MedContext);

  const changeNumHandler = (numValue) => {
    medCtx.addNumOfPills(numValue);
  };

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
            value={medCtx.numOfPills.value}
            onChangeText={changeNumHandler}
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
