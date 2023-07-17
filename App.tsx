import React from "react";
import { SafeAreaView, StyleSheet, Platform, StatusBar } from "react-native";
import { useFonts } from "expo-font";
import Main from "./src/Main";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <Main />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "#f0fdfa",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
