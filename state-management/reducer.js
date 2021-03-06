import React from "react";
import moment from "moment";

const medReducer = (state, action) => {
  switch (action.type) {
    case "ADD_MED":
      const newMed = { ...state.med };
      newMed.value = action.payload;
      newMed.IsValid = false;
      let newAvailableMeds;
      if (!action.payload.length) {
        newAvailableMeds = [];
      } else {
        newAvailableMeds = state.allMeds.filter((med) =>
          med.name.toLowerCase().startsWith(action.payload.toLowerCase())
        );
      }

      return {
        ...state,
        availableMeds: newAvailableMeds,
        med: newMed,
      };

    case "ADD_DAYS":
      // console.log(action.payload);
      const updatedAllDays = [...state.allDays];
      let selectedDay = updatedAllDays.findIndex(
        (day) => day.id === action.payload.id
      );

      updatedAllDays[selectedDay].selected =
        !updatedAllDays[selectedDay].selected;

      return {
        ...state,
        allDays: updatedAllDays,
      };

    case "CHECK_MED":
      const medCopy = { ...state.med };
      const medValue = medCopy.value;
      const valueIsValid = medValue.length > 0;

      if (valueIsValid) {
        return {
          ...state,
          med: {
            id: new Date().toString() + Math.random().toString(),
            value: medValue,
            IsValid: valueIsValid,
          },
        };
      } else {
        return {
          ...state,
          med: {
            ...medCopy,
            IsValid: valueIsValid,
          },
        };
      }

    case "CHOOSE_MED":
      return {
        ...state,
        availableMeds: [],
        med: {
          id: action.payload.id,
          value: action.payload.value,
          IsValid: true,
        },
      };

    case "ADD_CONDITION":
      const newCondition = { ...state.condition };
      newCondition.value = action.payload;
      newCondition.IsValid = false;
      let newAvailableConditions;
      if (!action.payload.length) {
        newAvailableConditions = [];
      } else {
        newAvailableConditions = state.allConditions.filter((condition) =>
          condition.name.toLowerCase().startsWith(action.payload.toLowerCase())
        );
      }

      return {
        ...state,
        availableConditions: newAvailableConditions,
        condition: newCondition,
      };

    case "CHECK_CONDITION":
      const conditionCopy = { ...state.condition };
      const conditionValue = conditionCopy.value;
      const valIsValid = conditionValue.length > 0;

      if (valIsValid) {
        return {
          ...state,
          condition: {
            id: new Date().toString() + Math.random().toString(),
            value: conditionValue,
            IsValid: valIsValid,
          },
        };
      } else {
        return {
          ...state,
          condition: {
            ...conditionCopy,
            IsValid: valIsValid,
          },
        };
      }

    case "CHOOSE_CONDITION":
      return {
        ...state,
        availableConditions: [],
        condition: {
          id: action.payload.id,
          value: action.payload.value,
          IsValid: true,
        },
      };

    case "ADD_STRENGTH":
      return {
        ...state,
        strength: {
          value: action.payload,
          IsValid: !isNaN(action.payload) && action.payload > 0,
        },
      };

    case "ADD_NUM_PILLS":
      return {
        ...state,
        numOfPills: {
          value: action.payload,
          IsValid: !isNaN(action.payload) && action.payload > 0,
        },
      };

    case "ADD_UNITS":
      // console.log(action.payload);
      return {
        ...state,
        units: {
          value: action.payload,
          IsValid: true,
        },
      };

    case "ADD_FREQUENCY":
      const newValueArray = state.allFrequencies.filter(
        (item) => item.id == action.payload.id
      );
      // console.log(newValueArray);
      const newValue = newValueArray[0].value;
      // console.log(newValue);
      return {
        ...state,
        frequency: {
          id: action.payload.id,
          value: newValue,
        },
      };

    case "HOW_OFTEN":
      const newValArray = state.allHowOftenPerDayValues.filter(
        (item) => item.id == action.payload.id
      );
      const newVal = newValArray[0].value;
      return {
        ...state,
        timesAday: {
          id: action.payload.id,
          value: newVal,
        },
      };

    case "EVERY_DAYS":
      const newValuesArray = state.allHowOftenEveryDaysValues.filter(
        (item) => item.id == action.payload.id
      );
      const newEveryDays = newValuesArray[0].value;
      return {
        ...state,
        everyDays: {
          id: action.payload.id,
          value: newEveryDays,
        },
      };

    case "RETURN_START_DATE":
      console.log(action.payload);
      return {
        ...state,
        startDate: {
          value: action.payload,
        },
      };

    case "RETURN_END_DATE":
      console.log(action.payload);
      return {
        ...state,
        endDate: {
          value: action.payload,
        },
      };

    case "ADD_HOUR":
      // console.log(action.payload);
      // console.log(action.payload.values);
      // console.log(state.allHours);
      let hourToRemove = action.payload.values[0];
      let hourToAdd = action.payload.values[1];
      let doseNumber = action.payload.values[2];

      let newHoursArray = state.allHours.filter(
        (value) => value.time != hourToRemove
      );

      // console.log(newHoursArray);
      // console.log(hourToAdd);

      const newHoursArrInclHourToAdd = newHoursArray.some(
        (el) => el.time == hourToAdd
      );

      // console.log(newHoursArrInclHourToAdd);

      // if (!newHoursArray.includes(hourToAdd)) {
      //   newHoursArray.push(hourToAdd);
      // } else {
      //   newHoursArray.splice(newHoursArray.indexOf(hourToAdd), 1);
      //   newHoursArray.push(hourToAdd);
      // }

      if (!newHoursArrInclHourToAdd) {
        newHoursArray.push({ time: hourToAdd, dosage: doseNumber });
      } else {
        let hourExistsIndex = newHoursArray.findIndex(
          (el) => el.time == hourToAdd
        );
        // console.log(hourExistsIndex);
        // console.log(newHoursArray);
        // console.log(newHoursArray[hourExistsIndex]);
        newHoursArray.splice(hourExistsIndex, 1, {
          time: hourToAdd,
          dosage: doseNumber,
        });
      }

      let workingArray = [];
      for (let i = 0; i < newHoursArray.length; i++) {
        let hourUserSelected = {
          id: i,
          date: `Jan 1 2022 ${newHoursArray[i].time}:00`,
          dosage: newHoursArray[i].dosage,
        };
        workingArray.push(hourUserSelected);
      }

      workingArray.sort(function (a, b) {
        var c = new Date(a.date);
        var d = new Date(b.date);
        return c - d;
      });

      // console.log(workingArray);

      let finalNewHoursArray = workingArray.map((el) => ({
        time: el.date.slice(11, 16),
        dosage: el.dosage,
      }));

      // console.log(finalNewHoursArray);

      return {
        ...state,
        allHours: finalNewHoursArray,
        timesAday: {
          id: finalNewHoursArray.length,
          value:
            state.allHowOftenPerDayValues[finalNewHoursArray.length - 1].value,
        },
      };

    case "CHOOSE_HOUR":
      // console.log(action.payload);
      let numPerDay = action.payload.id;
      let numOfDoses = action.payload.numOfDose;
      let startHour = moment("08:00", "HHmm").format("HH:mm");
      let hours = [startHour];

      const renderHours = (numPerDay) => {
        let newHour;
        let minutesCount;

        switch (numPerDay) {
          case (numPerDay = 2):
            minutesCount = 900;
            break;
          case (numPerDay = 3):
            minutesCount = 450;
            break;
          case (numPerDay = 4):
            minutesCount = 300;
            break;
          case (numPerDay = 5):
            minutesCount = 225;
            break;
          case (numPerDay = 6):
            minutesCount = 240;
            break;
          case (numPerDay = 7):
            minutesCount = 205;
            break;
          case (numPerDay = 8):
            minutesCount = 180;
            break;
          case (numPerDay = 9):
            minutesCount = 160;
            break;
          case (numPerDay = 10):
            minutesCount = 145;
            break;
          case (numPerDay = 11):
            minutesCount = 130;
            break;
          case (numPerDay = 12):
            minutesCount = 120;
            break;
          case (numPerDay = 24):
            minutesCount = 60;
            break;
        }

        new Array(numPerDay - 1).fill().map((acc, index) => {
          newHour = moment(hours[index], "HHmm")
            .add(minutesCount, "minutes")
            .format("HH:mm");
          hours.push(newHour);
        });

        return hours;
      };

      hoursArray = renderHours(numPerDay);

      if (numPerDay == 1) {
        hoursArray = [startHour];
      }

      // console.log(hoursArray);

      let allHoursObject = [];
      let hourObj;

      let allHoursToBeInserted = hoursArray.map((el) => {
        hourObj = { time: el, dosage: 1 };
        allHoursObject.push(hourObj);
      });

      // console.log(allHoursObject);

      return {
        ...state,
        allHours: allHoursObject,
      };

    default:
      return state;
  }
};

export { medReducer };
