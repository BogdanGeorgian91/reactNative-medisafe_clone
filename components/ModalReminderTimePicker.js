import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  Pressable,
  Modal,
  Alert,
  Button,
  StyleSheet,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MedContext } from "../state-management/context";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { hoursArray } from "../screens/ScheduleScreen";

let hoursSelected = [];
export let uniqueHours = [];
export let uniqueHoursSelected = [];
export let newTimesArr = [];
let poppedItem;

const ModalReminderTimePicker = ({
  children,
  value,
  hasRanOnce,
  title,
  iconName,
  iconSize,
  iconColor,
  onPress,
}) => {
  const medCtx = useContext(MedContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [timeSelected, setTimeSelected] = useState("11:00");
  const [doseCount, setDoseCount] = useState(1);
  const [ranOnce, setRanOnce] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const padTo2Digits = (num) => {
    return String(num).padStart(2, "0");
  };

  const handleConfirm = (date) => {
    // console.warn("A date has been picked: ", date);
    setTimeSelected(
      padTo2Digits(date.getHours()) + ":" + padTo2Digits(date.getMinutes())
    );
    hideDatePicker();
  };

  const pressHandler = () => {
    setRanOnce(true);
    setModalVisible(true);
  };

  const deleteAlarmHandler = () => {
    setTimeSelected("08:00");
    setModalVisible(false);
  };

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalViewHeader}>
              <Pressable style={[styles.button]} onPress={deleteAlarmHandler}>
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>

              <Text style={styles.modalText}>Set Time</Text>

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Done</Text>
              </Pressable>
            </View>

            <Pressable
              // style={[styles.button, styles.buttonClose]}
              // onPress={() => setModalVisible(!modalVisible)}
              onPress={showDatePicker}
              style={styles.pickerContainer}
            >
              <Text style={styles.textStyleTime}>{timeSelected}</Text>

              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="time"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
            </Pressable>
          </View>
        </View>
      </Modal>

      <Pressable onPress={pressHandler} style={styles.container}>
        <Text style={styles.reminderText}>Reminder Time</Text>
        <Text style={styles.textPill}>{timeSelected}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#D3D3D3",
    paddingVertical: 10,
    paddingHorizontal: 20,
    height: 50,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    // borderTopColor: "black",
    // borderTopWidth: 1,
  },
  textPill: {
    // paddingLeft: 15,
    fontSize: 17,
    // borderWidth: 2,
    // borderColor: "black",
  },
  reminderText: {
    fontSize: 18,
    color: "blue",
    textAlign: "center",
  },
  textStyleTime: {
    fontSize: 26,
    color: "blue",
    textAlign: "center",
    padding: 10,
  },

  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    // marginTop: 22,
  },
  modalView: {
    // borderWidth: 2,
    // borderColor: "black",
    width: "90%",
    height: "45%",
    marginBottom: 20,
    backgroundColor: "#D3D3D3",
    borderRadius: 20,
    // paddingHorizontal: 15,
    paddingTop: 5,
    // justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalViewHeader: {
    width: "95%",
    width: 350,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 40,
    // borderWidth: 2,
    // borderColor: "black",
  },
  button: {
    // borderWidth: 2,
    // borderColor: "black",
    borderRadius: 20,
    padding: 10,
    paddingHorizontal: 15,
    elevation: 2,
    backgroundColor: "#FF3131",
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    // fontWeight: "bold",
    fontSize: 16,
    // textAlign: "center",
  },
  modalText: {
    fontSize: 21,
    // marginBottom: 15,
    // textAlign: "center",
  },
  pickerContainer: {
    backgroundColor: "#90EE90",
    borderRadius: 20,
    width: 160,
    // borderWidth: 2,
    // borderColor: "black",
  },
});

export default ModalReminderTimePicker;
