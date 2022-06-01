import React, { useState, useContext } from "react";
import { View, Text, Pressable, Modal, Alert, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MedContext } from "../state-management/context";
import { Picker } from "@react-native-picker/picker";

const ModalPickerFrequency = ({
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

  const selectFrequencyHandler = (id) => {
    console.log("selectFrequencyHANDLER");
    medCtx.addFrequency(id);
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

              <Text style={styles.modalText}>Frequency</Text>

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
              // onPress={onPress}
              style={styles.pickerContainer}
            >
              <Picker
                selectedValue={medCtx.frequency.id}
                onValueChange={(itemValue) => {
                  console.log(itemValue);
                  selectFrequencyHandler(itemValue);
                }}
                mode="dropdown"
                dropdownIconColor="blue"
                dropdownIconRippleColor="yellow"
              >
                <Picker.Item
                  label="Every Day"
                  value={medCtx.allFrequencies[1].id}
                />

                <Picker.Item
                  label="As Needed"
                  value={medCtx.allFrequencies[0].id}
                />

                <Picker.Item
                  label="Specific Days"
                  value={medCtx.allFrequencies[2].id}
                />
                <Picker.Item
                  label="Days Interval"
                  value={medCtx.allFrequencies[3].id}
                />
              </Picker>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Pressable onPress={pressHandler} style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{children}</Text>
        </View>

        <View style={styles.valueContainer}>
          <Text style={styles.value}>{value}</Text>
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
  pickerContainer: {
    backgroundColor: "#90EE90",
    width: 200,
    borderRadius: 20,
    // borderWidth: 2,
    // borderColor: "black",
  },
});

export default ModalPickerFrequency;
