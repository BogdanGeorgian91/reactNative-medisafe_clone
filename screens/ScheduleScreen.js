import React, { useContext, useLayoutEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  FlatList,
  ScrollView,
} from "react-native";
import Input from "../components/Input";
import HeaderButton from "../components/HeaderButton";
import ModalPickerPerDay from "../components/ModalPickerPerDay";
import ModalPickerFrequency from "../components/ModalPickerFrequency";
import ModalTimePicker, { uniqueHours } from "../components/ModalTimePicker";
import {
  uniqueHoursSelected,
  newTimesArr,
} from "../components/ModalTimePicker";
import ModalStartDatePicker from "../components/ModalStartDatePicker";
import ModalEndDatePicker from "../components/ModalEndDatePicker";
import ModalHowOften from "../components/ModalHowOften";

import FullHeightScrollView from "../components/FullHeightScrollView";

import { startDateValue } from "../components/ModalStartDatePicker";
import { endDateValue } from "../components/ModalEndDatePicker";
// console.log(startDateValue);
// console.log(endDateValue);

import DaysList from "../components/DaysList";
import { MedContext } from "../state-management/context";

export let hoursArray = [];
export let uniqueHoursArray = [];

const ScheduleScreen = ({ navigation }) => {
  const medCtx = useContext(MedContext);
  // console.log(MedContext);
  // console.log(MedContext.dates[1]);

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
      // headerLeft: () => (
      //   <HeaderButton onPress={() => navigation.goBack()} active={true}>
      //     Cancel
      //   </HeaderButton>
      // ),
    });
  }, [navigation]);

  // console.log(uniqueHoursSelected);
  // console.log(newTimesArr);
  let numberTimesPerDay;

  if (medCtx.timesAday.id == 24) {
    numberTimesPerDay = 24 - 11;
  } else {
    numberTimesPerDay = medCtx.timesAday.id;
  }

  // let array = [];
  // array.push(numberTimesPerDay);
  // array.length = numberTimesPerDay;
  // console.log(numberTimesPerDay);

  let content = (
    <View value={{ startDateValue, endDateValue }} style={styles.rootContainer}>
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

        {/* {console.log(typeof medCtx.allHours[0].values)} */}

        {/* {[...Array(numberTimesPerDay)].map((e, i) => {
          return (
            <View style={styles.timeContainer} key={i}>
              <ModalTimePicker
                iconName="arrowright"
                iconSize={24}
                iconColor="black"
                value={medCtx.allHours[numberTimesPerDay - 1].values}
              ></ModalTimePicker>
            </View>
          );
        })} */}

        {medCtx.allHours[numberTimesPerDay - 1].values.map((e, i) => {
          {
            /* console.log(e); */
          }

          hoursArray.push(e);
          {
            /* console.log(hoursArray); */
          }
          uniqueHoursArray = [...new Set(hoursArray)];
          {/* console.log(uniqueHoursArray); */}

          {
            /* console.log(uniqueHours); */
          }
          {
            /* console.log(newTimesArr); */
          }

          {
            /* if (
            hoursArray[hoursArray.length - 1] ==
            uniqueHours[uniqueHours.length - 1]
          ) {
            e = newTimesArr[i];
            hoursArray.push(e);
          } */
          }

          {
            /* for (let i = 0; i < hoursArray.length; i++) {
            e = newTimesArr[i];
            console.log(e);
            hoursArray[i] = newTimesArr[i];

            for (let j = 1; j < hoursArray.length; j++) {
              let regex = new RegExp(":", "g");
              let timeStr1 = `${hoursArray[i]}:00`;
              let timeStr2 = `${hoursArray[j]}:00`;

              if (
                parseInt(timeStr1.replace(regex, ""), 10) <
                parseInt(timeStr2.replace(regex, ""), 10)
              ) {
                hoursArray.unshift(hoursArray[i]);
              }
            }
          } */
          }

          {
            /* console.log(hoursArray); */
          }
          {/* console.log(uniqueHoursArray); */}

          return (
            <View style={styles.timeContainer} key={i}>
              <ModalTimePicker
                iconName="arrowright"
                iconSize={24}
                iconColor="black"
                // ranOnce={}
                value={e}
              ></ModalTimePicker>
            </View>
          );
        })}
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
          <View style={styles.timeContainer}>
            {[...Array(numberTimesPerDay)].map((e, i) => {
              return (
                <View style={styles.timeContainer} key={i}>
                  <ModalTimePicker
                    iconName="arrowright"
                    iconSize={24}
                    iconColor="black"
                  ></ModalTimePicker>
                </View>
              );
            })}
          </View>
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
      <View
        value={{ startDateValue, endDateValue }}
        style={styles.rootContainer}
      >
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

          {[...Array(numberTimesPerDay)].map((e, i) => {
            return (
              <View style={styles.timeContainer} key={i}>
                <ModalTimePicker
                  iconName="arrowright"
                  iconSize={24}
                  iconColor="black"
                ></ModalTimePicker>
              </View>
            );
          })}
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
    // paddingVertical: 0,
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
});

export default ScheduleScreen;