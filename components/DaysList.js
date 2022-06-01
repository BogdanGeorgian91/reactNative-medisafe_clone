import React, { useContext, useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MedContext } from "../state-management/context";

const DayItem = ({ day, onPress, onPressOut, isSelected }) => {
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
    <Pressable
      style={styles.textContainer}
      onPress={onPress}
      onPressOut={onPressOut}
    >
      <View style={styles.iconContainer}>
        <Text style={styles.text}>{day}</Text>

        {/* <MaterialCommunityIcons name="check" size={24} color="black" /> */}
      </View>
    </Pressable>
  );
};

const DaysList = () => {
  const medCtx = useContext(MedContext);
  // const [selectedDays, setSelectedDays] = useState(medCtx.allDays);

  const chooseDayHandler = (id) => {
    medCtx.addDaysList(id);
  };

  // const handlePressOut = (day) => {
  //   console.log("ENTERED HANDLEPRESSOUT")
  //   const newItem = selectedDays.map((val) => {
  //     if (val.id == day.id) {
  //       return {
  //         ...val,
  //         selected: true,
  //       };
  //     } else {
  //       return {
  //         ...val,
  //         selected: false,
  //       };
  //     }
  //   });
  //   setSelectedDays(newItem);
  // };

  // console.log(selectedDays);

  const renderItem = ({ item, index }) => {
    return (
      <DayItem
        onPress={chooseDayHandler.bind(this, itemData.item.id)}
        // onPressOut={() => {
        //   console.log(itemData);
        //   handlePressOut(itemData.item);
        // }}
        day={itemData.item.name}
        isSelected={itemData.item.id === medCtx.days.value}
        // isSelected={itemData.item.selected == medCtx.days.value}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={medCtx.allDays}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <DayItem
            onPress={chooseDayHandler.bind(this, itemData.item.id)}
            // onPressOut={() => {
            //   console.log(itemData);
            //   handlePressOut(itemData.item);
            // }}
            day={itemData.item.name}
            isSelected={itemData.item.id === medCtx.days.value}
          />
        )}
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
