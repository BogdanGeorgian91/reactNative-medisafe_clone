import React, { useState, useContext } from "react";
import { View, Text, Pressable, Modal, Alert, StyleSheet } from "react-native";
import { MedContext } from "../state-management/context";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";

const ModalEndDatePicker = () => {
  const medCtx = useContext(MedContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    medCtx.addEndDate(moment(date).format("DD-MMM-YYYY"));
    hideDatePicker();
  };

  const pressHandler = () => {
    setModalVisible(true);
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

            <Pressable style={styles.pickerContainer}>
              <Pressable onPress={showDatePicker}>
                <Text style={styles.textStyleTime}>{medCtx.endDate.value}</Text>
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
          <Text style={styles.text}>{medCtx.endDate.value}</Text>
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
  text: {
    color: "blue",
    fontSize: 19,
    marginRight: 5,
  },
  textPill: {
    paddingLeft: 15,
    fontSize: 16,
  },
  textStyleTime: {
    fontSize: 26,
    textAlign: "center",
  },

  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalView: {
    width: "90%",
    height: "45%",
    marginBottom: 20,
    backgroundColor: "#D3D3D3",
    borderRadius: 20,
    paddingTop: 5,
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
  },
  button: {
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
    fontSize: 16,
  },
  modalText: {
    fontSize: 21,
  },
  pickerContainer: {
    backgroundColor: "#90EE90",
    borderRadius: 20,
    width: 200,
  },
});

export default ModalEndDatePicker;
