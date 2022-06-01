import React, { useState, useContext } from "react";
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
import { startDateValue } from "./ModalStartDatePicker";
import moment from "moment";

let endDateValue;

const ModalEndDatePicker = ({
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
  const [dateSelected, setDateSelected] = useState(
    // new Date().toLocaleString("en-uk", {
    //   month: "long",
    //   year: "numeric",
    //   day: "numeric",
    // })
    moment().format("DD-MM-YYYY")
  );

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    // console.warn("A date has been picked: ", date);
    setDateSelected(
      // date.toLocaleString("en-uk", {
      //   month: "long",
      //   year: "numeric",
      //   day: "numeric",
      // })
      moment(date).format("DD-MM-YYYY")
    );

    medCtx.addEndDate(
      // parseInt(
      //   date
      //     .toLocaleString("en-uk", {
      //       month: "long",
      //       year: "numeric",
      //       day: "numeric",
      //     })
      //     .slice(0, 2)
      // )
      moment(date).format("DD-MMM-YYYY")
    );

    hideDatePicker();
  };

  const pressHandler = () => {
    setModalVisible(true);
  };

  // console.log(startDateValue);
  // endDateValue = parseInt(dateSelected.slice(0, 2));
  // endDateValue = dateSelected;
  let firstPart = dateSelected.slice(0, 2);
  let secondPart = dateSelected.slice(3, 5);
  let thirdPart = dateSelected.slice(6, 10);
  endDateValue = `${thirdPart}-${secondPart}-${firstPart}`;
  // console.log(endDateValue);

  let diffInMs = new Date(endDateValue) - new Date(startDateValue);
  // console.log(diffInMs);
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
  // console.log(diffInDays);

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
              <Pressable
                style={[styles.button]}
                onPress={() => setModalVisible(!modalVisible)}
              >
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
              // style={[styles.button, styles.buttonClose]}
              // onPress={() => setModalVisible(!modalVisible)}
              //   onPress={showDatePicker}
              style={styles.pickerContainer}
            >
              <Pressable onPress={showDatePicker}>
                <Text style={styles.textStyleTime}>{dateSelected}</Text>
              </Pressable>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
            </Pressable>
          </View>
        </View>
      </Modal>

      <Pressable onPress={pressHandler} style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            {dateSelected} ({diffInDays} days)
          </Text>
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
    // flexDirection: "row",
    // justifyContent: "space-between",
    // alignItems: "center",
    // backgroundColor: "#D3D3D3",
    // paddingVertical: 10,
    // paddingRight: 10,
    // paddingHorizontal: 10,
    // marginBottom: 5,
  },
  //   valueContainer: {
  //     flexDirection: "row",
  //     alignItems: "center",
  //   },
  //   value: {
  //     color: "black",
  //     fontSize: 16,
  //     marginHorizontal: 8,
  //   },
  textContainer: {
    // flexDirection: "row",
    // alignItems: "center",
  },
  text: {
    // marginHorizontal: 10,
    color: "blue",
    fontSize: 19,
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
    // justifyContent: "space-evenly",
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
    width: 200,
    // borderWidth: 2,
    // borderColor: "black",
  },
});

export { endDateValue };
export default ModalEndDatePicker;
