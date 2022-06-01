import React, { useContext, useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

import Header from "../components/Header";
import Input from "../components/Input";
import MedsButton from "../components/MedsButton";
import HeaderButton from "../components/HeaderButton";
import MedList from "../components/MedList";
import { MedContext } from "../state-management/context";

const AddMedicineScreen = ({ navigation }) => {
  const medCtx = useContext(MedContext);

  const formIsValid =
    medCtx.med.IsValid && medCtx.strength.IsValid && medCtx.units.IsValid;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButton
          active={formIsValid}
          onPress={() => {
            if (formIsValid) {
              navigation.navigate("Schedule");
            }
          }}
        >
          Next
        </HeaderButton>
      ),
      headerLeft: () => (
        <HeaderButton onPress={() => navigation.goBack()} active={true}>
          Cancel
        </HeaderButton>
      ),
    });
  }, [navigation, formIsValid]);

  const inputChangeHandler = (inputValue) => {
    console.log("working");
    medCtx.addMed(inputValue);
  };

  const inputEndEditingHandler = () => {
    console.log("working2");
    medCtx.checkMed();
  };

  const selectMedHandler = (id, text) => {
    // console.log("working3");
    medCtx.chooseMed(id, text);
  };

  let content = (
    <View style={styles.container}>
      <MedsButton
        navigateTo="Strength"
        iconName="signal-cellular-1"
        iconName2="arrowright"
        iconSize={24}
        iconColor="black"
      >
        Add strength
      </MedsButton>
    </View>
  );

  if (!medCtx.med.IsValid) {
    // console.log("isValid");
    content = (
      <View style={styles.listContainer}>
        <MedList onPress={selectMedHandler} />
      </View>
    );
  }

  return (
    <View style={styles.rootContainer}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Input
            placeholder="Tap to search medication"
            title="med info"
            iconName="pills"
            iconSize={24}
            iconColor="black"
            value={medCtx.med.value}
            onChangeText={inputChangeHandler}
            onEndEditing={inputEndEditingHandler}
          />
        </View>
        {content}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: "#fff",
    flex: 1,
  },
  container: {
    // flex: 1,
    paddingVertical: 10,
  },
  inputContainer: {
    marginVertical: 20,
  },
  input: {
    color: "white",
  },
  listContainer: {
    height: "100%",
  },
});

export default AddMedicineScreen;
