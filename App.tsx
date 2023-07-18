import React from "react";
import 'reflect-metadata';
import { SafeAreaView, StyleSheet, Platform, StatusBar } from "react-native";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import store from "./src/store/store";
import Main from "./src/Main";
import './src/services/container'; //

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
    <Provider store={store}>
      <SafeAreaView style={styles.AndroidSafeArea}>
        <Main />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "#DAFFFB",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
