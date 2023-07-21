import {
  View,
  StyleSheet,
} from "react-native";
import React from "react";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import FloatingActionButton from "./components/FloatingActionButton";
import { Provider } from "react-redux";
import ScreenWrapper from "./ScreenWrapper";
import store from "./store/store";

export default function Main(): JSX.Element {
  return (
    <Provider store={store}>
      <ScreenWrapper>
        <View style={styles.container}>
          <TodoHeader title="Todo App"/>
          <TodoList />
          <FloatingActionButton style={{ bottom: 30, right: 30 }} />
        </View>
      </ScreenWrapper>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    alignItems: "center",
  },
});
