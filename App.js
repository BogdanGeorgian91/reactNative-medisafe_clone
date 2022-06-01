import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StyleSheet } from "react-native";

import HomeScreen from "./screens/HomeScreen";
import AddMedicineScreen from "./screens/AddMedicineScreen";
import StrengthScreen from "./screens/StrengthScreen";
import UnitScreen from "./screens/UnitScreen";
import ScheduleScreen from "./screens/ScheduleScreen";
import DetailScreen from "./screens/DetailScreen";
import AppearanceScreen from "./screens/AppearanceScreen";
import SetReminderScreen from "./screens/SetReminderScreen";

import MedContextProvider from "./state-management/context";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <MedContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "HOME", headerTitleAlign: "center" }}
          />
          <Stack.Screen
            name="AddMedicine"
            component={AddMedicineScreen}
            options={{ title: "ADD MEDICINE", headerTitleAlign: "center" }}
          />
          <Stack.Screen
            name="Strength"
            component={StrengthScreen}
            options={{ title: "STRENGTH", headerTitleAlign: "center" }}
          />
          <Stack.Screen
            name="Unit"
            component={UnitScreen}
            options={{ title: "UNITS", headerTitleAlign: "center" }}
          />
          <Stack.Screen
            name="Schedule"
            component={ScheduleScreen}
            options={{ title: "SCHEDULE", headerTitleAlign: "center" }}
          />
          <Stack.Screen
            name="Detail"
            component={DetailScreen}
            options={{ title: "MORE DETAILS", headerTitleAlign: "center" }}
          />
          <Stack.Screen
            name="Appearance"
            component={AppearanceScreen}
            options={{ title: "APPEARANCE", headerTitleAlign: "center" }}
          />
          <Stack.Screen
            name="Set Reminder"
            component={SetReminderScreen}
            options={{ title: "Set Reminder", headerTitleAlign: "center" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </MedContextProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

// export default App;
