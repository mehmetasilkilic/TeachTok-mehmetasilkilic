import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import BottomTabStack from "./src/Core/Stacks/BottomTabStacks";
import { TimerProvider } from "./src/Core/Context/TimerContext";

const App = () => {
  return (
    <TimerProvider>
      <NavigationContainer>
        <StatusBar barStyle={"light-content"} />
        <BottomTabStack />
      </NavigationContainer>
    </TimerProvider>
  );
};

export default App;
