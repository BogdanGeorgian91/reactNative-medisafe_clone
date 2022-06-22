import React, { useContext, useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import HeaderButton from "../components/HeaderButton";
import ModalPickerPerDay from "../components/ModalPickerPerDay";
import ModalPickerFrequency from "../components/ModalPickerFrequency";
import ModalTimePicker from "../components/ModalTimePicker";
import ModalStartDatePicker from "../components/ModalStartDatePicker";
import ModalEndDatePicker from "../components/ModalEndDatePicker";
import ModalHowOften from "../components/ModalHowOften";
import FullHeightScrollView from "../components/FullHeightScrollView";
import DaysList from "../components/DaysList";

import moment from "moment";
import { MedContext } from "../state-management/context";

const ScheduleScreen = ({ navigation }) => {
  const medCtx = useContext(MedContext);
  const [showEndDate, setShowEndDate] = useState(false);
  const [showModalChild, setShowModalChild] = useState(true);

  console.log("FUCKING RE-RENDERED");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButton
          // active={formIsValid}
          onPress={() => {
            navigation.navigate("Detail");
          }}
        >
          Next
        </HeaderButton>
      ),
      headerLeft: () => (
        <HeaderButton onPress={() => navigation.navigate("AddMedicine")}>
          Cancel
        </HeaderButton>
      ),
    });
  }, [navigation]);

  let numberTimesPerDay;
  if (medCtx.timesAday.id == 24) {
    numberTimesPerDay = 24 - 11;
  } else {
    numberTimesPerDay = medCtx.timesAday.id;
  }

  let startDateSelected = moment(medCtx.startDate.value).format("DD-MM-YYYY");
  let startDateVal;
  let firstPartStart = startDateSelected.slice(0, 2);
  let secondPartStart = startDateSelected.slice(3, 5);
  let thirdPartStart = startDateSelected.slice(6, 10);
  startDateVal = `${thirdPartStart}-${secondPartStart}-${firstPartStart}`;

  let endDateSelected = moment(medCtx.endDate.value).format("DD-MM-YYYY");
  let endDateVal;
  let firstPartEnd = endDateSelected.slice(0, 2);
  let secondPartEnd = endDateSelected.slice(3, 5);
  let thirdPartEnd = endDateSelected.slice(6, 10);
  endDateVal = `${thirdPartEnd}-${secondPartEnd}-${firstPartEnd}`;

  let diffInMs = new Date(endDateVal) - new Date(startDateVal);
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
  // console.log(diffInDays);

  let endDateContent = (
    <Pressable
      style={styles.endDateContent}
      onPress={() => {
        setShowEndDate(true);
        // setShowModalChild(false);
      }}
    >
      <Text style={styles.endDateContentOne}>Tap to set</Text>
      <Text style={styles.endDateContentTwo}>end date.</Text>
    </Pressable>
  );

  let newDateContent = (
    <View style={styles.endDateContainer}>
      <ModalEndDatePicker
        daysDifference={diffInDays}
        modalShown={showModalChild ? true : false}
      />
    </View>
  );

  let content = (
    <View style={styles.rootContainer}>
      <View style={styles.container}>
        <ModalPickerFrequency
          iconName="arrowright"
          iconSize={24}
          iconColor="black"
          value={medCtx.frequency.value}
        >
          Frequency
        </ModalPickerFrequency>
      </View>

      <View style={styles.timesAdaycontainer}>
        <Text style={styles.textHeader}>HOW MANY TIMES A DAY?</Text>
        <View style={styles.container}>
          <ModalPickerPerDay
            iconName="arrowright"
            iconSize={24}
            iconColor="black"
            value={medCtx.timesAday.value}
          ></ModalPickerPerDay>
        </View>
      </View>

      <View style={styles.rootTimeContainer}>
        <Text style={styles.textHeaderTime}>SET TIME AND DOSE</Text>

        <FlatList
          data={medCtx.allHours}
          keyExtractor={(item) =>
            new Date().toString() + Math.random().toString()
          }
          renderItem={(itemData) => {
            // console.log(itemData);

            return (
              <ModalTimePicker
                iconName="arrowright"
                iconSize={24}
                iconColor="black"
                value={itemData.item.time}
                valueDose={itemData.item.dosage}
              ></ModalTimePicker>
            );
          }}
        />
      </View>

      <View style={styles.startEndContainer}>
        <View style={styles.dateRootContainer}>
          <View style={styles.dateContainer}>
            <Text style={styles.dateText}>Starts</Text>
            <ModalStartDatePicker />
          </View>

          {/* {showEndDate ? newDateContent : endDateContent} */}

          <View style={styles.endDateContainer}>
            {/* <Text style={styles.dateText}>Ends</Text> */}
            <ModalEndDatePicker daysDifference={diffInDays} />
            {/* <Text>({diffInDays} days)</Text> */}
          </View>
        </View>
      </View>
    </View>
  );
  //   ###########################################
  // ########### AS NEEDED ############################
  if (medCtx.frequency.value == "As Needed") {
    content = (
      <View>
        <View style={styles.asNeededContainer}>
          <ModalPickerFrequency
            iconName="arrowright"
            iconSize={24}
            iconColor="black"
            value={medCtx.frequency.value}
          >
            Frequency
          </ModalPickerFrequency>
        </View>

        <View style={styles.noRemindersContainer}>
          <Text style={styles.noRemindersText}>
            No reminders. To add reminders, change the "as needed" to one of the
            other options
          </Text>
        </View>
      </View>
    );
  }
  // ########### END AS NEEDED ############################
  //   ###########################################

  //   ###########################################
  // ########### SPECIFIC DAYS ############################
  if (medCtx.frequency.value == "Specific Days") {
    content = (
      <View>
        <View style={styles.container}>
          <ModalPickerFrequency
            iconName="arrowright"
            iconSize={24}
            iconColor="black"
            value={medCtx.frequency.value}
          >
            Frequency
          </ModalPickerFrequency>
        </View>

        <View style={styles.timesAdaycontainer}>
          <Text style={styles.textHeader}>HOW MANY TIMES A DAY?</Text>
          <View style={styles.container}>
            <ModalPickerPerDay
              iconName="arrowright"
              iconSize={24}
              iconColor="black"
              value={medCtx.timesAday.value}
            ></ModalPickerPerDay>
          </View>
        </View>

        <View style={styles.rootTimeContainer}>
          <Text style={styles.textHeaderTime}>SET TIME AND DOSE</Text>
          <FlatList
            data={medCtx.allHours}
            keyExtractor={(item) =>
              new Date().toString() + Math.random().toString()
            }
            renderItem={(itemData) => {
              // console.log(itemData);

              return (
                <ModalTimePicker
                  iconName="arrowright"
                  iconSize={24}
                  iconColor="black"
                  value={itemData.item.time}
                  valueDose={itemData.item.dosage}
                ></ModalTimePicker>
              );
            }}
          />
        </View>

        <View style={styles.daysList}>
          <Text style={styles.textHeader}>WHICH DAYS?</Text>
          <DaysList />
        </View>

        <View>
          <View style={styles.dateRootContainer}>
            <View style={styles.dateContainer}>
              <Text style={styles.dateText}>Starts</Text>
              <ModalStartDatePicker />
            </View>

            <View style={styles.endDateContainer}>
              <Text style={styles.dateText}>Ends</Text>
              <ModalEndDatePicker />
              <Text>({diffInDays} days)</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
  // ########### END SPECIFIC DAYS ############################
  //   ###########################################

  //   ###########################################
  // ########### DAYS INTERVAL ############################
  if (medCtx.frequency.value == "Days Interval") {
    content = (
      <View style={styles.rootContainer}>
        <View style={styles.container}>
          <ModalPickerFrequency
            iconName="arrowright"
            iconSize={24}
            iconColor="black"
            value={medCtx.frequency.value}
          >
            Frequency
          </ModalPickerFrequency>
        </View>

        <View style={styles.container}>
          <ModalHowOften
            iconName="arrowright"
            iconSize={24}
            iconColor="black"
            value={medCtx.everyDays.value}
          >
            Every
          </ModalHowOften>
        </View>

        <View style={styles.timesAdaycontainer}>
          <Text style={styles.textHeader}>HOW MANY TIMES A DAY?</Text>
          <View style={styles.container}>
            <ModalPickerPerDay
              iconName="arrowright"
              iconSize={24}
              iconColor="black"
              value={medCtx.timesAday.value}
            ></ModalPickerPerDay>
          </View>
        </View>

        <View style={styles.rootTimeContainer}>
          <Text style={styles.textHeaderTime}>SET TIME AND DOSE</Text>

          <FlatList
            data={medCtx.allHours}
            keyExtractor={(item) =>
              new Date().toString() + Math.random().toString()
            }
            renderItem={(itemData) => {
              // console.log(itemData);

              return (
                <ModalTimePicker
                  iconName="arrowright"
                  iconSize={24}
                  iconColor="black"
                  value={itemData.item.time}
                  valueDose={itemData.item.dosage}
                ></ModalTimePicker>
              );
            }}
          />
        </View>

        <View style={styles.startEndContainer}>
          <View style={styles.dateRootContainer}>
            <View style={styles.dateContainer}>
              <Text style={styles.dateText}>Starts</Text>
              <ModalStartDatePicker />
            </View>

            <View style={styles.endDateContainer}>
              <Text style={styles.dateText}>Ends</Text>
              <ModalEndDatePicker />
              <Text>({diffInDays} days)</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
  // ########### END DAYS INTERVAL ############################
  //   ###########################################
  return (
    <FullHeightScrollView style={styles.rootContainer}>
      {content}
    </FullHeightScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: "#fff",
    flex: 1,
  },
  container: {
    paddingVertical: 10,
  },
  asNeededContainer: {
    marginBottom: -10,
  },
  noRemindersContainer: {
    marginTop: 15,
    paddingLeft: 20,
  },
  noRemindersText: {
    fontSize: 16,
  },
  textHeader: {
    paddingLeft: 20,
    fontSize: 16,
  },
  dateRootContainer: {
    // borderWidth: 2,
    // borderColor: "black",
  },
  dateContainer: {
    // borderWidth: 2,
    // borderColor: "black",
    paddingLeft: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  endDateContainer: {
    paddingLeft: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  calculationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  calculationText: {
    fontSize: 16,
    marginLeft: 8,
  },
  dateText: {
    fontSize: 19,
    marginRight: 7,
  },
  daysList: {
    marginBottom: 10,
  },
  rootTimeContainer: {
    marginBottom: 10,
  },
  timeContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  textHeaderTime: {
    marginBottom: 10,
    paddingLeft: 20,
    fontSize: 16,
  },
  startEndContainer: {
    marginBottom: 15,
  },
  endDateContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  endDateContentOne: {
    marginRight: 4,
    fontSize: 19,
  },
  endDateContentTwo: {
    fontSize: 19,
    color: "blue",
  },
  endDateContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  dateText: {
    fontSize: 19,
    marginRight: 7,
  },
});

export default ScheduleScreen;
