import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import BottomTabStack from "./src/Core/Stacks/BottomTabStacks";

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <StatusBar barStyle={"light-content"} />
      <BottomTabStack />
    </NavigationContainer>
  );
}

export default App;
