import React from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";


const Input = ({
  placeholder,
  placeholderTextColor,
  title,
  iconName,
  iconName2,
  iconSize,
  iconColor,
  label,
  value,
  keyboardType,
  onChangeText,
  onEndEditing,
}) => {
  const inputChangeHandler = (enteredValue) => {
    onChangeText(enteredValue);
  };

  const inputEndEditingHandler = () => {
    onEndEditing();
  };

  return (
    <View>
      {title && <Text style={styles.title}>{title}</Text>}
      <View style={styles.container}>
        {iconName ? (
          <Fontisto name={iconName} size={iconSize} color={iconColor} />
        ) : (
          <Text style={styles.label}>{label}</Text>
        )}

        <View style={styles.inputContainer}>
          <TextInput
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            style={styles.input}
            value={value}
            keyboardType={keyboardType}
            onChangeText={inputChangeHandler}
            onEndEditing={inputEndEditingHandler}
          />
        </View>
        {iconName2 ? (
          <AntDesign name={iconName2} size={iconSize} color="black" />
        ) : (
          <AntDesign name={iconName2} size={iconSize} color="black" />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#D3D3D3",
    paddingVertical: 8,
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  inputContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  input: {
    fontSize: 18,
    color: "black",
    // borderColor: "black",
    // borderWidth: 2,
  },
  title: {
    textTransform: "uppercase",
    color: "black",
    marginBottom: 3,
    marginHorizontal: 5,
  },
  label: {
    color: "black",
    fontSize: 18,
    alignSelf: "flex-end",
  },
});

export default Input;
