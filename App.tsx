import React from "react";
import { SafeAreaView, StyleSheet, Platform, StatusBar } from "react-native";
import Main from "./src/Main";

export default function App() {
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <Main />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
