import React, { useContext, useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Input from "../components/Input";
import ReminderButton from "../components/ReminderButton";
import { MedContext } from "../state-management/context";
import HeaderButton from "../components/HeaderButton";
import ModalPickerCondition from "../components/ModalPickerCondition";
import ToggleSwitch from "toggle-switch-react-native";
import ModalReminderTimePicker from "../components/ModalReminderTimePicker";

const DetailScreen = ({ navigation }) => {
  const medCtx = useContext(MedContext);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButton
          // active={formIsValid}
          onPress={() => {
            //#######   MUST CHANGE HERE ##############
            navigation.navigate("Detail");
          }}
        >
          Done
        </HeaderButton>
      ),
      //   headerLeft: () => (
      //     <HeaderButton onPress={() => navigation.goBack()} active={true}>
      //       Cancel
      //     </HeaderButton>
      //   ),
    });
  }, [navigation]);

  // const changeUnitHandler = (textValue) => {
  //   medCtx.addStrength(textValue);
  // };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.conditionContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            WHAT ARE YOU TAKING THIS MEDICATION FOR?
          </Text>
        </View>

        <ModalPickerCondition
          iconName="arrowright"
          iconSize={24}
          iconColor="black"
          value={medCtx.condition.value}
        />
      </View>

      <View style={styles.stockContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            HOW MANY PILLS DO YOU HAVE IN YOUR STOCK?
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.textInput}>Pills in stock</Text>
          <View style={styles.input}>
            <Input
              placeholder="pills in stock"
              iconSize={0}
              keyboardType="number-pad"
              //   onChangeText={changeUnitHandler}
              //   value={medCtx.strength.value}
              onChangeText={() => {}}
              onEndEditing={() => {}}
            />
          </View>
        </View>
      </View>

      <View style={styles.reminderContainer}>
        <View style={styles.reminderTextContainer}>
          <Text style={styles.reminderText}>Refill Reminder</Text>
        </View>

        <View style={styles.switchContainer}>
          <ToggleSwitch
            isOn={isEnabled}
            onColor="#0000FF"
            offColor="#7393B3"
            // label="Example label"
            // labelStyle={{ color: "black", fontWeight: "900" }}
            size="medium"
            animationSpeed={150}
            onToggle={(isOn) => toggleSwitch()}
          />
        </View>
      </View>

      {isEnabled && (
        <View>
          <ReminderButton navigateTo="Set Reminder" value="5 pills left">
            Reminder
          </ReminderButton>

          <ModalReminderTimePicker />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  inputContainer: {
    backgroundColor: "#D3D3D3",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // paddingVertical: 10,

    // marginVertical: 10,
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
    color: "black",
    // paddingLeft: 60,
  },
  textContainer: {
    width: "70%",
    marginVertical: 5,
  },
  text: {
    paddingLeft: 20,
    fontSize: 14,
  },
  stockContainer: {
    marginBottom: 20,
  },
  reminderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#D3D3D3",
    // borderBottomColor: "black",
    // borderBottomWidth: 1,
    borderTopColor: "black",
    borderTopWidth: 1,

    // borderWidth: 1,
    // borderColor: "black",
  },
  reminderText: {
    color: "blue",
    fontSize: 18,
  },
  switchContainer: {
    paddingVertical: 10,
  },
});

export default DetailScreen;
