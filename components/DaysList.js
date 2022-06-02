import React, { useContext, useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MedContext } from "../state-management/context";

const DayItem = ({ day, onPress, isSelected }) => {
  if (isSelected) {
    return (
      <Pressable onPress={onPress} style={styles.textContainer}>
        <View style={styles.iconContainer}>
          <Text style={styles.text}>{day}</Text>
          <MaterialCommunityIcons name="check" size={24} color="black" />
        </View>
      </Pressable>
    );
  }

  return (
    <Pressable style={styles.textContainer} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Text style={styles.text}>{day}</Text>
        {/* <MaterialCommunityIcons name="check" size={24} color="black" /> */}
      </View>
    </Pressable>
  );
};

const DaysList = () => {
  const medCtx = useContext(MedContext);

  const chooseDayHandler = (id) => {
    medCtx.addDaysList(id);
    // console.log(id);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={medCtx.allDays}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => {
          // console.log(itemData);
          return (
            <DayItem
              onPress={chooseDayHandler.bind(this, itemData.item.id)}
              day={itemData.item.name}
              isSelected={itemData.item.selected}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: "#D3D3D3",
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  text: {
    color: "blue",
    paddingVertical: 10,
    paddingLeft: 10,
    fontSize: 18,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  container: {
    marginTop: 5,
  },
});

export default DaysList;
