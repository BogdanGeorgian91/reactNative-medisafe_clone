import React, { useState, useContext, useEffect } from "react";
import { View, Text, Pressable, Modal, Alert, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MedContext } from "../state-management/context";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const ModalTimePicker = ({
  children,
  value,
  title,
  iconName,
  iconSize,
  iconColor,
  onPress,
}) => {
  const medCtx = useContext(MedContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [doseCount, setDoseCount] = useState(1);

  const [timeSelected, setTimeSelected] = useState(value);

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
    // setTimeSelected(
    //   padTo2Digits(date.getHours()) + ":" + padTo2Digits(date.getMinutes())
    // );
    console.log(timeSelected);
    let hourSelected =
      padTo2Digits(date.getHours()) + ":" + padTo2Digits(date.getMinutes());

    medCtx.addHour(timeSelected, hourSelected);

    hideDatePicker();
    console.log(medCtx.allHours);
  };

  // const chooseHourHandler = (id) => {
  //   medCtx.chooseHour(id);
  // };

  const pressHandler = () => {
    setModalVisible(true);
    // medCtx.chooseHour(id);
  };

  const deleteAlarmHandler = () => {
    setTimeSelected("08:00");
    setDoseCount(1);
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

              <Text style={styles.modalText}>Edit Reminder</Text>

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

            <View>
              <Text style={styles.doseText}>Dose</Text>
              <View style={styles.doseCount}>
                <Pressable onPress={() => setDoseCount(doseCount - 1)}>
                  <AntDesign name="minussquareo" size={38} color="black" />
                </Pressable>
                <Text style={styles.count}>{doseCount}</Text>
                <Pressable onPress={() => setDoseCount(doseCount + 1)}>
                  <AntDesign name="plussquareo" size={38} color="black" />
                </Pressable>
              </View>
            </View>

            <Pressable
              style={styles.alarmContainer}
              onPress={deleteAlarmHandler}
            >
              <Text style={styles.alarmText}>Delete Alarm</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Pressable onPress={pressHandler} style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.textStyleTime}>{timeSelected}</Text>
          <Text style={styles.textPill}>Take {doseCount} pills</Text>
        </View>

        <View style={styles.valueContainer}>
          <AntDesign name={iconName} size={iconSize} color="black" />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textTransform: "uppercase",
    color: "black",
    marginBottom: 8,
    marginHorizontal: 10,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#D3D3D3",
    paddingVertical: 10,
    paddingRight: 10,
    height: 50,
  },
  valueContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  value: {
    color: "black",
    fontSize: 16,
    marginHorizontal: 8,
  },
  textContainer: {
    // flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "blue",
    fontSize: 20,
    // marginBottom: 2,
    // borderWidth: 2,
    // borderColor: "black",
  },
  textPill: {
    paddingLeft: 15,
    fontSize: 16,
    // borderWidth: 2,
    // borderColor: "black",
  },
  textStyleTime: {
    fontSize: 26,
    textAlign: "center",
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
    justifyContent: "space-between",
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
    // marginBottom: 40,
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
  doseCount: {
    // width: "70%",
    width: 350,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: "#90EE90",
    paddingVertical: 10,

    // borderWidth: 2,
    // borderColor: "black",
  },
  count: {
    fontSize: 26,
    textDecorationLine: "underline",
    textAlign: "center",
    width: 30,
    // borderWidth: 2,
    // borderColor: "black",
  },
  doseText: {
    fontSize: 18,
    marginBottom: 5,
    paddingLeft: 13,
  },
  alarmContainer: {
    width: 350,
    backgroundColor: "#C0C0C0",
    paddingVertical: 10,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    // borderWidth: 2,
    // borderColor: "black",
  },
  alarmText: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    color: "#8B0000",
  },
});

export default ModalTimePicker;
