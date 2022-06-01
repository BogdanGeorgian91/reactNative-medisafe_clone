import React, {
  useContext,
  useLayoutEffect,
  useState,
  useEffect,
  useRef,
} from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Animated,
  Pressable,
} from "react-native";
import Input from "../components/Input";
import ReminderButton from "../components/ReminderButton";
import { MedContext } from "../state-management/context";
import HeaderButton from "../components/HeaderButton";
import ModalPickerCondition from "../components/ModalPickerCondition";
import ToggleSwitch from "toggle-switch-react-native";
import ModalReminderTimePicker from "../components/ModalReminderTimePicker";
import { AntDesign } from "@expo/vector-icons";

const ModalPopup = ({ visible, children }) => {
  const [showModal, setShowModal] = useState(visible);
  const scaleValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    toggleModal();
  }, [visible]);

  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    } else {
      // setShowModal(false);
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackground}>
        <Animated.View
          style={[
            styles.modalContainer,
            { transform: [{ scale: scaleValue }] },
          ]}
        >
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

const DetailScreen = ({ navigation }) => {
  const medCtx = useContext(MedContext);
  const [isEnabled, setIsEnabled] = useState(false);
  const [visibleModalPopup, setVisibleModalPopup] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const formIsValid = medCtx.condition.value && medCtx.numOfPills.value;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButton
          active={formIsValid}
          onPress={() => {
            console.log(medCtx.condition.value);
            console.log(medCtx.numOfPills.value);

            if (formIsValid) {
              //#######   MUST CHANGE HERE ##############
              // navigation.navigate("Detail");
              console.log("ENTERED MODAL");
              setVisibleModalPopup(true);
            }
          }}
        >
          Done
        </HeaderButton>
      ),
    });
  }, [navigation, formIsValid]);

  // const changeUnitHandler = (textValue) => {
  //   medCtx.addStrength(textValue);
  // };

  return (
    <View style={styles.rootContainer}>
      <ModalPopup visible={visibleModalPopup}>
        <View style={{ alignItems: "center", paddingVertical: 20 }}>
          <View style={{ marginBottom: 20 }}>
            <Text style={{ fontSize: 20 }}>PILL added successfully!</Text>
          </View>
          <View style={{ marginBottom: 20 }}>
            <AntDesign name="checkcircle" size={46} color="green" />
          </View>
          <Pressable
            style={styles.addAnotherTextContainer}
            onPress={() => setVisibleModalPopup(false)}
          >
            <Text style={styles.addAnotherText}>Add Another Med</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Home")}>
            <Text>Continue to Home Screen</Text>
          </Pressable>
        </View>
      </ModalPopup>

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
              placeholderTextColor="grey"
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
            size="medium"
            animationSpeed={150}
            onToggle={(isOn) => toggleSwitch()}
          />
        </View>
      </View>

      {isEnabled && (
        <View>
          <ReminderButton
            navigateTo="Set Reminder"
            value={`${medCtx.numOfPills.value} pills left`}
          >
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
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "85%",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    elevation: 20,
  },
  addAnotherTextContainer: {
    marginBottom: 20,
    backgroundColor: "#D3D3D3",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  addAnotherText: {
    fontSize: 20,
  },
});

export default DetailScreen;
