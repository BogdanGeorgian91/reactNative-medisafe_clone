import React, { useState, useContext } from "react";
import { View, Text, Pressable, Modal, Alert, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MedContext } from "../state-management/context";
import { Picker } from "@react-native-picker/picker";

const ModalHowOften = ({
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
    console.log("selectHowOftenEVERYDAYSHANDLER");
    medCtx.addHowOftenEveryDays(id);
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

              <Text style={styles.modalText}>How Often?</Text>

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
              <View>
                <Text style={styles.daysEvery}>Every</Text>
              </View>

              <Pressable
                // style={[styles.button, styles.buttonClose]}
                // onPress={() => setModalVisible(!modalVisible)}
                onPress={onPress}
                style={styles.pickerContainer}
              >
                <Picker
                  selectedValue={medCtx.everyDays.id}
                  onValueChange={(itemValue) =>
                    selectHowOftenHandler(itemValue)
                  }
                  mode="dropdown"
                  dropdownIconColor="blue"
                  dropdownIconRippleColor="yellow"
                >
                  <Picker.Item
                    label="2"
                    value={medCtx.allHowOftenEveryDaysValues[0].id}
                  />
                  <Picker.Item
                    label="3"
                    value={medCtx.allHowOftenEveryDaysValues[1].id}
                  />
                  <Picker.Item
                    label="4"
                    value={medCtx.allHowOftenEveryDaysValues[2].id}
                  />
                  <Picker.Item
                    label="5"
                    value={medCtx.allHowOftenEveryDaysValues[3].id}
                  />
                  <Picker.Item
                    label="6"
                    value={medCtx.allHowOftenEveryDaysValues[4].id}
                  />
                  <Picker.Item
                    label="7"
                    value={medCtx.allHowOftenEveryDaysValues[5].id}
                  />
                  <Picker.Item
                    label="8"
                    value={medCtx.allHowOftenEveryDaysValues[6].id}
                  />
                  <Picker.Item
                    label="9"
                    value={medCtx.allHowOftenEveryDaysValues[7].id}
                  />
                  <Picker.Item
                    label="10"
                    value={medCtx.allHowOftenEveryDaysValues[8].id}
                  />
                  <Picker.Item
                    label="11"
                    value={medCtx.allHowOftenEveryDaysValues[9].id}
                  />
                  <Picker.Item
                    label="12"
                    value={medCtx.allHowOftenEveryDaysValues[10].id}
                  />
                  <Picker.Item
                    label="13"
                    value={medCtx.allHowOftenEveryDaysValues[11].id}
                  />
                  <Picker.Item
                    label="14"
                    value={medCtx.allHowOftenEveryDaysValues[12].id}
                  />
                  <Picker.Item
                    label="15"
                    value={medCtx.allHowOftenEveryDaysValues[13].id}
                  />
                  <Picker.Item
                    label="16"
                    value={medCtx.allHowOftenEveryDaysValues[14].id}
                  />
                  <Picker.Item
                    label="17"
                    value={medCtx.allHowOftenEveryDaysValues[15].id}
                  />
                  <Picker.Item
                    label="18"
                    value={medCtx.allHowOftenEveryDaysValues[16].id}
                  />
                  <Picker.Item
                    label="19"
                    value={medCtx.allHowOftenEveryDaysValues[17].id}
                  />
                  <Picker.Item
                    label="20"
                    value={medCtx.allHowOftenEveryDaysValues[18].id}
                  />
                  <Picker.Item
                    label="21"
                    value={medCtx.allHowOftenEveryDaysValues[19].id}
                  />
                  <Picker.Item
                    label="22"
                    value={medCtx.allHowOftenEveryDaysValues[20].id}
                  />
                  <Picker.Item
                    label="23"
                    value={medCtx.allHowOftenEveryDaysValues[21].id}
                  />
                  <Picker.Item
                    label="24"
                    value={medCtx.allHowOftenEveryDaysValues[22].id}
                  />
                  <Picker.Item
                    label="25"
                    value={medCtx.allHowOftenEveryDaysValues[23].id}
                  />
                  <Picker.Item
                    label="26"
                    value={medCtx.allHowOftenEveryDaysValues[24].id}
                  />
                  <Picker.Item
                    label="27"
                    value={medCtx.allHowOftenEveryDaysValues[25].id}
                  />
                  <Picker.Item
                    label="28"
                    value={medCtx.allHowOftenEveryDaysValues[26].id}
                  />
                  <Picker.Item
                    label="29"
                    value={medCtx.allHowOftenEveryDaysValues[27].id}
                  />
                  <Picker.Item
                    label="30"
                    value={medCtx.allHowOftenEveryDaysValues[28].id}
                  />
                </Picker>
              </Pressable>

              <View>
                <Text style={styles.daysEvery}>Days</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      <Pressable onPress={pressHandler} style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{children}</Text>
        </View>

        <View style={styles.valueContainer}>
          <Text style={styles.value}>{value} days</Text>
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
    marginHorizontal: 25,
    borderRadius: 20,
    // borderWidth: 2,
    // borderColor: "black",
  },
  daysEvery: {
    fontSize: 22,
  },
 
});

export default ModalHowOften;
