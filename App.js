import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Suspense, lazy } from "react";
import { StyleSheet } from "react-native";

// Lazy loading screens
const HomeScreen = lazy(() => import("./screens/HomeScreen"));
const AboutScreen = lazy(() => import("./screens/AboutScreen"));
const BankListScreen = lazy(() => import("./screens/BankListScreen"));
const DenoteScreen = lazy(() => import("./screens/DenoteScreen"));
const BankMensionScreen = lazy(() => import("./screens/BankMensionScreen"));

const CustomTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#6200ea", // Primary color for buttons
    text: "black", // Default text color
    placeholder: "green", // Placeholder color
    backdrop: "blue", // Example of adding backdrop color if needed
  },
  fonts: {
    ...DefaultTheme.fonts,
    regular: {
      fontFamily: "Roboto",
      fontWeight: "normal",
    },
    medium: {
      fontFamily: "Roboto",
      fontWeight: "500",
    },
    light: {
      fontFamily: "Roboto",
      fontWeight: "300",
    },
    thin: {
      fontFamily: "Roboto",
      fontWeight: "100",
    },
  },
};

// Create Drawer Navigator
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerLabelStyle: {
          fontSize: 16,
          color: "black",
        },
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Denote" component={DenoteScreen} />
      <Drawer.Screen name="Mention" component={BankMensionScreen} />
      <Drawer.Screen name="Bank List" component={BankListScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <PaperProvider theme={CustomTheme}>
      <GestureHandlerRootView style={styles.gestureContainer}>
        <NavigationContainer>
          <Suspense fallback={<LoadingSpinner />}>
            <MyDrawer />
          </Suspense>
        </NavigationContainer>
      </GestureHandlerRootView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  gestureContainer: {
    flex: 1,
  },
});

// Loading Spinner component (for the fallback UI)
function LoadingSpinner() {
  return <ActivityIndicator size="large" color="#6200ea" />;
}
