import {
  View,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import React from "react";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import FloatingActionButton from "./components/FloatingActionButton";
import { Provider } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import store from "./store/store";


export default function Main(): JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.AndroidSafeArea}>
        <View style={styles.container}>
          <TodoHeader />
          <TodoList />
          <FloatingActionButton style={{ bottom: 30, right: 30 }} />
        </View>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    alignItems: "center",
  },
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "#DAFFFB",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
