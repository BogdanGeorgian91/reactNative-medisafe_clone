import React, { useState, useContext } from "react";
import { View, Text, Pressable, Modal, Alert, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MedContext } from "../state-management/context";
import { Picker } from "@react-native-picker/picker";

const ModalPickerPerDay = ({
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

  const selectHowOftenHandler = (id) => {
    // console.log("selectHowOftenHANDLER");
    medCtx.addHowOftenPerDay(id);
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

              <Text style={styles.modalText}>Times a Day</Text>

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Done</Text>
              </Pressable>
            </View>

            <View style={styles.rootPickerContainer}>
              <Pressable
                // style={[styles.button, styles.buttonClose]}
                // onPress={() => setModalVisible(!modalVisible)}
                onPress={onPress}
                style={styles.pickerContainer}
              >
                <Picker
                  selectedValue={medCtx.timesAday.id}
                  onValueChange={(itemValue) =>
                    selectHowOftenHandler(itemValue)
                  }
                  mode="dropdown"
                  dropdownIconColor="blue"
                  dropdownIconRippleColor="yellow"
                >
                  <Picker.Item
                    label="1"
                    value={medCtx.allHowOftenPerDayValues[0].id}
                  />
                  <Picker.Item
                    label="2"
                    value={medCtx.allHowOftenPerDayValues[1].id}
                  />
                  <Picker.Item
                    label="3"
                    value={medCtx.allHowOftenPerDayValues[2].id}
                  />
                  <Picker.Item
                    label="4"
                    value={medCtx.allHowOftenPerDayValues[3].id}
                  />
                  <Picker.Item
                    label="5"
                    value={medCtx.allHowOftenPerDayValues[4].id}
                  />
                  <Picker.Item
                    label="6"
                    value={medCtx.allHowOftenPerDayValues[5].id}
                  />
                  <Picker.Item
                    label="7"
                    value={medCtx.allHowOftenPerDayValues[6].id}
                  />
                  <Picker.Item
                    label="8"
                    value={medCtx.allHowOftenPerDayValues[7].id}
                  />
                  <Picker.Item
                    label="9"
                    value={medCtx.allHowOftenPerDayValues[8].id}
                  />
                  <Picker.Item
                    label="10"
                    value={medCtx.allHowOftenPerDayValues[9].id}
                  />
                  <Picker.Item
                    label="11"
                    value={medCtx.allHowOftenPerDayValues[10].id}
                  />
                  <Picker.Item
                    label="12"
                    value={medCtx.allHowOftenPerDayValues[11].id}
                  />
                  <Picker.Item
                    label="24"
                    value={medCtx.allHowOftenPerDayValues[12].id}
                  />
                </Picker>
              </Pressable>

              <View>
                <Text style={styles.timeDayText}>times a day</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      <Pressable onPress={pressHandler} style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{value}</Text>
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
    paddingHorizontal: 10,
    marginBottom: 5,
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
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    marginHorizontal: 10,
    color: "blue",
    fontSize: 18,
  },

  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: "90%",
    height: "45%",
    margin: 20,
    backgroundColor: "#D3D3D3",
    borderRadius: 20,
    // paddingHorizontal: 15,
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
    width: "100%",
    width: 350,
    // borderWidth: 2,
    // borderColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 40,
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
  rootPickerContainer: {
    // width: "100%",
    flexDirection: "row",
    alignItems: "center",
    // borderWidth: 2,
    // borderColor: "black",
  },
  pickerContainer: {
    backgroundColor: "#90EE90",
    width: 100,
    marginRight: 10,
    borderRadius: 20,
    // borderWidth: 2,
    // borderColor: "black",
  },
  timeDayText: {
    fontSize: 18,
  },
});

export default ModalPickerPerDay;
