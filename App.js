import React from "react";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import all screen here...
import LoginScreen from "./src/screens/LoginScreen";
import CatalogScreen from "./src/screens/CatalogScreen";

const Stack = createNativeStackNavigator();

// Main program
export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        {/* Daftar semua halaman */}
        <Stack.Navigator initialRouteName="LOGIN_SCREEN">
          <Stack.Screen
            name="LOGIN_SCREEN"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CATALOG_SCREEN"
            component={CatalogScreen}
            options={{ title: "Catalog" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
