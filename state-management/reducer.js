import React from "react";

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
      return {
        ...state,
        units: {
          value: action.payload,
          IsValid: true,
        },
      };

    case "ADD_DAYS":
      // console.log(action)
      // console.log(action.payload);
      return {
        ...state,
        days: {
          value: action.payload,
          IsValid: true,
        },
      };

    case "ADD_FREQUENCY":
      const newValueArray = state.allFrequencies.filter(
        (item) => item.id == action.payload.id
      );
      console.log(newValueArray);
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
      // console.log(action.payload);
      return {
        ...state,
        dates: {
          id: 1,
          value: action.payload,
        },
      };

    case "RETURN_END_DATE":
      // console.log(action.payload);
      return {
        ...state,
        dates: {
          id: 2,
          value: action.payload,
        },
      };

    default:
      return state;
  }
};

export { medReducer };
