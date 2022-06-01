import React, { useState, useContext } from "react";
import { View, Text, Pressable, Modal, Alert, StyleSheet } from "react-native";
import Input from "../components/Input";
import ConditionList from "../components/ConditionList";

import { AntDesign } from "@expo/vector-icons";
import { MedContext } from "../state-management/context";
import { Picker } from "@react-native-picker/picker";

const ModalPickerCondition = ({
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
  const [selectOption, setSelectOption] = useState(medCtx.condition.value);

  const inputChangeHandler = (inputValue) => {
    console.log("working");
    medCtx.addCondition(inputValue);
  };

  const inputEndEditingHandler = () => {
    console.log("working2");
    medCtx.checkCondition();
  };

  const selectConditionHandler = (id, text) => {
    console.log("working3");
    medCtx.chooseCondition(id, text);
    setModalVisible(false);
  };

  const pressHandler = () => {
    setModalVisible(true);
  };

  let content;

  if (!medCtx.condition.IsValid) {
    // console.log("isValid");
    content = (
      <View style={styles.listContainer}>
        <ConditionList onPress={selectConditionHandler} />
      </View>
    );
  }

  let mainContent = (
    <View>
      <Pressable
        style={styles.cancelTextContainer}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <Text style={styles.cancelText}>Cancel</Text>
      </Pressable>

      <View style={styles.rootPickerContainer}>
        <View style={styles.inputContainer}>
          <Input
            placeholder="Search condition"
            // title="med info"
            iconName="zoom"
            iconSize={24}
            iconColor="black"
            value={medCtx.condition.value}
            onChangeText={inputChangeHandler}
            onEndEditing={inputEndEditingHandler}
          />
        </View>
      </View>
      {content}
    </View>
  );

  if (medCtx.condition.value.length > 4) {
    mainContent = (
      <View style={styles.conditionSelectedContainer}>
        <View style={styles.modalViewHeader}>
          <Pressable
            style={[styles.button]}
            onPress={() => {
              setSelectOption(value);
              setModalVisible(!modalVisible);
            }}
          >
            <Text style={styles.textStyle}>Cancel</Text>
          </Pressable>

          <Text style={styles.modalText}>Condition</Text>

          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => {
              setSelectOption(value);
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
            selectedValue={selectOption}
            onValueChange={(itemValue) => {
              console.log(itemValue);
              //   selectFrequencyHandler(itemValue);

              if (itemValue == value) {
                setSelectOption(value);
              }
              if (itemValue == "Other") {
                value = "";
                inputChangeHandler(value);
                setSelectOption(medCtx.condition.value);
                // setModalVisible(false);
              }
              if (itemValue == "Not Specified") {
                // inputChangeHandler(value);
                // setModalVisible(false);
                setSelectOption("Not Specified");
              }
            }}
            mode="dropdown"
            dropdownIconColor="blue"
            dropdownIconRippleColor="yellow"
          >
            <Picker.Item label={value} value={medCtx.condition.value} />
            <Picker.Item label="Other" value="Other" />
            <Picker.Item label="Not Specified" value="Not Specified" />
          </Picker>
        </Pressable>
      </View>
    );
  }
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
          <View style={styles.modalView}>{mainContent}</View>
        </View>
      </Modal>

      <Pressable onPress={pressHandler} style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Condition</Text>
          <Text style={styles.textValue}>{value}</Text>
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
    // flexDirection: "row",
    // alignItems: "center",
    paddingLeft: 10,
  },
  text: {
    // marginHorizontal: 10,
    color: "blue",
    fontSize: 18,
  },

  centeredView: {
    flex: 1,
    // height: "100%",
    // justifyContent: "stretch",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: "100%",
    height: "100%",
    flex: 1,

    margin: 20,
    backgroundColor: "#D3D3D3",
    // borderRadius: 20,
    // paddingHorizontal: 15,
    paddingTop: 5,
    alignItems: "center",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 5,
  },
  modalViewHeader: {
    // width: "100%",
    // width: 350,
    // borderWidth: 2,
    // borderColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 40,
    marginTop: 5,
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
    marginTop: 20,
    paddingLeft: 10,
    flexDirection: "row",
    alignItems: "center",
    // borderWidth: 2,
    // borderColor: "black",
  },
  inputContainer: {
    width: "100%",
    backgroundColor: "red",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "black",
    marginRight: 15,
  },
  cancelTextContainer: {
    marginTop: 10,
    // borderWidth: 2,
    // borderColor: "black",
  },
  cancelText: {
    fontSize: 18,
    borderRadius: 20,
    padding: 10,
    paddingHorizontal: 15,
    elevation: 2,
    backgroundColor: "#FF3131",
    color: "white",
  },
  listContainer: {
    height: "100%",
    // borderWidth: 2,
    // borderColor: "black",
    // alignSelf: "flex-start",
    // marginLeft: 20,
  },
  pickerContainer: {
    backgroundColor: "#90EE90",
    width: 280,
    marginRight: 10,
    borderRadius: 20,
    alignSelf: "center",
    // borderWidth: 2,
    // borderColor: "black",
  },
  timeDayText: {
    fontSize: 18,
  },
  conditionSelectedContainer: {
    width: 400,
  },
});

export default ModalPickerCondition;
