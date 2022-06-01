import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screen/HomeScreen";
import ClockScreen from "../screen/ClockScreen";

export type RootStackParamList = {
  HomeScreen: undefined;
  ClockScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ClockScreen" component={ClockScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
