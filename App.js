import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./src/screens/HomeScreen";
import GuessTheCountry from "./src/screens/DONT-SEEGuessTheCountryScreen";
import WinScreen from "./src/screens/WinScreen";
import 'react-native-gesture-handler';
import MainNavigator from "./src/navigator/MainNavigator";

const App = () => {
  return (
    <SafeAreaProvider>
      <MainNavigator />
    </SafeAreaProvider>
  )
}

export default App;
