// App.js
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Provider as PaperProvider, Text } from "react-native-paper";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// Importing screens from separate files
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import BankListScreen from "./screens/BankListScreen";
import DenoteScreen from "./screens/DenoteScreen";

// Create Drawer Navigator
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Denote" component={DenoteScreen} />
      <Drawer.Screen name="Bank List" component={BankListScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
      {/* <Text>rasel</Text> */}
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <PaperProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <MyDrawer />
        </NavigationContainer>
      </GestureHandlerRootView>
    </PaperProvider>
  );
}
