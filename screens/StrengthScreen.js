import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import Input from "../components/Input";
import MedsButton from "../components/MedsButton";
import { MedContext } from "../state-management/context";

const StrengthScreen = () => {
  const medCtx = useContext(MedContext);

  const changeUnitHandler = (textValue) => {
    medCtx.addStrength(textValue);
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.textInput}>Strength</Text>
          <View style={styles.input}>
            <Input
              placeholder="tap"
              iconSize={0}
              keyboardType="number-pad"
              onChangeText={changeUnitHandler}
              value={medCtx.strength.value}
              onEndEditing={() => {}}
            />
          </View>
        </View>
        <View style={styles.unitContainer}>
          <MedsButton navigateTo="Unit" iconName2="arrowright" iconSize={24}>
            Units
          </MedsButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  container: {
    paddingVertical: 10,
  },
  inputContainer: {
    backgroundColor: "#D3D3D3",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  textInput: {
    fontSize: 18,
    paddingLeft: 20,
    color: "blue",
  },
  input: {
    // borderColor: "black",
    // borderWidth: 2,
    width: 150,
    paddingLeft: 60,
  },
  unitContainer: {
    marginVertical: 10,
  },
});

export default StrengthScreen;
